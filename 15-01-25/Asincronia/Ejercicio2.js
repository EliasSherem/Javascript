function descargarDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
            if (exito) {
                resolve("Datos descargados con éxito.");
            } else {
                reject("Error al descargar los datos.");
            }
        }, 2000); // Simula un retraso de 2 segundos
    });
}

// Ejemplo de uso
descargarDatos()
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));