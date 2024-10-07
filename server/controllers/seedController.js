// server/controllers/seedController.js
const axios = require("axios");
const Transaction = require("../models/Transaction");

async function seedDatabase(req, res) {
  try {
    const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    const transactions = response.data;

    // Insert data into the database
    for (const transaction of transactions) {
      await Transaction.create({
        title: transaction.title,
        description: transaction.description,
        price: transaction.price,
        category: transaction.category,
        sold: transaction.sold,
        dateOfSale: new Date(transaction.dateOfSale),
        image: transaction.image,
      });
    }

    res.send("Database seeded successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error seeding the database");
  }
}

module.exports = { seedDatabase };
