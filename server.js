// server.js
const express = require('express');
const sequelize = require('./config/db'); // Import sequelize instance
const newsRoutes = require('./routes/newsRoutes');
const categoryRoutes = require('./routes/categoryRoutes'); // Import the correct route file

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON

// Routes setup
app.use('/api/news', newsRoutes); // Routes for news
app.use('/api/categories', categoryRoutes); // Routes for categories

// Database connection
sequelize.authenticate()
    .then(() => console.log('Database connected successfully!'))
    .catch(err => console.error('Database connection failed:', err));

// Sync database models (if you're using models)
sequelize.sync()
    .then(() => console.log('Database synchronized with models.'))
    .catch(err => console.error('Error syncing database models:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
