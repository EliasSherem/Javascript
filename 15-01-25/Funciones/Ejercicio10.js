const prompt = require('prompt-sync')();

console.log('Elige una opcion \n1. circulo \n2. triangulo \n3. cuadrado');
let option = parseInt(prompt(""));

switch(option){
    case 1:
        let radio = parseInt(prompt("Introduce el radio: "));
        circulo(radio);
    break;
    case 2:
        let base = parseInt(prompt("Introduce la base: "));
        let altura = parseInt(prompt("Introduce la altura: "));
        triangulo(base, altura);
    break;
    case 3:
        let lado = parseInt(prompt("Introduce la lado: "));
        cuadrado(lado);
    break;
    default:
        console.log("opcion invalida");
    break;
}

function circulo(r){
    console.log(parseInt((r**2)*Math.PI))
}

function triangulo(b, h){
    console.log(parseInt((b*h)/2));
}

function cuadrado(l){
    console.log(parseInt(l**2));
}