// Función que genera un número aleatorio y devuelve una promesa
const generarNumeroAleatorio = () => {
    return new Promise((resolve, reject) => {
        // Generar un número aleatorio entre 1 y 100
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        // Verificar si el número está en el rango deseado
        if (numeroAleatorio >= 20 && numeroAleatorio <= 60) {
            resolve(numeroAleatorio);
        } else {
            reject(`Número ${numeroAleatorio} fuera del rango [20-60].`);
        }
    });
};

// Función para mostrar el resultado
const mostrarResultado = () => {
    generarNumeroAleatorio()
        .then((numero) => {
            console.log(`Número aleatorio generado: ${numero}`);
        })
        .catch((error) => {
            console.log(error);
            // Puedes intentar nuevamente si lo deseas
            mostrarResultado(); // Descomentar para intentar nuevamente
        });
};

// Llamar a la función para mostrar el resultado
mostrarResultado();
