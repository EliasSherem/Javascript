const date = new Date();
console.log(date);

let day = date.getDate();
let month = date.getMonth()+1;
let year = date.getFullYear();

console.log(`${day}/${month}/${year}`);