const prompt = require('prompt-sync')();
let array = [];

for(let i = 0; i< 10; i++){
    let number = prompt("Ingrese un número: ");
    array.push(number);
}

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}