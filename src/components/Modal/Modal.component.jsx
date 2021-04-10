import { Formik } from 'formik';
import React from 'react';
import './Modal.component.scss';
import MensajeValidacion from '../MensajeValidacion/MensajeValidacion.component';

const Modal = ({ handleClose, show, children, onSubmit, validaciones }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let initialValues = { nombre: '', descripcion: '', mail: '' };

    return (<div className={showHideClassName}>
        <section className="modal-main">
            {children}
            <Formik validationSchema={validaciones} initialValues={initialValues} onSubmit={onSubmit}>
                {({values, handleChange, handleSubmit, isSubmitting, errors})=>(
                    <form onSubmit={handleSubmit} className="formulario" autoComplete="false">
                        <strong>Crear Mensaje</strong>
                        <div className="firstLine">               
                            <div className="botonera">
                                <input className="Elemento" placeholder="Introduce el asunto..." type="text"
                                        name="nombre" 
                                        onChange={handleChange} 
                                        value={values.nombre} 
                                />                                
                                <input className="Elemento" placeholder="Introduce el mail..." type="text"
                                        name="mail" 
                                        onChange={handleChange} 
                                        value={values.mail} />
                                <button className="Elemento Nuevo" type="submit" disabled={isSubmitting}>Enviar</button>
                                <button className="Cerrar" type="button" onClick={handleClose}> Close </button>
                            </div>
                        </div>
                        <div className="firstLine">               
                            <div className="botonera2">
                                {errors.nombre ? (<MensajeValidacion msg={errors.nombre}/>) : null}
                                {errors.mail ? (<MensajeValidacion msg={errors.mail}/>) : null}
                            </div>
                        </div>
                        <textarea className="Elemento" placeholder="Introduce tu mensaje..."
                                name="descripcion" 
                                onChange={handleChange} 
                                value={values.descripcion} />            
                        {errors.descripcion ? (<MensajeValidacion msg={errors.descripcion}/>) : null}
                    </form>
                )}
            </Formik>
        </section>
    </div>);
};

export default Modal;