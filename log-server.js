const https = require('https')
const fs = require('fs')
const express = require('express');
const app = express();
const PORT = 5000;

// Middleware for CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Parse JSON bodies
app.use(express.json());

// Handle preflight requests
app.options('/log', (req, res) => {
    res.sendStatus(200);
});

// GET endpoint (for simple URL-based logging)
app.get('/log', (req, res) => {
    const msg = req.query.msg || 'No message';
    const userAgent = req.get('User-Agent') || 'Unknown';
    console.log(`[REMOTE LOG] ${msg}`);
    console.log(`[USER AGENT] ${userAgent}`);
    res.sendStatus(204);
});

// POST endpoint (for structured logging)
app.post('/log', (req, res) => {
    const { message, level, timestamp, extra } = req.body;
    const userAgent = req.get('User-Agent') || 'Unknown';
    
    console.log(`[REMOTE LOG ${level || 'INFO'}] ${message || 'No message'}`);
    if (extra) {
        console.log(`[EXTRA DATA]`, extra);
    }
    console.log(`[USER AGENT] ${userAgent}`);
    res.sendStatus(204);
});

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(5000, '0.0.0.0', () => {
  console.log('Enhanced logger running at https://0.0.0.0:5000');
});