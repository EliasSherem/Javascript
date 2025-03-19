const prompt = require('prompt-sync')();
let opcion = prompt("P: numeros pares \nI: numeros impares \n");

switch(opcion){
    case "P":
        for(let i=0;i<=100;i+=2){
            console.log(i);
        }
        break;
    case "I":
        for(let i=1;i<=100;i+=2){
            console.log(i);
        }
        break;
    default:
        console.log("Opción no válida");
    }