import React,  {useState, useEffect} from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'
import Form from './components/Form/Form'

//Redux
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'



function App () {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  const username = 'ejemplo@gmail.com';
  const password = '1passwor';
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/');
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);

 function login(userData) {
  if (userData.password === password && userData.username === username) {
     setAccess(true);
     navigate('/home');
  }
}
//   const example = {
//     name: 'Morty Smith',
//     species: 'Human',
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };
  // const onSearch = (data)=>{
  //   setCharacters([...characters, example]);     
  // } 
  function onSearch(character) {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id!== id));
  }

  const location = useLocation();
console.log(location);
  return (
    // <div>     
    //   <img src="../img/Rick_and_Morty_logo.png" className='img-container' alt='logo' />
    <div className='App' styles={{pading: '25px'}} > 
    {location.pathname !== "/" && <NavBar onSearch = {onSearch}/>}
      
      <hr />
    <Routes>
          
          <Route exact path= "/" element={<Form login={login}/>} />        
          <Route path= "/about" element={<About />} />  
          <Route path= "/home" element={ <Cards
              characters={characters}
              onClose = {onClose}
            />} />  
          <Route path= "/detail/:detailId" element={<Detail />} />  
      
    </Routes>         
        
     
    </div>
  // </div>
  )
}

export default App
