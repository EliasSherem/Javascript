const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Introduce un número: "));
let num2 = parseInt(prompt("Introduce otro numero: "));

function suma(num1, num2){
    return num1 + num2;
}

let result = suma(num1, num2);
console.log(`el resultado de la suma es ${result}`);