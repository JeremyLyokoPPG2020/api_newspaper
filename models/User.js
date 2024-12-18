const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nama: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.ENUM('admin', 'user'),
  created_at: DataTypes.DATE,
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
