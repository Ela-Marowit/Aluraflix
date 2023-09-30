import React from "react";
import styled from "styled-components";
import nuevobanner from "../../img/nuevobanner.webp";
import "../Banner/banner.css";

const StyledBanner = styled.div`
  display: flex;
  height: 60vh;
  /* max-width: 100vw; */
  position: relative;
  
`
const Imgbanner = styled.img`
  height: 60vh;
  width: 100vw;
  position: relative;
  filter: grayscale(90%);
  
`;
const Box1 = styled.div`
  width: 50vw;
  height: 60vh;
  top:23vh;
  align-items: end;
  display: flex;
  justify-content: center;
  
  
`;


const Banner = () => {
    return (
        <StyledBanner>
            <Imgbanner src={nuevobanner} alt="Banner"></Imgbanner>
            <div className="banner__contenedor">
                <Box1 className="banner__conT">
                    <h2 className="banner__titulo">Anime</h2>
                    <p className="banner__text">Cada protagonista nos deja una lección a través de su historia y por la narrativa y características de cada personaje nos deja conocer y aprender diversos valores como la solidaridad, el respeto por los mayores, entre otros.</p>
                </Box1>
                <Box1>
                    <iframe className="banner__video" width="430" height="215" src="https://www.youtube.com/embed/-eb9pP0Ttd8?si=Fj_Fstc6_fCGO4ue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Box1>
            </div>
        </StyledBanner>
    )
};
export default Banner