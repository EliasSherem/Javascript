const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Introduce un número: "));
let num2 = parseInt(prompt("Introduce otro numero: "));

function suma(num1, num2){
    console.log( num1 + num2);
}

suma(num1, num2);