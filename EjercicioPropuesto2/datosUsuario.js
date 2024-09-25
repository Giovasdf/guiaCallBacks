// Definición de usuarios
const usuarios = [
    { id: 2356256, name: 'Juan', lastName: 'Duran', age: 35 },
    { id: 27564512, name: 'Manuel', lastName: 'Perez', age: 31 },
    { id: 17658624, name: 'Jocelyn', lastName: 'Rodriguez', age: 30 },
    { id: 12345678, name: 'Maria', lastName: 'Garrido', age: 30 }
];

// Función para buscar un usuario por nombre o ID
const buscarUsuario = (criterio, callback) => {
    // Simulamos una búsqueda que toma tiempo
    setTimeout(() => {
        const usuarioEncontrado = usuarios.find(usuario => 
            (typeof criterio === 'string' && usuario.name.toLowerCase() === criterio.toLowerCase()) || 
            (typeof criterio === 'number' && usuario.id === criterio)
        );

        // Llamar al callback con el resultado
        callback(usuarioEncontrado);
    }, 2000); // Esperar 2 segundos antes de ejecutar el callback
};

// Función para mostrar los datos del usuario
const mostrarDatosUsuario = (usuario) => {
    if (usuario) {
        console.log(`Usuario encontrado:`);
        console.log(`ID: ${usuario.id}`);
        console.log(`Nombre: ${usuario.name}`);
        console.log(`Apellido: ${usuario.lastName}`);
        console.log(`Edad: ${usuario.age}`);
    } else {
        console.log(`Usuario no encontrado.`);
    }
};

// Ejemplo de uso
const criterioBusquedaPorNombre = 'Juan'; // Cambiar a 'Manuel', 'Jocelyn', 'Maria' o un ID para probar
const criterioBusquedaPorID = 27564512; // Cambiar a otro ID para probar

// Buscar por nombre
buscarUsuario(criterioBusquedaPorNombre, mostrarDatosUsuario);

// Buscar por ID
buscarUsuario(criterioBusquedaPorID, mostrarDatosUsuario);
