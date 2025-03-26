const prompt = require('prompt-sync')();
let num1 = parseInt(prompt("Introduce un número: "));
let num2 = parseInt(prompt("Introduce otro numero: "));

function evaluar(num1, num2){
    if(num1> num2){
        return true;
    }else{
        return false;
    }
}

let eval = evaluar(num1,num2);

if(eval){
    console.log("El primer numero es mas grande");
}else{
    console.log("El segundo numero es mas grande");
}
