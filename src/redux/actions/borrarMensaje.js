import {ACTIONS_MENSAJES} from '../actions'
const borrarMensaje = (index) => {
	return {type: ACTIONS_MENSAJES.BORRAR,payload: index}
}

export default borrarMensaje;