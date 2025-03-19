const prompt = require('prompt-sync')();
let numHelados = parseInt(prompt("Introduce el número de helados que quieres: "));

if(numHelados >= 10){
    console.log(`recibes ${numHelados+1} y pagaste $${numHelados * 2}`);
}else{
    console.log(`recibes ${numHelados} y pagaste $${numHelados * 2}`);
}