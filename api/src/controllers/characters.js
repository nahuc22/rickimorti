const axios = require('axios');

function getCharacterId(req, res , id){

   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => response.data)
   .then((ch) => {
    const character = {
        name: ch.name,
        gender: ch.gender,
        species: ch.species,
        origin: ch.origin?.name,
        image: ch.image,
        status: ch.status,
    } 
    res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(character
            ));
    });  
}

function getDetailId(req, res , id){

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((ch) => {
     const character = {
         name: ch.name,
         gender: ch.gender,
         species: ch.species,
         origin: ch.origin.name,
         image: ch.image,
         status: ch.status,
         location: ch.location.name
     } 
     res
         .writeHead(200, { 'Content-Type': 'application/json' })
         .end(JSON.stringify(character
             ));
     });  
 }

module.exports = { 
    getCharacterId,
    getDetailId
}