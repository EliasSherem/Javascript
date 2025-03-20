let array = [];
let suma = 0;
for(let i = 0; i< 20; i++){
    array.push(Math.floor(Math.random() * (35-18)+18));
    suma += array[i];
}
console.log(`El promedio es ${suma/20}`);