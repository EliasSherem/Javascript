const prompt = require("prompt-sync")();
const dia = prompt("Escribe un día de la semana:");

switch (dia.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log(`El día es ${dia}`);
        break;
    case "sábado":
    case "sabado":
    case "domingo":
        console.log("Es fin de semana");
        break;
    default:
        console.log("Día no válido");
}

if (
    dia.toLowerCase() === "lunes" ||
    dia.toLowerCase() === "martes" ||
    dia.toLowerCase() === "miércoles" ||
    dia.toLowerCase() === "miercoles" ||
    dia.toLowerCase() === "jueves" ||
    dia.toLowerCase() === "viernes"
) {
    console.log(`El día es ${dia}`);
} else if (
    dia.toLowerCase() === "sábado" ||
    dia.toLowerCase() === "sabado" ||
    dia.toLowerCase() === "domingo"
) {
    console.log("Es fin de semana");
} else {
    console.log("Día no válido");
}