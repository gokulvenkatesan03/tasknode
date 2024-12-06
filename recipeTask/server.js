const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/dbConfig'); // Adjust the path if needed
const recipeRouter = require('./Routers/recipeRouter');

const app = express();
app.use(bodyParser.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/recipes', recipeRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
