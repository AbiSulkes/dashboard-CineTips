import React, { Component } from 'react';

class Calificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: [],
            isLoading: true, // Agregar una bandera para mostrar el estado de carga
        };
    }

    componentDidMount() {
        console.log("Me monté");
        this.traerProductos();
    }

    // Llamada a la API
    apiCall(url) {
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error; // Propagar el error para que se maneje en el componente
            });
    }

    // Obtener productos de la API y actualizar el estado
    traerProductos() {
        this.apiCall("https://cinetips.onrender.com/peliculas/productos")
            .then(data => {
                console.log(data);
                this.setState({
                    productos: data.data || [],
                    isLoading: false, // Cambiar el estado de carga después de obtener datos
                });
            })
            .catch(error => {
                console.error('Error fetching productos:', error);
                this.setState({ isLoading: false }); // Cambiar el estado de carga en caso de error
            });
    }

    render() {
        const { productos, isLoading } = this.state;

        let contenido;

        if (isLoading) {
            contenido = "Cargando...";
        } else {
            contenido = productos.map(producto => (
                <div key={producto.id}>
                    <h5>Producto: {producto.nombre}</h5>
                    <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                    <p>Duración: {producto.duracion}</p>
                    <p>Fecha de estreno: {producto.fecha_estreno}</p>
                    <p>Tipo: {producto.tipo}</p>
                    
                </div>
            ));
        }

        return (
            <div>
                <br />
                <h2>Calificaciones</h2>
                {contenido}
            </div>
        );
    }
}

export default Calificacion;