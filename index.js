const express = require('express');
var request = require('request');
const cors = require('cors');

// Create Express Server
const app = express();
app.use(cors());
// Configuration
const PORT = 3000;
const API_SERVICE_URL = "https://cryptobubbles.net/backend/data/bubbles1000.usd.json";

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This is a proxy service which proxies to JSONPlaceholder API.');
});

app.get('/bubbles', (req, res) => {
    request(API_SERVICE_URL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body) // Print the google web page.
            res.status(200).json(JSON.parse(body));
        }
    })
});

// Start Proxy
app.listen(PORT, () => {
    console.log(`Starting Proxy at localhost:${PORT}`);
});