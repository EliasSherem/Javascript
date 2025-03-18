const prompt = require('prompt-sync')();
function tienenDigitoEnComun(num1, num2) {
    // Convertimos los números a cadenas para comparar dígitos
    const digitosNum1 = num1.toString().split('');
    const digitosNum2 = num2.toString().split('');

    // Verificamos si hay algún dígito en común
    for (let digito of digitosNum1) {
        if (digitosNum2.includes(digito)) {
            return true;
        }
    }
    return false;
}

function main() {
    const num1 = parseInt(prompt("Introduce el primer número entero entre 25 y 75:"));
    const num2 = parseInt(prompt("Introduce el segundo número entero entre 25 y 75:"));

    if (isNaN(num1) || isNaN(num2) || num1 < 25 || num1 > 75 || num2 < 25 || num2 > 75) {
        console.log("Ambos números deben ser enteros entre 25 y 75.");
        return;
    }

    if (tienenDigitoEnComun(num1, num2)) {
        console.log("Los números tienen al menos un dígito en común.");
    } else {
        console.log("Los números no tienen ningún dígito en común.");
    }
}

main();