import React, { Component } from 'react';

class UltimoProducto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ultimoProducto: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.traerUltimoProducto();
    }

    apiCall(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }

    traerUltimoProducto() {
        this.apiCall("https://cinetips.onrender.com/peliculas/todo")
            .then(data => {
                console.log("Data received:", data);

                if (data.data && data.data.length > 0) {
                    const ultimoProd = data.data[data.data.length - 1];
                    console.log("Ultimo producto:", ultimoProd);

                    this.setState({
                        ultimoProducto: ultimoProd,
                        isLoading: false,
                    });
                } else {
                    console.warn("No products found in the data.");
                    this.setState({ isLoading: false });
                }
            })
            .catch(error => {
                console.error('Error fetching último producto:', error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { ultimoProducto, isLoading } = this.state;

        return (
            <div>
                {isLoading ? (
                    <p>Cargando...</p>
                ) : (
                    ultimoProducto ? (
                        <div>
                            <h5>Último Producto: {ultimoProducto.nombre}</h5>
                            <p>iD: {ultimoProducto.id}</p>
                            <p>calificacion: {ultimoProducto.calificacion}</p>
                            <p>comentario: {ultimoProducto.comentario}</p>
                            <p>video: <iframe width="1000" height="550" src= {ultimoProducto.productoFilm.video}  title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe> </p>
                            <p>imagen: <img src={ultimoProducto.productoFilm.imagen1} alt={`Imagen de ${ultimoProducto.productoFilm.nombre}`} /> </p>
  

                            {/* Agrega más campos según necesites */}
                        </div>
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )
                )}
            </div>
        );
    }
}

export default UltimoProducto;

