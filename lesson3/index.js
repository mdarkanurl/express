const app = require('./app');
const port = 3000;
const hostName = '127.0.0.1';

app.listen(port, hostName, () => {
    console.log(`Your server is running at http://${hostName}:${port}`);
});