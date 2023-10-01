import styled from "styled-components";
import React, {useState, useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "../ConteinerVideos/conteinerVideos.css";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";
import database  from "../../DB/db.json";

const Conteiner = styled.div`
  display: flex;
  width: 100vw;
`;

const ConteinerVideo = () => {

    const [titulos, setTitulos]=useState([]);
    const [color, setColor]= useState([]);
    const [imagenes, setImagenes]=useState([]);

    // const texto = "";
    // const lista=[0,1,2,3,4,5];
    // console.log("Tipo de texto: ",typeof(texto));
    // console.log("Tipo de lista: ",typeof(lista));

    useEffect(() => {
        buscarTitulos();
    }, []);
    let respuestaGeneros = [];
    let respuestaVideos = [];
    const buscarTitulos = async () => {
        try {
            respuestaGeneros = await buscar("/Generos");
            respuestaVideos = await buscar("/videos");
        } catch (error) {
            console.log("Error al obtener datos de la API. Trabajando desde DB", error);
            respuestaGeneros = database.Generos;
            respuestaVideos = database.videos;
            // console.error("Error al obtener las categorías", error);
        }
            const listaGeneros = respuestaGeneros.map(item=>item.nombreCategoria);
            setTitulos(listaGeneros);
            let listaAuxiliar = [];
            for (let i=0;i<listaGeneros.length;i++){
                listaAuxiliar.push([listaGeneros[i],['id','linkImagen','linkVideo']]);
            }
            setImagenes(listaAuxiliar);
            const listaColores = respuestaGeneros.map(item=>item.color);
            setColor(listaColores);
            // const listaImagen = respuestaVideos.map(item=>item.linkFoto);
            // setImgs(listaImagen);
            // respuestaVideos.forEach((x) => {
            //     if (x.listaCategoria) {
            //       // If x.listaCategoria exists, append the data to the corresponding category
            //       if (!dictVideos[x.listaCategoria]) {
            //         dictVideos[x.listaCategoria] = [];
            //       }
            //       dictVideos[x.listaCategoria].push([x.id, x.linkVideo, x.linkFoto]);
            //     }
            //   });
            const nestedArray = [];
            for (let i =0;i<listaGeneros.length;i++){
                nestedArray.push([listaGeneros[i],[]]);
            }
            // Iterating through the JSON data
            for (let i = 0; i < respuestaVideos.length; i++) {
                const data = respuestaVideos[i];
                const genero = data.listaCategoria;
                const nestedItem = [data.id, data.linkFoto, data.titulo];
                
                // Find the index of the genero in the nestedArray
                const generoIndex = nestedArray.findIndex(item => item[0] === genero);
                if (generoIndex !== -1) {
                    // If the genero already exists, push the data item into its sub-array
                    nestedArray[generoIndex][1].push(nestedItem);
                } else {
                    // If the genero doesn't exist, create a new entry with an array containing the genero and the data item
                    nestedArray.push([genero, [nestedItem]]);
                }
            }
            setImagenes(nestedArray);
            // console.log("Nested list: ",imgs[0][1][0][1])
            // dictVideos = Object.assign({},...respuestaVideos.map((x)=>
            // ({[x.linkVideo]:[x.listaCategoria,x.linkFoto,x.id]})));
    };

    const contenedor = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (<>

        {titulos.map((genero, index) => (
        <Conteiner key={index} style={{backgroundColor:color[index]||"#fff"}}>
            <div className="content">
                    <div className="container">
                        <h1 className="header">{genero}</h1>
                    <Slider {...contenedor}>
                        {imagenes[index][1].map((item, indice) =>(
                            <div key={index + "-" + indice}>
                                <Link style={{textDecoration:"none"}} to={`/Contenido/${item[0]}`}>
                                    <img src={item[1]} alt="" className="img" />
                                    <h2 className="title">{item[2]}</h2>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Conteiner>
    ))}
    
    </>
    );
};

export default ConteinerVideo;

// return (
//     <Conteiner>
//         <div className="content">
//             <h1 className="header">Romance</h1>
//             <div className="container">
//                 <Slider {...contenedor}>
//                     {Images.map((item) => (
//                     <div key={item.id}>
//                         <img src={item.src} alt={item.alt} className="img" />
//             {/* <h2 className="title">{item.title}</h2>
//             <p className="description">{item.description}</p> */}
//                     </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     </Conteiner>
// );


// {dictVideos[genero].map((videoInfo, videoIndex) =>{
//     <div key={videoIndex}>
//     <div>{genero}</div> {/* Esto es el título de la categoría */}
//     {/* Renderiza la información del video, como imagen y título */}
//     <img src={videoInfo[1]} alt="" className="img" />
//     <h2 className="title">{videoInfo[0]}</h2>
//   </div>
// }
// )}