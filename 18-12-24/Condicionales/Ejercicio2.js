// Programa que pide la edad al usuario y muestra un mensaje según la edad

const prompt = require('prompt-sync')();
const edad = parseInt(prompt("Por favor, introduce tu edad:"));

if (edad <= 8) {
    console.log("Pasa al tobogán");
} else {
    console.log("Eres demasiado mayor para usar el tobogán");
}