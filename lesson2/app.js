const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I\'m a get request at home route.');
});

app.get('/about', (req, res) => {
    res.send('I\'m a about request at home route.');
});

app.get('/contact', (req, res) => {
    res.send('I\'m a contact request at home route.');
});

app.post('/', (req, res) => {
    res.send('I\'m a post request at home route.');
});

app.put('/', (req, res) => {
    res.send('I\'m a put request at home route.');
});

app.delete('/', (req, res) => {
    res.send('I\'m a delete request at home route.');
});


module.exports = app;