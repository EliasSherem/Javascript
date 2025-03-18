const prompt = require('prompt-sync')();

// Programa que pide numerador y denominador, y realiza la división si es válida

const numerador = parseFloat(prompt("Introduce el numerador: "));
const denominador = parseFloat(prompt("Introduce el denominador: "));

if (denominador !== 0) {
    const resultado = numerador / denominador;
    console.log(`El resultado de la división es: ${resultado}`);
} else {
    console.log("No se puede dividir por cero");
}