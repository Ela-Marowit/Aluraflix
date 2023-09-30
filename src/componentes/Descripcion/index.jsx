import styled from "styled-components";
import {React} from "react";
import "../Descripcion/descripcion.css";

const StyleTextarea = styled.div`
  display: flex;
  padding: 0 15vw;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
`;


const Descripcion = (props) => {

    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }
    return (
        <StyleTextarea className={`${type}`}>
            <textarea className="descripcion__textarea"
                placeholder={props.placeholder}
                required={props.required}
                onChange={manejarCambio}
                value={props.valor}
                type={type}
            />
        </StyleTextarea>
    )
};

export default Descripcion;