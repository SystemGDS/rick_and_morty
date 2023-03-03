import { GET_ALL_CHARACTERS } from './action-type';
import axios from 'axios';

export const getAllCharactersAxios = () =>  {
    return async dispatch => {
        try {
            const response = await axios('https://rickandmortyapi.com/api/character/');
        return dispatch({
            type: GET_ALL_CHARACTERS,
            payload: response.data.results
        });

        } catch (error) {
            console.log(error.message);
        }        
     }
}//Funcion

// const getAllCharactersFetch = () => async dispatch =>{
//     try {
//         return fetch('https://rickandmortyapi.com/api/character/')
//         .then(response => response.json())
//         .then(data => dispatch({
//             type: GET_ALL_CHARACTERS,
//             payload: data.results
//         }));
        
//     } catch (error) {
//         console.log(error.message);
//     }
// }   
