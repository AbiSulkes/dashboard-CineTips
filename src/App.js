import React from 'react';
//css
import './App.css';
//Nabvar
import Home from './componentes/Home';
import Usuario from './componentes/Usuario';
import Producto from './componentes/Producto';
import Genero from './componentes/Genero';
import Calificacion from './componentes/Calificacion';
import Error from './componentes/Error';
//importo React router
import { Link, Route, Routes } from 'react-router-dom';
//importo bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//importo bootstrap css desplegable
import Dropdown from 'react-bootstrap/Dropdown';

//body
function App() {
  return (
    <div>

      <header>

        <Link className='enlace' to="/" exact={true}>HOME</Link>
        <Link className='enlace' to="/Usuario">USUARIOS</Link>
        <Link className='enlace' to="/Producto">PRODUCTOS</Link>

        <Dropdown>
          <Dropdown.Toggle className='enlaceDesplegable'>
            CATEGORÍAS
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as='a' href="/Genero">
              Genero
            </Dropdown.Item>
            <Dropdown.Item as='a' href="/Calificacion">
              Calificacion
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/Producto" element={<Producto />} />
          <Route path="/Genero" element={<Genero />} />
          <Route path="/Calificacion" element={<Calificacion />} />
          <Route element={<Error />} />
        </Routes>

      </header>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>

    </div>
  );
}

export default App;

