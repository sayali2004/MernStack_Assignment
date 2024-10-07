
const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.FLOAT,
  category: DataTypes.STRING,
  sold: DataTypes.BOOLEAN,
  dateOfSale: DataTypes.DATE,
  image: DataTypes.STRING,
});

module.exports = Transaction;
