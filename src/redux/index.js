import {mensajes, isLogged} from './reducers'
import { createStore, combineReducers } from 'redux';

let reduccers = combineReducers({
    mensajes: mensajes,
    isLogged: isLogged
});

let store = createStore(
    reduccers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;