const prompt = require('prompt-sync')();
const temperatura = parseFloat(prompt("¿Cuál es la temperatura en donde estás?"));

switch (true) {
    case (temperatura > 40):
        console.log("Vete a otro sitio");
        break;
    case (temperatura > 30 && temperatura <= 40):
        console.log("Enciende el aire acondicionado");
        break;
    case (temperatura > 20 && temperatura <= 30):
        console.log("No hagas nada");
        break;
    case (temperatura > 10 && temperatura <= 20):
        console.log("Enciende la calefacción");
        break;
    case (temperatura <= 10):
        console.log("Vete a otro sitio");
        break;
    default:
        console.log("Temperatura no válida");
}