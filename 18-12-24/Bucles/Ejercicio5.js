const prompt = require('prompt-sync')();
let num1;
do{
    let num = parseInt(prompt("Introduce un número: "));
    let suma=0;
    for(let i = 1; i <= num; i++){
        suma += i;
    }
    console.log(`La suma de los números del 1 al ${num} es ${suma}`);
    num1=num;
}while(num1 != 0);