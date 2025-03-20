const prompt = require('prompt-sync')();
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
let inpput = parseInt(prompt("Ingrese un mes: "));
console.log(inpput);
console.log(meses[inpput-1]);
