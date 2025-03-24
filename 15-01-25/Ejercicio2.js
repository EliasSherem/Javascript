const prompt = require('prompt-sync')();
let num = parseInt(prompt("Introduce un número: "));
function hola(num){
    for (i=0; i<num;i++){
        console.log("hola");
    }
}
hola(num);

