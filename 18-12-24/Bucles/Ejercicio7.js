const prompt = require('prompt-sync')();
let num;
let suma=0;
do{
    num = parseInt(prompt("Introduce un número: "));
    if(num<0){
        console.log("Se ignoran los negativos");
    }else{
        suma+=num;
    }
}while(num!=0);
console.log(`La suma de los números introducidos es ${suma}`);