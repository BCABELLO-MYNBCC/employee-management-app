const db = require('../config/db');

// GET all employees
const getAllEmployees = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM employees');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

// POST new employee
const createEmployee = async (req, res) => {
  const { name, position, department, email } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO employees (name, position, department, email) VALUES (?, ?, ?, ?)',
      [name, position, department, email]
    );
    res.status(201).json({ id: result.insertId, message: 'Employee created' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
};

module.exports = {
  getAllEmployees,
  createEmployee
};
