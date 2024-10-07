// frontend/src/components/TransactionTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("03"); // Default to March
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchTransactions();
  }, [page, search, month]);

  const fetchTransactions = async () => {
    const response = await axios.get("http://localhost:3000/api/transactions", {
      params: { page, search, month },
    });
    setTransactions(response.data.transactions);
    setTotal(response.data.total);
  };

  return (
    <div>
      <h2>Transactions</h2>
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.dateOfSale}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(page + 1)} disabled={transactions.length < 10}>
          Next
        </button>
      </div>
    </div>
  );
}

export default TransactionTable;
