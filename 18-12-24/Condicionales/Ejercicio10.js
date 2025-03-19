const prompt = require('prompt-sync')();
// Solicitar dos valores al usuario
let valor1 = parseInt(prompt("Introduce el primer valor:"));
let valor2 = parseInt(prompt("Introduce el segundo valor:"));

if (valor1 === valor2) {
    console.log(0);
} else if (valor1 % 6 === valor2 % 6) {
    console.log(Math.min(valor1, valor2));
} else {
    console.log(Math.max(valor1, valor2));
}