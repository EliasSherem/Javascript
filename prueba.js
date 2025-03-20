let array = [1, 2, 3, 4, 5];
array.pop();
console.log(array); // [1, 2, 3, 4]
array.push(6);
console.log(array); // [1, 2, 3, 4, "6"]
array.shift();
console.log(array); // [2, 3, 4, 6]
array.unshift(1);
console.log(array); // [1, 2, 3, 4, 6]
array.splice(2, 0, 2.5); //el primer parametro elige la posicion, el segundo elige cuantos elementos se van a eliminar, el tercero es el elemento que se va a agregar
console.log(array); // [1, 2, 2.5, 3, 4, 6]
array.splice(1, 2);
console.log(array); // [1, 3, 4, 6]
console.log(array.slice(1, 3)); // [3, 4]
console.log(array.join(" - ")); // 1 - 3 - 4 - 6
console.log(array.concat([7, 8, 9])); // [1, 3, 4, 6, 7, 8, 9]
console.log(array[1])// 3
console.log(array.length)// 4

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

let arrayMulti = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
];
console.log(arrayMulti[1][2]); // 6

let arrayTriple = [
    [[1,2,3], 
    [4,5,6], 
    [7,8,9]],

    [[10,11,12], 
    [13,14,15], 
    [16,17,18]]
];
console.log(arrayTriple[1][0][2]); // 12

array.forEach(
    function leer(elemento){
    console.log(elemento);
});
array.forEach((elemento,i) => console.log(array[i]));

