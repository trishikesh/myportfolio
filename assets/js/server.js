const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded data
app.use(bodyParser.json()); // Parses JSON data
app.use(express.static(path.join(__dirname, '../..'))); // Serve static files

app.post('/submit-form', (req, res) => {
    const { first_name, last_name, email, phone, message } = req.body;

    if (!first_name || !last_name || !email || !phone || !message) {
        return res.status(400).send('All fields are required.');
    }

    const content = `
Name: ${first_name} ${last_name}
Email: ${email}
Phone: ${phone}
Message: ${message}
------------------------------
`;

    fs.appendFile('contact_messages.txt', content, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            return res.status(500).send('Error saving the message');
        }
        res.status(200).send('Message saved successfully!');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
