const prompt = require('prompt-sync')();
let num = prompt("Introduce un número de 3 digitos: ");
let suma = 0;

for(value of num){
    suma += parseInt(value);
}
console.log(`La suma de los digitos de ${num} es ${suma}`);
