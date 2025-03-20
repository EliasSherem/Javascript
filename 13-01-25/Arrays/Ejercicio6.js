const prompt = require("prompt-sync")();

let array = [];
for(let i = 0; i<3; i++){
    let number = prompt("Ingrese un número: ");
    array.push(number);
}

console.log(Math.min(...array));