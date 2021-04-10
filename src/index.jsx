import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

  /** REDUX STATE */
  // ACTIONS - Las instrucciones para modificar el estado.
  	
  export const borrarMensaje = (index) => {
    return {
      type: 'BORRAR_MENSAJES',
      payload: index
    }
  }

  export const vaciarMensajes = () => {
    return {
      type: 'VACIAR_MENSAJES'
    }
  }

  export const crearMensaje = (msg) => {
    return {
      type: 'CREAR_MENSAJES',
      payload: msg
    }
  }
  
  export const leerMsj = (index) => {
    return {
      type: 'LEER_MENSAJES',
      payload: index
    }
  }
  // REDUCERS - Las funciones que ejecutarán las instrucciones (actions)
  // y que devolverán el nuevo estado modificado.
  const mensajes = (state = [], action) => {
    switch(action.type) {
      case 'BORRAR_MENSAJES': state.splice(action.payload, 1); return [...state];
      case 'VACIAR_MENSAJES': return [];
      case 'CREAR_MENSAJES': state.push(action.payload); return [...state];
      case 'LEER_MENSAJES': state[action.payload].leido = !state[action.payload].leido; return [...state];
      default: return [...state];
    }
  }

  /** REDUX STATE */
  // STORE - El estado global de la aplicación.
  let store = createStore(
    mensajes,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
