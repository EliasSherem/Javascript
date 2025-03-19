const prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt("Introduce la temperatura: "));

console.log("Menu \nC. Convertir a Celsius \nF. Convertir a Fahrenheit");
let opcion = String(prompt("Introduce la opción: "));

switch (opcion) {
    case 'C':
        temperatura = (temperatura - 32) * 5 / 9;
        console.log(`La temperatura en Celsius es ${temperatura}`);
        break;
    case 'F':
        temperatura = (temperatura * 9 / 5) + 32;
        console.log(`La temperatura en Fahrenheit es ${temperatura}`);
        break;
    default:
        console.log("Opción inválida");
        break;
}