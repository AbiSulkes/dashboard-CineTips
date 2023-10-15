import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';





function Home() {
    //TOTAL USUARIOS
    const [totalUsuarios, setTotalUsuarios] = useState(null);

    //TOTAL PRODUCTOS
    const [totalProductos, setTotalProductos] = useState(null);

    //TOTAL CATEGORIAS/GENEROS
    const [totalCategorias, setTotalCategorias] = useState(null);

    //SOLICITUD A LA API PARA TRAER AL TOTAL DE USUARIOS
    useEffect(() => {
        // Hacer la solicitud a la API
        fetch('https://cinetips.onrender.com/usuarios/usuarios')
            .then(response => response.json())
            .then(data => {
                // Extraer el número total de usuarios
                const total = data.Cantidad_usuarios;
                setTotalUsuarios(total);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    //SOLICITUD A LA API PARA TRAER AL TOTAL DE PRODUCTOS
    useEffect(() => {
        // Hacer la solicitud a la API
        fetch('https://cinetips.onrender.com/peliculas/productos')
            .then(response => response.json())
            .then(data => {
                // Extraer el número total de productos
                const total = data.productoTotal;
                setTotalProductos(total);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    //SOLICITUD A LA API PARA TRAER AL TOTAL DE CATEGORIAS/GENEROS
    useEffect(() => {
        // Hacer la solicitud a la API
        fetch('https://cinetips.onrender.com/peliculas/generos')
            .then(response => response.json())
            .then(data => {
                // Extraer el número total de categorías
                const total = data.productoTotal;
                setTotalCategorias(total);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2 className='titulo'>DASHBOARD Cine Tips</h2>
            <br />
            <div className='container'>
                <div className='contenedor'>

                    <h5 className='texto'>Total Usuarios: {totalUsuarios}</h5>
                </div>
                <div className='contenedor'>
                    <h5 className='texto'>Total Productos: {totalProductos}</h5>
                </div>
                <div className='contenedor'>
                    <h5 className='texto'>Total Categorías (generos): {totalCategorias}</h5>
                </div>
            </div>
            <br />
            <div className='container'>
                <div className='contenedor2'>
                    <h4 className='tituloBajada'>Categorías en la base de datos</h4>
                    <hr />
                    <br />

                    <div className='container'>

                        <div className='container3'>
                        <button className='cajaRoja'>   <Link to="./Genero"> <h6 className='tituloCategoria' >CATEGORIA: Generos</h6></Link></button> 
                        </div>



                        <div className='container3'>
                        <button className='cajaRoja'>   <Link to="./Calificacion"> <h6 className='tituloCategoria' >CATEGORIA: Calificación</h6></Link></button> 
                        </div>

                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className='container'>
                        <div className='container3'>
                            <button className='cajaRoja'>  <Link to="./UltimoUsuario"> <h6 className='tituloCategoria' >Último usuario creado</h6> </Link></button>
                        </div>

                        <div className='container3'>
                            <button className='cajaRoja'> <Link to="./UltimoProducto"> <h6 className='tituloCategoria' > Último producto creado</h6>  </Link> </button>
                        </div>
                    </div>
                    <br />

                </div>
            </div>
        </div>
    );
}

export default Home;