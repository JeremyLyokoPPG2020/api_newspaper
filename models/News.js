const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Category = require('./Category');

const News = sequelize.define('News', {
    id_news: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    judul: DataTypes.STRING,
    konten: DataTypes.TEXT,
    gambar: DataTypes.STRING,
    id_category: DataTypes.INTEGER,
    id_author: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
}, {
    tableName: 'news',
    timestamps: false,
});

News.belongsTo(User, { foreignKey: 'id_author', as: 'author' });
News.belongsTo(Category, { foreignKey: 'id_category', as: 'category' });

module.exports = News;
