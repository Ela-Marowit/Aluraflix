import {React, useState }from "react";
import "../componentes/Formulario/formulario.css";
import Campo from "../componentes/Campo";
import Descripcion from "../componentes/Descripcion";
import Button from "../componentes/Button";
import { postForm } from "../api/api";
// import hexToRgba from 'hex-to-rgba';

const NuevaCategoria = () => {

    const [nombreCategoria, actualizarNombreCategoria] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");
    const [color, actualizarColor] = useState("");
    
    const limpiar = async (e) => {
        e.preventDefault();
        console.log("Limpiar formulario");
        actualizarNombreCategoria("");
        actualizarDescripcion("");
        actualizarColor("#000000");
    }
    const manejarNuevaCategoria = async (e) =>{
        e.preventDefault()
        let datosAEnviar = {
            nombreCategoria: nombreCategoria,
            descripcion: descripcion,
            color: color
          };
        console.log(datosAEnviar);
        try {
            const respuesta = await postForm("/Generos", datosAEnviar);
            console.log("Datos guardados con éxito", respuesta);
            // Puedes redirigir al usuario a otra página aquí si lo deseas
          } catch (error) {
            console.error("Error al enviar los datos", error);
          }
    };
    return (
        <section className="formulario">
            <form onSubmit={manejarNuevaCategoria}>
                <h2 className="formulario__titulo">Nueva Categoría</h2>
                <Campo
                placeholder="Género"
                required
                valor={nombreCategoria}
                actualizarValor={actualizarNombreCategoria}
                />
                <Descripcion
                placeholder="Descripción"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
                />
                <Campo
                titulo="Color:" 
                placeholder="Color" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
                />
                <div className="namebuttontodos">
                    <Button namebutton="Guardar" type="submit" />
                    <Button onClick={limpiar} namebutton="Limpiar" color="rgb(100, 26, 26)" />
                </div>

            </form> 
        </section>  
    );
};

export default NuevaCategoria;