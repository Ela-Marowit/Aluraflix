import React from "react";
import styled from "styled-components";
import Hori from"../img/Horimiya.webp";
import Fondo from "../img/fondo.webp";
import "../componentes/Contenido/contenido.css";

const Conteiner = styled.div`
  display: flex;
  max-width: 100vw;
  flex-direction: column;
  background-color: grey;
`;


const Contenido = () => {
    return (<>
        <Conteiner>
            <img src={Fondo} alt="" className="contenido__img_fondo" />
            <div className="contenido__title"> 
                <img src={Hori} alt="" className="contenido__img" />
                <h2 className="contenido__title">Horimiya</h2>
            </div>
            <div className="contenido__descripcion">
                <h3 className="contenido__titulo">Sinopsis</h3>
                <p className="contenido__info">Aunque admirada en la escuela por su amabilidad y destreza académica, la estudiante de preparatoria Kyouko Hori ha estado escondiendo otro lado de ella. Con sus padres a menudo fuera de casa debido al trabajo, Hori tiene que cuidar de su hermano menor y hacer las tareas del hogar, sin tener tiempo para socializar fuera de la escuela. Mientras tanto, Izumi Miyamura es visto como un inquietante otaku que usa anteojos. Sin embargo, en realidad es una persona amable e inepta para estudiar. Además, tiene nueve piercings escondidos detrás de su largo cabello, y un tatuaje a lo largo de su espalda y hombro izquierdo. Por pura casualidad, Hori y Miyamura se cruzan fuera de la escuela, ninguno luciendo como el otro lo esperaría. Estos polos aparentemente opuestos se convierten en amigos, compartiendo un lado que nunca le han mostrado a nadie.</p>
                <h3 className="contenido__titulo">Lista de capitulos</h3>
                <div className="contenido__video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/OA7LVg4ttt0?si=FSe2jakSU-_QayTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* <iframe className="contenido__iframe" src="" width="" height=""></iframe> */}
                    <h2 className="contenido__T">Opening</h2>
                </div>
            </div>
        </Conteiner>
    </>
    );
};

export default Contenido;