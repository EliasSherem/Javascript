const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Introduce el primer número: "));
let num2 = parseInt(prompt("Introduce el segundo número: "));
let num3 = parseInt(prompt("Introduce el tercer número: "));

console.log(`El número mayor es ${Math.max(num1, num2, num3)}`);
