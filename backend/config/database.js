// config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "adarshdhital007",
  password: "98aDA19#",
  database: "postgres",
  host: "localhost",
});

module.exports = sequelize;
