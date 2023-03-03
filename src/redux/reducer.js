// import { combineReducers } from "redux";
import { GET_ALL_CHARACTERS } from "./action-type";

const initialState = {
    characters: [],
    charactersDetails: [],
    error: null,
    loading: false,
   
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CHARACTERS: 
            return{
                ...state,
                characters: action.payload,  //En si el payload es un arreglo 
            }
        default:
            return {...state};            
    }
}

export default reducer;