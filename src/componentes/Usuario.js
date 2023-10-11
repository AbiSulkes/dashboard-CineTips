import React, { Component } from 'react';

//En el constructor, se inicializa el estado del componente con un array vacío llamado en este caso "usuarios"
class Usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: [], 
            isLoading: true, // Agregar una bandera para mostrar el estado de carga
        };
    }

    //llamada a la API
    apiCall(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.log(error));
    }

    //Llama a apiCall con la URL de la API para obtener la lista de usuarios y pasa la función mostrarUsuarios como callback.
    traerUsuarios() {
        this.apiCall("https://cinetips.onrender.com/usuarios/usuarios", this.mostrarUsuarios);  
    }

    componentDidMount() {
        console.log("Me monté");
        this.traerUsuarios();
    }

    // actualizacion del estado con los usuarios obtenidos
    mostrarUsuarios = (data) => {
        console.log(data);
        this.setState({
            usuarios: data.Usuarios,  // Almacenar los usuarios en el estado
        });
    }

    render() {
        //variable que guarda la info "contenido"
        // si los usuarios no se cargaron que muestre "cargando..." si no que los visualice
        let contenido;
        if (this.state.usuarios.length === 0) {
            contenido = "Cargando...";
        } else {
            contenido = this.state.usuarios.map((usuario) => (
                <div key={usuario.id}>
                    <h5>Usuario:{usuario.nombre}</h5>
                    <p>Correo: {usuario.correo}</p>
                    <img src={usuario.imagen} alt={`Imagen de ${usuario.nombre}`} />
                </div>
            ));
        }

        return (
            <div>
                <br />
            <h2>Usuarios</h2>
                {contenido}
            </div>
        );
    }
}

export default Usuario;

