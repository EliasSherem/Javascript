const prompt = require('prompt-sync')();
let edad = parseInt(prompt("Introduce tu edad: "));

if(edad >= 18){
    let tieneLicencia = prompt("¿Tienes licencia de conducir? (s/n): ");
    if(tieneLicencia == 's'){
        let nombre = prompt("Introduce tu nombre: ");
        let apellido = prompt("Introduce tu apellido: ");
        let ciudad = prompt("Introduce tu ciudad donde recoge: ");
        let dias = parseInt(prompt("Introduce los días de alquiler: "));
        console.log(`Nombre: ${nombre} ${apellido} \nCiudad en la que recoge: ${ciudad}`);
        let costo;
        if(dias == 7){
            costo = 150;
            console.log(`Costo: $${costo}`);
        }else{
            costo = 25*dias;
            console.log(`Costo: $${costo}`);
        }

    }else{
        console.log("No puedes alquilar un auto si no tienes licencia de conducir.");
    } 
}else{
    console.log("No puedes alquilar un auto si eres menor de edad.");
}