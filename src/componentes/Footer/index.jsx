import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes,Route, Link} from 'react-router-dom';
import Logos from "../Logo";


const StyledFooter = styled.div`
  background-color:black; 
  display: flex;
  justify-content: center;
  padding: 0 15vw;
  height: 16vh;
  align-items: center;
  border-top:3px solid blue; 
`
const Footer =()=>{
    return(
      <Router>
        <StyledFooter>
          <Link to={"/Home"} reloadDocument><Logos /></Link> 
        </StyledFooter>
      </Router>  
    )
};
export default Footer;