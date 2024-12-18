// routes/categoryRoutes.js
const express = require('express');
const router = express.Router(); // This line initializes the router

const db = require('../config/db'); // This imports the sequelize instance

// Endpoint: Daftar Kategori
router.get('/list', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM categories');
        res.json(rows); // Send back the results
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle any errors
    }
});

// Export the router to use it in the main server file
module.exports = router;
