const prompt = require('prompt-sync')();

let frase = prompt("Introduce una frase: ");

if(frase.includes(" " || "")){
    console.log("Vale con que en esas tenemos...");
}else if(frase.includes("!") && frase.includes("?")){
    console.log("Eh! tranquilizate, yo se lo que hago");
}else if(frase.includes("?")){
    console.log("Claro!");
}else if(frase.includes("!")){
    console.log("Eh! Tranquilo!");
}else{
    console.log("sin mas");
}