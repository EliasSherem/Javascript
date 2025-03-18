const prompt = require('prompt-sync')();
// Solicitar dos números al usuario
const numero1 = parseFloat(prompt("Introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));

// Comparar los números y mostrar la relación
if (numero1 < numero2) {
    console.log(`${numero1} es menor que ${numero2}`);
} else if (numero1 > numero2) {
    console.log(`${numero1} es mayor que ${numero2}`);
} else {
    console.log(`${numero1} es igual a ${numero2}`);
}