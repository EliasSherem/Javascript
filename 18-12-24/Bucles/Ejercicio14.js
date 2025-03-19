const prompt = require('prompt-sync')();
let rows = parseInt(prompt("Introduce el número de filas: "));
let printable;

for(let i = 1; i <= rows; i++){
    printable = "";
    for(j=1;j<=i;j++){
        printable+="*"; 
    }
    console.log(printable);
}