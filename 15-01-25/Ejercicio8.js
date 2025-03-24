const prompt = require('prompt-sync')();
let alert = require('node-notifier');

let num = parseInt(prompt("Introduce un número: "));
let result = 1;

function factorial(num){
    for(i=num; i>0;i--){
        result*=i;
    }
}

factorial(num);
alert.notify(`El resultado es ${result}`);