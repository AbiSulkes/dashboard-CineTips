import React, { Component } from 'react';

class UltimoUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ultimoUsuario: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        this.traerUltimoUsuario();
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

    traerUltimoUsuario() {
        this.apiCall("https://cinetips.onrender.com/usuarios/usuarios")
            .then(data => {
                console.log("Data received:", data);

                if (data && data.Usuarios && data.Usuarios.length > 0) {
                    const ultimoUser = data.Usuarios[data.Usuarios.length - 1];
                    console.log("Ultimo usuario:", ultimoUser);

                    this.setState({
                        ultimoUsuario: ultimoUser,
                        isLoading: false,
                    });
                } else {
                    console.warn("No users found in the data.");
                    this.setState({ isLoading: false });
                }
            })
            .catch(error => {
                console.error('Error fetching último usuario:', error);
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { ultimoUsuario, isLoading } = this.state;

        return (
            <div>
                {isLoading ? (
                    <p>Cargando...</p>
                ) : (
                    ultimoUsuario ? (
                        <div>
                            <h5>Último Usuario: {ultimoUsuario.nombre}</h5>
                            <p>ID: {ultimoUsuario.id}</p>
                            <p>Correo: {ultimoUsuario.correo}</p>
                            <img src={ultimoUsuario.imagen} alt={`Imagen de ${ultimoUsuario.nombre}`} />                               
                            {/* Agrega más campos según necesites */}
                        </div>
                    ) : (
                        <p>No hay usuarios disponibles.</p>
                    )
                )}
            </div>
        ); 
    }
}

export default UltimoUsuario;

