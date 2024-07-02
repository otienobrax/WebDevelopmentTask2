const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory database
let users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// POST route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    if (name && email) {
        users.push({ name, email });
        res.json({ message: 'User data received successfully' });
    } else {
        res.status(400).json({ message: 'Invalid input' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
