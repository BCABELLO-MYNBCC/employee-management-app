const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  createEmployee
} = require('../controllers/employeeController');

// GET /api/employees
router.get('/', getAllEmployees);

// POST /api/employees
router.post('/', createEmployee);

module.exports = router;
