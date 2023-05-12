const http = require('http');
const characters = require('./utils/data');
const PORT = 3001

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const url = req.url.split('/');
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];
    console.log(url)

    if (param1 === 'rickandmorty' && param2 === 'characters') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
    }
    if (param1 === 'rickandmorty' && param2 === 'character') {
    }
    res.end("hola rickosos")
}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});