const prompt = require('prompt-sync')();
const numero = parseFloat(prompt("Introduce un número:"));

if (numero >= 1) {
    const cuadrado = numero ** 2;
    console.log(`El cuadrado de ${numero} es ${cuadrado}`);
} else {
    console.log("El número es menor que 1, no se calcula el cuadrado.");
}
const cubo = numero ** 3;
console.log(`El cubo de ${numero} es ${cubo}`);