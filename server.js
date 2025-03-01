const express = require('express');
const app = express();
const port = 5000;

function magicMath(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return magicMath(n - 1) + magicMath(n - 2) + n;
    }
}

app.get('/:n', (req, res) => {
    const n = parseInt(req.params.n, 10);
    if (isNaN(n) || n < 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide a non-negative integer.' });
    }
    const result = magicMath(n);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Magic Math app listening at http://127.0.0.1:${port}`);
});