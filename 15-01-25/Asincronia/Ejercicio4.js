function leerArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nombreArchivo) {
                resolve(`contenido del archivo ${nombreArchivo}`);
            } else {
                reject("Error: no se proporciono nombre de archivo");
            }
        }, 1000);
    });
}

leerArchivo("archivo.txt")
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.error(error)})
leerArchivo()
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.error(error)})