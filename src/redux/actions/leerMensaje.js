import {ACTIONS_MENSAJES} from '../actions'
const leerMsj = (index) => {
	return {type: ACTIONS_MENSAJES.LEER,payload: index}
}
export default leerMsj;