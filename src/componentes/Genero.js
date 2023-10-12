import React, { Component } from 'react';

class Genero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generos: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.traerGeneros();
    }

    apiCall(url) {
        return fetch(url)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }

    traerGeneros() {
        this.apiCall("https://cinetips.onrender.com/peliculas/generos")
            .then(data => {
                this.setState({
                    generos: data.data || [],
                    isLoading: false,
                });
            })
            .catch(error => {
                console.error('Error fetching generos:', error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { generos, isLoading } = this.state;

        let contenido;

        if (isLoading) {
            contenido = "Cargando...";
        } else {
            contenido = generos.map(genero => (
                <div key={genero.id}>
                    <h5>Genero: {genero.genero}</h5>
                    <p>Productos:</p>
                    <ul>
                        {genero.productos.map(producto => (
                            <li key={producto.id}>{producto.nombre}</li>
                        ))}
                    </ul>
                </div>
            ));
        }

        return (
            <div>
                <br />
                <h2>Géneros</h2>
                {contenido}
            </div>
        );
    }
}

export default Genero;
