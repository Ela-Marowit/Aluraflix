import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../componentes/Contenido/contenido.css";
import { useParams } from "react-router-dom";
import fondo from "../img/fondo.webp";

const Conteiner = styled.div`
  display: flex;
  max-width: 100vw;
  flex-direction: column;
  background-color: grey;
`;


const Contenido = () => {
    const {id} = useParams();
    const [data, setData] = useState(null); // State to store fetched data

    useEffect(() => {
        buscarDatos();
    }, []);

    const buscarDatos = async () => {
        try {
            const response = await fetch(`http://localhost:5000/videos/`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            const matchingData = data.find(item => item.id === Number(id));
            if (matchingData) {
                setData(matchingData); // Update the state with the matching data
              } else {
                console.error(`No data found for ID: ${id}`);
              }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    if (data === null) {
        // Data is still being fetched
        return <div>Loading...</div>;
    }

    return (<>
        <Conteiner>
            <img src={fondo} alt="" className="contenido__img_fondo" />
            <div className="contenido__title"> 
                <img src={data.linkFoto} alt="" className="contenido__img" />
                <h2 className="contenido__title">{data.titulo}</h2>
            </div>
            <div className="contenido__descripcion">
                <h3 className="contenido__titulo">Sinopsis</h3>
                <p className="contenido__info">{data.descripcion}</p>
                <h3 className="contenido__titulo">Lista de capitulos</h3>
                <div className="contenido__video">
                    <iframe className="contenido__iframe" width="300" height="190" src={data.linkVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h2 className="contenido__T">{data.titulo}</h2>
                </div>
            </div>
        </Conteiner>
    </>
    );
};

export default Contenido;