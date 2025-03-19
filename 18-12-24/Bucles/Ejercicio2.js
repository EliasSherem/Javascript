const prompt = require('prompt-sync')();
let num = parseInt(prompt("Introduce un número: "));
let suma=0;
for(let i = 1; i <= num; i++){
    suma += i;
}
console.log(`La suma de los números del 1 al ${num} es ${suma}`);