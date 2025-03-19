const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese tres números
const num1 = parseFloat(prompt('Ingresa el primer número: '));
const num2 = parseFloat(prompt('Ingresa el segundo número: '));
const num3 = parseFloat(prompt('Ingresa el tercer número: '));

// Verificar si la suma de los dos primeros números es igual al tercero
if (num1 + num2 === num3) {
    console.log(`El tercer número es: ${num3}`);
} else {
    console.log(`Los dos primeros números son: ${num1} y ${num2}`);
}