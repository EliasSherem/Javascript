const prompt = require('prompt-sync')();
let suma = 0;

for(i=0;i<10;i++){
    let num = parseInt(prompt("Introduce un número: "));
    suma += num;
}
console.log(`El promedio es ${suma/10}`);