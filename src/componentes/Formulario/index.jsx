import "../Formulario/formulario.css";
import Campo from "../Campo/index.jsx";
import { useState } from "react";
import ListaCategoria from "../ListaCategorias";
import Descripcion from "../Descripcion";
import Button from "../Button";
import { Link } from 'react-router-dom';
import { postForm } from "../../api/api";

const Formulario = (props) => {

    const [titulo, actualizarTitulo] = useState("");
    const [linkVideo, actualizarLinkVideo] = useState("");
    const [linkFoto, actualizarLinkFoto] = useState("");
    const [listaCategoria, actualizarListaCategoria] = useState("");
    const [descripcion, actualizarDescripcion] = useState("");

    function extractVideoId(url) {
        // Match the YouTube URL pattern and extract the video ID
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})(?:\S+)?$/;
        const match = url.match(regex);

        if (match && match[1]) {
            return "https://youtube.com/embed/" + match[1]; // Return the video ID
        }

        return "https://youtube.com/embed/dQw4w9WgXcQ"; // Return placeholder vid if no match found
    }
    // const { registrarVideo } = props

    function extractImage(url) {
        const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^www\.[^\s/$.?#].[^\s]*$/;
        const match = url.match(regex);
        console.log("match",match);
        if (match && match[1]) {
            return match[0]; // Return the image url
        }

        return "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2626/files/2020/07/thumbs-up-yes-approve-1-062118.png"; // Return placeholder img if no match found
    }
    const limpiar = async (e) => {
        e.preventDefault();
        console.log("Limpiar formulario");
        actualizarTitulo("");
        actualizarLinkVideo("");
        actualizarLinkFoto("");
        actualizarListaCategoria("");
        actualizarDescripcion("");
    }
    const manejarEnvio = async (e) => {
        e.preventDefault();
        let datosAEnviar = {
            titulo: titulo,
            linkVideo: extractVideoId(linkVideo),
            linkFoto: extractImage(linkFoto),
            listaCategoria: listaCategoria,
            descripcion: descripcion,
        };
        console.log("Datos a enviar: ",datosAEnviar);
        try {
            await postForm("/videos", datosAEnviar);
            console.log("Datos guardados con éxito");
            // Puedes redirigir al usuario a otra página aquí si lo deseas
        } catch (error) {
            console.error("Error al enviar los datos", error);
        }
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2 className="formulario__titulo">Nuevo Video</h2>
            <Campo
                placeholder="Título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                placeholder="Ingresa el Link del video"
                required
                valor={linkVideo}
                actualizarValor={actualizarLinkVideo}
            />
            <Campo
                placeholder="Ingresar el Link de la imagen del video"
                required
                valor={linkFoto}
                actualizarValor={actualizarLinkFoto}
            />

            <ListaCategoria
                valor={listaCategoria}
                actualizarValor={actualizarListaCategoria}
            // actualizarListaCategoria={actualizarListaCategoria}
            // equipos={props.equipos}
            />
            <Descripcion
                placeholder="Descripción"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />
            <div className="namebuttontodos">
                <Button namebutton="Guardar" type="submit" />
                <Button onClick={limpiar} namebutton="Limpiar" color="rgb(100, 26, 26)" />
                <Link to="/NuevaCategoria" style={{ textDecoration: "none" }}>
                    <Button component={Link} to="/NuevaCategoria" namebutton="Nueva Categoría"/>
                </Link>
            </div>
        </form>
    </section>

};

export default Formulario;