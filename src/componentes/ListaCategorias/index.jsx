import "../ListaCategorias/listaCategoria.css";
import { buscar } from "../../api/api";
import {useState, useEffect } from "react";


const ListaCategoria = (props) => {
    const [categorias, setCategorias] = useState([]);
    const [selectedCategoria, setSelectedCategoria] = useState("");
    
    useEffect(() => {
        buscarCategorias();
    }, []);

    const buscarCategorias = async () => {
        try {
            const response = await buscar("/Generos");
            setCategorias(response);
            // console.log("aqui va la respuesta:",response);
        } catch (error) {
            console.error("Error al obtener las categorías", error);
        }
    };

    const manejarCambio = (e) => {
        const selectedValue = e.target.value;
        setSelectedCategoria(selectedValue);
        props.actualizarValor(selectedValue);
    };

    return (
        <div className="lista__contenedor">
          <select
            className="lista__select"
            value={selectedCategoria}
            onChange={manejarCambio}
          >
            <option value="" disabled hidden>
              Seleccionar Categoria
            </option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria.nombreCategoria}>
                {categoria.nombreCategoria}
              </option>
            ))}
          </select>
        </div>
      );
    };
    
export default ListaCategoria;
