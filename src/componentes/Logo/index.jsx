import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.png";

const Logo = styled.img`
  height: 70px;
  width: 100px;
`;

const Logos = () => {
    return (
        <Logo src={logo} alt="Logo Flix"/>
    );
  };
  
export default Logos;