const prompt = require('prompt-sync')();

console.log("Menu \n1. Suma \n2. Resta \n3. Multiplicación \n4. División \n5. Salir");
let opcion = parseInt(prompt("Introduce una opción: "));

if(opcion == 1){
    console.log(`5 + 3 = ${5+3}`);
}else if(opcion == 2){
    console.log(`5 - 3 = ${5-3}`);
}else if(opcion == 3){
    console.log(`5 * 3 = ${5*3}`);
}else if(opcion == 4){
    console.log(`5 / 3 = ${5/3}`);
}else if(opcion == 5){
    console.log("Adiós");
}else{
    console.log("Opción no válida");
}

switch(opcion){
    case 1:
        console.log(`5 + 3 = ${5+3}`);
        break;
    case 2:
        console.log(`5 - 3 = ${5-3}`);
        break;
    case 3:
        console.log(`5 * 3 = ${5*3}`);
        break;
    case 4:
        console.log(`5 / 3 = ${5/3}`);
        break;
    case 5:
        console.log("Adiós");
        break;
    default:
        console.log("Opción no válida");
        break;
}