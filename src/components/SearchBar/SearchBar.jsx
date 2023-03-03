import React, { useState } from 'react'
import { useSelector } from 'react-redux';


export default function SearchBar(props) {
   //props = {onSearch= function}
  const [characters, setCharacter] = useState('')
  const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value);
   }

   const cargando = useSelector(state => state.characters.loading);


   return (
      
      <div >
         <input 
            type="search"
            name="search"
            placeholder='Ingresar N° entre 1 y 826'
            id="search"  
            onChange = {handleChange}
            className="form-control"
         />
         <button className='btn btn-danger nuevo-post d-block d-md-inline-block' onClick={() => props.onSearch(characters)}>Agregar</button>
         {cargando ? <p>Cargando...</p>: null}
      </div>
   );
}
