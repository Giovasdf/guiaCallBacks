// Función que suma los puntos de dos ejercicios
const sumarPuntos = (puntosEjercicio1, puntosEjercicio2, callback) => {
    const puntosTotales = puntosEjercicio1 + puntosEjercicio2;
    callback(puntosTotales);
};

// Función para verificar si se ha superado la prueba
const verificarAprobacion = (puntosTotales) => {
    const maxPuntos = 10; // Ponderación total
    const puntosNecesarios = 6; // Puntos necesarios para aprobar

    if (puntosTotales >= puntosNecesarios) {
        console.log(`¡Felicidades! Has superado la prueba con ${puntosTotales} puntos.`);
    } else {
        console.log(`Lo siento, no has superado la prueba. Has obtenido ${puntosTotales} puntos.`);
    }
};

// Ejemplo de uso
const puntosEjercicio1 = 4; // Puntos obtenidos en el primer ejercicio
const puntosEjercicio2 = 5; // Puntos obtenidos en el segundo ejercicio

sumarPuntos(puntosEjercicio1, puntosEjercicio2, verificarAprobacion);
