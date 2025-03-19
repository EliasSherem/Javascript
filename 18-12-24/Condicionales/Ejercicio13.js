const prompto = require('prompt-sync')();
let frase = String(prompto("Introduce una frase: "));

if(frase.length % 2 != 0){
    console.log(frase[Math.floor(frase.length / 2)]);
}else{
    console.log(frase[Math.floor(frase.length / 2) - 1] + frase[Math.floor(frase.length / 2)]);
}