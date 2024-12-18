const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id_category: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama_kategori: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
}, {
  tableName: 'categories',
  timestamps: false,
});

module.exports = Category;
