import borrarMensaje from './borrarMensaje'
import crearMensaje from './crearMensaje'
import leerMsj from './leerMensaje'
import vaciarMensajes from './vaciarMensajes'
import logOut from './logOut'
import logIn from './logIn'

//enums
export const ACTIONS_MENSAJES = {
    VACIAR: "VACIAR_MENSAJES",
    BORRAR: "BORRAR_MENSAJES",
    CREAR: "CREAR_MENSAJES",
    LEER: "LEER_MENSAJES"
}
export const ACTIONS_ISLOGGED = {
    IN: "LOG_IN",
    OUT: "LOG_OUT"
}
// ACTIONS - Las instrucciones para modificar el estado.
export {borrarMensaje};
export {crearMensaje};
export {leerMsj};
export {vaciarMensajes};
export {logOut};
export {logIn};