//Nabvar
import React from 'react';
import './App.css';
import Home from './componentes/Home';
import Usuario from './componentes/Usuario';
import Producto from './componentes/Producto';
import Error from './componentes/Error';
import { Link, Route, Routes } from 'react-router-dom'; //importo React router

import 'bootstrap/dist/css/bootstrap.min.css'; //importo bootstrap css

function App() {
  return (
    <div>

      <header className="navbar">


        <Link className='enlace' to="/" exact={true}>Home</Link>
        <Link className='enlace' to="/Usuario">Usuario</Link>
        <Link className='enlace' to="/Producto">Producto</Link>

        <hr />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/Producto" element={<Producto />} />
          <Route element={<Error />} />
        </Routes>

      </header>


    </div>
  );
}

export default App;

