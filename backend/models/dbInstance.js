const { Sequelize } = require('sequelize');
require('dotenv').config();

exports.sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
