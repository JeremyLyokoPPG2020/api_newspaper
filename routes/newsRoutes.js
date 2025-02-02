const express = require('express');
const router = express.Router();
const News = require('../models/News');
const User = require('../models/User');
const Category = require('../models/Category');

// Get all News
router.get('/list', async (req, res) => {
    try {
        const news = await News.findAll({
            attributes: ['id_news', 'judul', 'konten', 'gambar', 'created_at'],
        });
        //res.json(news);
        res.json({ data: news });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// List News by Category
router.get('/list/categories', async (req, res) => {
    const { id_category } = req.query;
    try {
        const news = await News.findAll({
            where: { id_category },
            attributes: ['id_news', 'judul', 'konten', 'gambar', 'created_at'],
        });
        res.json({ data: news });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get News Detail by ID
router.get('/detail', async (req, res) => {
    const { id_news } = req.query;
    try {
        const news = await News.findOne({
            where: { id_news },
            include: [
                { model: User, as: 'author', attributes: ['nama'] },
                { model: Category, as: 'category', attributes: ['nama_kategori'] },
            ],
        });
        if (news) res.json({ data: [news] });
        else res.status(404).json({ message: 'News not found' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add News
router.post('/add', async (req, res) => {
    const { judul, konten, gambar, id_category, id_author } = req.body;
    try {
        const newNews = await News.create({
            judul,
            konten,
            gambar,
            id_category,
            id_author,
            created_at: new Date(),
        });
        res.status(201).json({ message: 'News added successfully', data: [newNews] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
