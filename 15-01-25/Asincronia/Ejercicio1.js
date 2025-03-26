function temporizador(segundos, callback) {
    setTimeout(() => {
        callback();
    }, segundos * 1000);
}

// Ejemplo de uso
temporizador(3, () => {
    console.log("¡Han pasado 3 segundos!");
});