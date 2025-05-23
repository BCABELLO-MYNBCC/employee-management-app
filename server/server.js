const express = require('express');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('client')); // Serve frontend files

// Routes
app.use('/api/employees', employeeRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('🌐 Employee Management API Running');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
