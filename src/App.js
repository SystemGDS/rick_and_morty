import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/NavBar/NavBar";
// import Form from "./components/Form/Form";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";

function App() {
//   // const [characters, setCharacters] = useState([]);
//   const [access, setAccess] = useState(false);
  
//   const username = 'ejemplo@gmail.com';
//   const password = '1password';
//   const navigate = useNavigate();

//   useEffect(() => {
//     !access && navigate('/');
//  // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, [access]);

//  function login(userData) {
//   if (userData.password === password && userData.username === username) {
//      setAccess(true);
//      navigate('/home');
//   }
// }
// //   const example = {
// //     name: 'Morty Smith',
// //     species: 'Human',
// //     gender: 'Male',
// //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// //  };
//   // const onSearch = (data)=>{
//   //   setCharacters([...characters, example]);     
//   // } 
//   // function onSearch(character) {
//   //  fetch(`https://rickandmortyapi.com/api/character/${character}`)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //        if (data.name) {
//   //           setCharacters((oldChars) => [...oldChars, data]);
//   //        } else {
//   //           window.alert('No hay personajes con ese ID');
//   //        }
//   //     });
//   // }

//   // const onClose = (id) => {
//   //   setCharacters(characters.filter((char) => char.id!== id));
//   // }

//   const location = useLocation();
//   console.log(location);


  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        {/* <Route exact path= "/" element={<Form login={login}/>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, updatePageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Personajes</h1>
      <SearchBar setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        updatePageNumber={updatePageNumber}
      />
    </div>
  );
};

export default App;
