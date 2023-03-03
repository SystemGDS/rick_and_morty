import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer';

const composerEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//Esta linea es para conectar con la extension del Navegador >>>> REDUX DELTOOLS

const store = createStore(
    Reducer, 
    composerEnHancer(applyMiddleware(thunk))//Esta linea es para poder peticiones a un server);
)

export default store;