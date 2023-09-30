
import styled from "styled-components";
import {React} from "react";
import "../Campo/campo.css";


const StyleCampo = styled.div`
  display: flex;
  padding: 0 15vw;
  align-items: center;
  justify-content: center;
`;

const Campo = (props) => {
    const { type = "text" } = props

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return (
        <StyleCampo className={`campo-${type}`}>
            <label>{props.titulo}</label>
            <input className="campo__input"
                placeholder={props.placeholder}
                required={props.required}
                onChange={manejarCambio}
                value={props.valor}
                type={type}
            />
        </StyleCampo>
    )
};

export default Campo;