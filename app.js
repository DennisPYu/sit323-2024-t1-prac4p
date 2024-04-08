const express = require('express');
const app = express();

// Addition 
app.get('/add', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({
        result
    });
});

// Subtraction 
app.get('/subtract', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({
        result
    });
});

// Multiplication 
app.get('/multiply', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({
        result
    });
});

// Division 
app.get('/divide', (req, res) => {
    const {
        num1,
        num2
    } = req.query;
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input. Please provide valid numbers.' });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({
            error: 'Division by zero is not allowed.'
        });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({
        result
    });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal Server Error'
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});