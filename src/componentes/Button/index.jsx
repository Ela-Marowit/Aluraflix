import styled from "styled-components";
import {React} from "react";
import "../Button/button.css";

const StyleButton = styled.button`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: max-content;
  
`;

const Button = ({color="grey", namebutton, type="button", onClick}) =>{

    return (
        <StyleButton style={{backgroundColor:color}} className="button" type={type} onClick={onClick}>{namebutton} </StyleButton>
    )  
};
export default Button;
// export const TomatoButton=StyleButton;