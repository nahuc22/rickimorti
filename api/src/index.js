const http = require('http');
const characters = require('./utils/data');
const axios = require('axios')
const { getCharacterId , getDetailId } = require('./controllers/characters');

 
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
        return res.end(JSON.stringify(characters));
    }
    if (param1 === 'rickandmorty' && param2 === 'character') {
       return getCharacterId(req,res, id)
    }
    if (param1 === 'rickandmorty' && param2 === 'detail') {
        return getDetailId(req,res, id)
     }
    return res
        .writeHead(404, { 'Content-Type': 'text/plain' })
        .end("Not found");
}).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});