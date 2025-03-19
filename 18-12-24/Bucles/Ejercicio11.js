const prompt = require('prompt-sync')();
let num;

do{
    let res;
    num = parseInt(prompt("Introduce un número: "));
    res=reversa(num);
    console.log(`El número invertido es ${res}`);
}while(num!=0);

function reversa(num){
    let numR=String(num).split("").reverse().join("");
    return numR;
}