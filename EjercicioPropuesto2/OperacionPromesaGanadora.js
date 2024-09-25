// Función que simula la suma
const suma = (a, b) => {
    return new Promise((resolve) => {
        const tiempoSuma = Math.floor(Math.random() * 2000) + 1000; // Tiempo entre 1 y 3 segundos
        setTimeout(() => {
            const resultado = a + b;
            resolve(`Suma: ${resultado}`);
        }, tiempoSuma);
    });
};

// Función que simula la resta
const resta = (a, b) => {
    return new Promise((resolve) => {
        const tiempoResta = Math.floor(Math.random() * 2000) + 1000; // Tiempo entre 1 y 3 segundos
        setTimeout(() => {
            const resultado = a - b;
            resolve(`Resta: ${resultado}`);
        }, tiempoResta);
    });
};

// Función que simula la multiplicación
const multiplicacion = (a, b) => {
    return new Promise((resolve) => {
        const tiempoMultiplicacion = Math.floor(Math.random() * 2000) + 1000; // Tiempo entre 1 y 3 segundos
        setTimeout(() => {
            const resultado = a * b;
            resolve(`Multiplicación: ${resultado}`);
        }, tiempoMultiplicacion);
    });
};

// Función principal que ejecuta las promesas
const calcular = (a, b) => {
    // Iniciar las promesas para cada operación
    const sumaPromise = suma(a, b);
    const restaPromise = resta(a, b);
    const multiplicacionPromise = multiplicacion(a, b);

    // Usar Promise.race para obtener la primera que se resuelva
    Promise.race([sumaPromise, restaPromise, multiplicacionPromise])
        .then(resultado => {
            console.log(resultado); // Mostrar el resultado de la operación ganadora
        });
};

// Ejemplo de uso
const num1 = 10;
const num2 = 5;
calcular(num1, num2);
