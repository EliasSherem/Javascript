const prompt = require('prompt-sync')();

let euros = parseInt(prompt("Ingresa la cantidad de euros a cambiar: "))
console.log('Menu \n1. libras \n2. dolares \n3. yenes');
let option = prompt("Escribe la moneda por la cual quieres cambiar: ");

switch(option){
    case 'libras':
        libras(euros);
    break;
    case 'dolares':
        dolares(euros);
    break;
    case 'yenes':
        yenes(euros);
    break;
}

function libras(e){
    console.log(`${e} euros equivalen a ${e*0.86} libras`);
}

function dolares(e){
    console.log(`${e} euros equivalen a ${e*1.28611} dolares`);
}

function yenes(e){
    console.log(`${e} euros equivalen a ${e*129.852} yenes`);
}