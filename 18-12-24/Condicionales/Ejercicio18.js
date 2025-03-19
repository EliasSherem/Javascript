const prompt= require('prompt-sync')();
let num1 = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));
let num3 = parseInt(prompt("Introduce el tercer número: "));

console.log(`el menor numero es ${Math.min(num1, num2, num3)}`);
