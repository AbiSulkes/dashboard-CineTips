import React, { Component } from 'react';

class Calificacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        console.log("Me monté");
        this.traerPeliculas();
    }

    apiCall(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }

    traerPeliculas() {
        this.apiCall("https://cinetips.onrender.com/peliculas/todo")
            .then(data => {
                console.log(data);
                this.setState({
                    peliculas: data.data || [],
                    isLoading: false,
                });
            })
            .catch(error => {
                console.error('Error fetching peliculas:', error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { peliculas, isLoading } = this.state;

        let contenido;

        if (isLoading) {
            contenido = "Cargando...";
        } else {
            contenido = peliculas.map(pelicula => (
                <div key={pelicula.id}>
                    <h5>Película: {pelicula.productoFilm.nombre}</h5>
                    <p>Calificación: {pelicula.calificacion}</p>
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

