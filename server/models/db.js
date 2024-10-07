
const { Sequelize } = require("sequelize");

// Connect to MySQL
const sequelize = new Sequelize("ecommerce", "root", "Pass@123", {
  host: "localhost",
  dialect: "mysql",
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = sequelize;
