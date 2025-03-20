const prompt = require('prompt-sync')(); 
let array = [];

for(let i = 0; i< 3; i++){
    let string = prompt("Ingrese un string: ");
    array.push(string);
}

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

