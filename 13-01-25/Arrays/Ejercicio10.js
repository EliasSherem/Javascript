const prompt = require('prompt-sync')();
let array = [0,0,0,0,0,0,0,0,0,0,0];
let index;

do{
    index = parseInt(prompt("Ingrese un número entre 0 y 10: "));
    if(index>=0 && index<10){
        console.log(array[index]);
        array[index] += 1;
    }else{
        console.log("El número ingresado no está en el rango");
    }
}while(index >=0);

for(let i = 0; i < array.length; i++){
    console.log(`${i} - ${array[i]}`);
}
