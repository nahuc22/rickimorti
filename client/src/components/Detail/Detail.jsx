import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const URL_BASE = 'hhtps://be-a-rym.up.railway.app/api/character';
const API_KEY = '327d6e86721e.18b839a561fd5c4c4ec5'

const Detail = () => {
const { id } = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
   axios(`http://localhost:3001/rickandmorty/detail/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

   return (
      <div key={character.id}>
         <h2>{character.name} </h2>
         <h2>{character.status} </h2>
         <h2>{character.species} </h2>
         <h2>{character.gender} </h2>
         <h2>{character.origin} </h2>
         <h2>{character.location} </h2>
         <img src={character.image} alt={character.name} />
      </div>
   )
}

export default Detail;