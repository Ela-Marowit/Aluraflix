import React from "react";
import NuevoVideo from "../../pages/NuevoVideo";
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "../../pages/Home";
import NuevaCategoria from "../../pages/NuevaCategoria";
import Contenido from "../../pages/Contenido";


const Body = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/NuevoVideo' element={<NuevoVideo/>}/>
          <Route path='/NuevaCategoria' element={<NuevaCategoria/>}/>
          <Route path='/Contenido/:id' element={<Contenido/>}/>
        </Routes>  
    </Router>
  );
};

export default Body;
