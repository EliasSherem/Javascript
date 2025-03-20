let array = [];
let index = 20;

for(let i = 0; i< 10; i++){
    array.push(index);
    index--;
}

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}