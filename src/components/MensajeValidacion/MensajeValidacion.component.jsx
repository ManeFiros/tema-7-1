import './MensajeValidacion.component.scss';

export default function MensajeValidacion(props){

    return(<div className="MensajeValidacion">
        {props.msg}
    </div>);
}