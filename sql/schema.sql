-- Drop the employees table if it already exists (for reset/testing purposes)
DROP TABLE IF EXISTS employees;

-- Create the employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    position VARCHAR(100),
    department VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    hire_date DATE DEFAULT (CURRENT_DATE),
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
