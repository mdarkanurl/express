const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is get request.');
    res.end();
});

router.get('/about', (req,res) => {
    res.send('This is second get request.');
    res.end;
});

router.get('/contact', (req, res) => {
    res.send('This is Contact get request.');
    res.end;
});

module.exports = router;