import React from "react";
import Banner from "../componentes/Banner/index.jsx";
import ConteinerVideo from "../componentes/ConteinerVideos/index.jsx";
import styled from "styled-components";

const Conteiner = styled.div`
  display: flex;
  /* background-color: grey; */
  max-width: 100vw;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Home = () => {
    return (
      <Conteiner>
        <Banner/>
        <ConteinerVideo/>
      </Conteiner>  
    );
};

export default Home;