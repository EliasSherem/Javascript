const prompt = require('prompt-sync')();
let alert = require('node-notifier');


const number = prompt("Enter a number: ");

function cifras(number){
    if(number<0){
        console.log("no se pueden usar negativos")
    }else{
        return number.length;
    }
}

let result = cifras(number);
alert.notify(`El numero de cifras es ${result}`);
