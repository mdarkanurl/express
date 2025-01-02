const app = require('./app');
const hostName = '127.0.0.1';
const port = 3000;

app.listen(port, hostName, () => {
    console.log(`Your server is running at http://${hostName}:${port}`);
    
})