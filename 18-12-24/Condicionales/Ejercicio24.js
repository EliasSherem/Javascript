const prompt = require('prompt-sync')();

let num = parseInt(prompt("Introduce un número entero de 3 cifras: "));
let i=0;

for(value  of num.toString()){
    value = parseInt(value);
    if(value % 2 != 0){
        i+=1;
    }
}

if(i == 3){
    console.log("Todas las cifras son impares.");
}else if(i == 2 || i == 1){
    console.log("las cifras estan mezcladas");
}else if(i == 0){
    console.log("Todas las cifras son pares.");
}else{
    console.log("Error");
}