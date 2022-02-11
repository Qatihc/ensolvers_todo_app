import { Sequelize } from 'sequelize';
require('dotenv').config();

export const sequelize = new Sequelize(process.env.DB_URI as string, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    }
  }
});
