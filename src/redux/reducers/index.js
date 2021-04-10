import mensajes from './mensajes'
import isLogged from './isLogged'

//Estados iniciales
export const initialState = {
    mensajes: [],
    isLogged: false
};
// REDUCERS - Las funciones que ejecutarán las instrucciones (actions)
// y que devolverán el nuevo estado modificado.
export {mensajes};
export {isLogged};