const prompt = require('prompt-sync')();

let nota1 = parseInt(prompt("Introduce la primera nota: "));
let nota2 = parseInt(prompt("Introduce la segunda nota: "));
let nota3 = parseInt(prompt("Introduce la tercera nota: "));
let calificacion = Math.max(nota1, nota2) + nota3;

console.log(`La calificación es ${calificacion}`);

if(calificacion == 10){
    console.log("matricula");
}else if(calificacion >= 9 && calificacion < 10){
    console.log("sobresaliente");
}else if(calificacion >= 7 && calificacion < 9){
    console.log("notable");
}else if(calificacion >= 6 && calificacion < 7){
    console.log("bien");
}else if(calificacion >= 5 && calificacion < 6){
    console.log("suficiente");
}else if(calificacion < 5){
    console.log("suspenso");
}else{
    console.log("Error");
}