// import { useSelector, useDispatch } from  'react-redux'
import React from 'react';
// import { getAllCharactersAxios } from "../../redux/actions";


import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   //characters = [{--},{--},{---}]

   // const dispatch = useDispatch()
   // // const characters = useSelector((state) => state.characters)
   // const { characters } = useSelector(state => state)

   // useEffect(() => {
   //      dispatch(getAllCharactersAxios())        
   //  },[dispatch])

   return (
   <div className='d-flex col-md-8'>
      {characters.map(character => (
         <Card 
            id = {character.id}
            key = {character.id}
            name    = {character.name} 
            species = {character.species}
            gender  = {character.gender}
            image   = {character.image}    
            onClose ={() => props.onClose(character.id)}     
         />
      ))},
   </div>);
}
