const prompt = require('prompt-sync')();

// Solicitar tres números al usuario
const num1 = parseInt(prompt("Introduce el primer número: "));
const num2 = parseInt(prompt("Introduce el segundo número: "));
const num3 = parseInt(prompt("Introduce el tercer número: "));

// Función para verificar si la diferencia entre dos números es exactamente 20
function checkDifference(a, b) {
    return Math.abs(a - b) === 20;
}

// Comprobar las combinaciones posibles
if (checkDifference(num1, num2)) {
    console.log(`La diferencia entre ${num1} y ${num2} es exactamente 20.`);
} else if (checkDifference(num1, num3)) {
    console.log(`La diferencia entre ${num1} y ${num3} es exactamente 20.`);
} else if (checkDifference(num2, num3)) {
    console.log(`La diferencia entre ${num2} y ${num3} es exactamente 20.`);
} else {
    console.log("Ninguna de las diferencias entre los números es exactamente 20.");
}