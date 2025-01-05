const express = require('express');
const app = express();

// app.use('/about', (req, res) => {
//     res.write('Hello, is it working properly');
//     res.end();
// });

app.use('/about', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/register', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/register.html');
});

app.use('/login', (req, res) => {
    // res.cookie("name", "Mohammad Arkan");
    // res.cookie("age", "17");
    res.clearCookie("name");
    res.append("id", "6081");
    res.end();
});

module.exports = app;