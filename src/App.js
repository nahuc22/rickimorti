import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Nav from './components/NavBar/NavBar';
import Detail from './components/Detail/Detail';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorite/Favorite';





const URL_BASE = 'https://be-a-rym.up.railway.app/api/';
/*const API_KEY = '327d6e86721e.18b839a561fd5c4c4ec5';*/

const email = 'agu@gmail.com';
const password = '123asd';

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();


  const login = (userData) => {
if (userData.email === email && userData.password === password){
  setAccess(true);
  navigate('/home');

} else {
  window.alert('¡No hay personajes con este ID!');
}
  }
  useEffect(() => {
    !access && navigate('/')
  },  [access])
  

  const onSearch = (id) => {
    axios (`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => { 
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
  }
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => 
      character.id !== Number(id));
    setCharacters(charactersFiltered);
  }

  return (
    <div className="container">
      {
        location.pathname !== '/'
        ? <Nav onSearch={onSearch} />
        : null
      }
      <Routes>
        <Route path='/' element={ <Form login={login} />} />
        <Route path='/home' element={ <Container characters={characters} onClose={onClose} />} />
        <Route path='/about' element={ <About />} />
        <Route path='/favorites' element={ <Favorites onClose={onClose} />} />
        <Route path='/detail/:id' element={ <Detail />} />
      </Routes>
      
    </div>
  );
}


export default App;
