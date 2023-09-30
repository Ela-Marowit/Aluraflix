import axios from "axios";

export const api= axios.create({baseURL:"http://localhost:5000"});

export const postForm = async (url, datos)=>{
    const {data} = await api.post(url, datos)
};

// export const buscar = (url) => {
//     // const respuesta = 
//     axios.get(url)
//     .then(function(respuesta){
//         console.log("Buscar en API",respuesta.data);
//         return (respuesta.data);
//     })
// }
export const buscar = async (url) => {
    try {
        const response = await api.get(url);
        console.log("Resultado de búsqueda en API: ", response.data);
        return response.data;
    } catch (error) {
        console.error("Error al buscar en la API", error);
        throw error; // Puedes re-lanzar el error para que sea manejado en otro lugar si es necesario.
    }
};
// const ListPosts = ({url})=>{
//     const [posts, setPosts] = useState([])
//     useEffect(()=>{
//         buscar(url, setPosts)
//     }, [url])
//     return (
//         <section ClassName = "posts container">
//             {posts.map(post=>{
//                 const {id, title, metadesc, categoria} = post;
//                 return <Link to={`/posts/${id}`} className={`post_card${categoria}`} Key={id}></Link>
//             })}
//         </section>
//     )
// }
// export default ListPosts