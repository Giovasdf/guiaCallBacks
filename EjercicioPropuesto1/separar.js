// Función separar que recibe un arreglo y un callback
const separar = (numeros, callback) => {
    // Filtrar los números pares e impares
    const pares = numeros.filter(numero => numero % 2 === 0);
    const impares = numeros.filter(numero => numero % 2 !== 0);

    // Crear el objeto con los arreglos pares e impares
    const resultado = {
        pares: pares,
        impares: impares
    };

    // Ejecutar el callback con el resultado
    callback(resultado);
};

// Ejemplo de callback que muestra el resultado
const mostrarResultado = (resultado) => {
    console.log("Pares:", resultado.pares);
    console.log("Impares:", resultado.impares);
};

// Ejemplo de uso
const arregloNumeros = [3, 12, 7, 1, 2, 9, 18];

// Llamada a la función separar, pasando el arreglo y el callback
separar(arregloNumeros, mostrarResultado);
