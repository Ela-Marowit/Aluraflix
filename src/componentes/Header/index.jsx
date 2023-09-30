import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Logos from "../Logo";
// import Banner from "../Banner/index";


const StyledHeader = styled.nav`
  background-color:black; 
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 12vh;
  align-items: center;
  border-bottom:3px solid blue;
`;
const BtnHeader = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  color:white;
  background:black;
  text-decoration: none;
`;

const Header = () => {
  return (
    <Router>
      <StyledHeader>
        <Link to={"/Home"} reloadDocument><Logos /></Link> 
        <BtnHeader href="/NuevoVideo">Nuevo video</BtnHeader>
      </StyledHeader>
    </Router>
  );
};

export default Header;


