const prompt = require('prompt-sync')();
let day = prompt("Introduce tu dia de nacimiento: ");
let month = prompt("Introduce tu mes de nacimiento: ");
let year = prompt("Introduce tu año de nacimiento: ");

let fecha = day + month + year;
while(fecha.length > 1){
    let suma = 0;
    for(value of fecha){
        suma += parseInt(value);
    }
    fecha = suma.toString();
}
console.log(`Tu número de la suerte es ${fecha}`);