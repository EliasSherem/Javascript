const prompt = require('prompt-sync')();
let array = [1,1,1,1,1,1,1,1,1,1];
let index;
do{
    index = parseInt(prompt("Ingrese un número entre 0 y 9: "));
    console.log(array[index]);
    array[index] *= 2;
}while(index != -1);



