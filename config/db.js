const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,  // news_database
  process.env.DB_USER,  // root or app_user
  process.env.DB_PASS,  // your password
  {
    host: process.env.DB_HOST,  // localhost
    dialect: 'mysql',
    port: process.env.DB_PORT,  // 3306
  }
);


module.exports = sequelize;
