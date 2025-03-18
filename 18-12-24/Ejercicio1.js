const prompt = require('prompt-sync')();

// Programa que pide dos números y muestra varias operaciones

const num1 = parseFloat(prompt("Introduce el primer número: "));
const num2 = parseFloat(prompt("Introduce el segundo número: "));

const suma = num1 + num2;
const resta = num1 - num2;
const media = (num1 + num2) / 2;
const mayor = Math.max(num1, num2);
const menor = Math.min(num1, num2);

console.log(`La suma de los números es: ${suma}`);
console.log(`La resta de los números es: ${resta}`);
console.log(`La media de los números es: ${media}`);
console.log(`El número más grande es: ${mayor}`);

console.log(`El número más pequeño es: ${menor}`);