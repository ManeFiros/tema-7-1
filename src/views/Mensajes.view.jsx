import './Mensajes.view.css'
import MensajesHeader from '../components/MensajesHeader/MensajesHeader.component';
import MensajesTable from '../components/MensajesTable/MensajesTable.component';
import { useState } from 'react';
import Modal from '../components/Modal/Modal.component';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { borrarMensaje, crearMensaje, leerMsj, vaciarMensajes } from '../index';
  // Nos suscribimos a cada cambio que reciba el estado
  //store.subscribe(() => {
  //  console.log('🗨 El nuevo estado de nuestra aplicación es... ');
  //  console.log(store.getState());
  //});
  

export default function Mensajes(props){
    const mensajes = useSelector(state => state);  // El estado inicial será '[]'
    const dispatch = useDispatch();
    const [showModal,setShowModal] = useState(false);

    let nuevoMensaje = (values, {setSubmitting}) => {
        //e.preventDefault();
        setShow();
        let nuevo = {
            "asunto":  `${values.nombre}`,//e.target.getElementsByTagName("input")[0].value,
            "email":   `${values.mail}`,//e.target.getElementsByTagName("input")[1].value,
            "mensaje": `${values.descripcion}`,//e.target.getElementsByTagName("textarea")[0].value,
            "leido":false
        };
        
        dispatch(crearMensaje(nuevo));
        setSubmitting(false);
    };

    let eliminarMensajes = () => { dispatch(vaciarMensajes()); };
      
    let eliminarMensaje = (index) => { dispatch(borrarMensaje(index)); };
    
    let leerMensaje = (index) => { dispatch(leerMsj(index)); };

    let setShow = () => { setShowModal(!showModal); };

    const validaciones = Yup.object().shape({
        nombre: Yup.string()
          .required('Por favor, escribe el asunto.'),
        descripcion: Yup.string()
          .required('Por favor, escribe un mensaje.')
          .min(10, 'Mínimo 10 carácteres.'),
        mail: Yup.string()
          .required("Por favor, incluye el e-mail")
          .email("Introduzca un e-mail válido")
    });
    
    return (
        <div className="Mensajes">
            <Modal show={showModal} 
                    handleClose ={setShow} 
                    onSubmit={nuevoMensaje}
                    validaciones={validaciones}/>

            <MensajesHeader show={showModal} setShow={setShow} clickEliminar={eliminarMensajes}/>
            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje} 
                clickMarcarLeido={leerMensaje}/>
        </div>
    );
}