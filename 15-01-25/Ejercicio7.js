const prompt = require('prompt-sync')();
let alert = require('node-notifier');

let num = parseInt(prompt("Introduce un número: "));

function esPar(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

let result = esPar(num);
if(result){
    alert.notify("El numero es par");
}else{
    alert.notify("El numero es impar");
}