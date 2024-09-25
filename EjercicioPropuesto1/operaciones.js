// Función para sumar
const sumar = (a, b, callback) => {
    if (a <= b) {
        throw new Error("El primer valor debe ser mayor que el segundo.");
    }
    if (b === 0) {
        throw new Error("El segundo valor no puede ser 0.");
    }
    const resultado = a + b;
    callback(resultado);
};

// Función para restar
const restar = (a, b, callback) => {
    if (a <= b) {
        throw new Error("El primer valor debe ser mayor que el segundo.");
    }
    if (b === 0) {
        throw new Error("El segundo valor no puede ser 0.");
    }
    const resultado = a - b;
    callback(resultado);
};

// Función para multiplicar
const multiplicar = (a, b, callback) => {
    if (a <= b) {
        throw new Error("El primer valor debe ser mayor que el segundo.");
    }
    if (b === 0) {
        throw new Error("El segundo valor no puede ser 0.");
    }
    const resultado = a * b;
    callback(resultado);
};

// Función para dividir
const dividir = (a, b, callback) => {
    if (a <= b) {
        throw new Error("El primer valor debe ser mayor que el segundo.");
    }
    if (b === 0) {
        throw new Error("El segundo valor no puede ser 0.");
    }
    const resultado = a / b;
    callback(resultado);
};

// Ejemplo de callback que muestra el resultadof
const mostrarResultado = (resultado) => {
    console.log("Resultado:", resultado);
};

// Ejemplo de uso
const valor1 = 10; // Primer valor
const valor2 = 5;  // Segundo valor

// Llamadas a las funciones con callbacks
sumar(valor1, valor2, mostrarResultado);        // Sumar
restar(valor1, valor2, mostrarResultado);       // Restar
multiplicar(valor1, valor2, mostrarResultado);  // Multiplicar
dividir(valor1, valor2, mostrarResultado);      // Dividir


