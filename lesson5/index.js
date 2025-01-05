const express = require('express');
const app = express();
const port = 3001;
const hostName = '127.0.0.1';

app.get('/', (req, res) => {
    const id = req.query.id;
    const age = req.query.age;
    const name = req.query.name;
    res.send(`<h1>Student id is ${id} and age is ${age} and my name is ${name}</h1>`);
});

app.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}`);
});