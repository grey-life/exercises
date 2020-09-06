const express = require('express');
const path = require('path');
const http = require('http');
const PORT = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const server =  http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server is starting at http://localhost:${PORT}`)
});