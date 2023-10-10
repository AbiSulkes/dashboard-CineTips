import './Home.css';

function Home() {
    return (
        <div >
            <br />
            <h2 className='titulo'>Dashboard Cine Tips</h2>
            <br />
            <div className='container'>

                <div className='contenedor'>
                    <h5 className='texto'>Total Usuarios</h5>
                </div>
                <div className='contenedor'>
                    <h5 className='texto'>Total Productos</h5>
                </div>
                <div className='contenedor'>
                    <h5 className='texto'>Total Categorias</h5>
                </div>

            </div>
            <br />


           
                <ul>
                    <li>Ultimo usuario creado</li>
                    <li>Ultimo producto creado</li>
                    <li>Categorias</li>
                    <li>Listado de Productos</li>
                </ul>
       





        </div>
    );
}

export default Home;