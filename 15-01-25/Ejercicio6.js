const prompt = require('prompt-sync')();
let alert = require('node-notifier');
let num1;
let num2;

function dividir (num1, num2){
    if(num2 == 0){
        console.log("el programa termino");
    }else{
        return num1/num2;
    }
}

do{
    num1 = parseInt(prompt("Introduce un número: "));
    num2 = parseInt(prompt("Introduce otro numero: "));
    let result = dividir(num1, num2); 
    if(num2 == 0){

    }else{
        alert.notify(`El resultado de la division es: ${result}`);
    }
    
}while(num2!=0);