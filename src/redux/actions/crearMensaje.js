import {ACTIONS_MENSAJES} from '../actions'
const crearMensaje = (msg) => {
	return {type: ACTIONS_MENSAJES.CREAR,payload: msg}
}
export default crearMensaje;