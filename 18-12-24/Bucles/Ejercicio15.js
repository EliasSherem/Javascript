const prompt = require('prompt-sync')();
let password = prompt("Introduce una contraseña: ");
if(password.length >=8){
    if (/\d/.test(password)) { // Verifica si la contraseña contiene al menos un número
        if (password[0] === password[0].toUpperCase()) {
            console.log("La contraseña es válida");
        } else {
            console.log("La primera letra de la contraseña debe ser mayúscula");
        }
    } else {
        console.log("La contraseña debe tener al menos un número");
    }
}else{
    console.log("La contraseña debe tener al menos 8 caracteres");
}