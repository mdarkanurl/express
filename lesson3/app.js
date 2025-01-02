const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');

app.use('/api/user', userRouter);


app.use((req, res) => {
    res.send('It\'s not a valid url.');
    res.end();
});

app.use('/', (req, res) => {
    res.send('This is get request.');
    res.end();
});

module.exports = app;