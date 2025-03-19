const prompt = require('prompt-sync')();
let nombre = prompt("Introduce tu nombre: ");
let ventas = parseFloat(prompt("Introduce el total de ventas: "));

if(ventas > 500){
    console.log(`${nombre} tiene ventas por $${ventas*1.05}`);
}else{
    console.log(`${nombre} tiene ventas por $${ventas}`);
}