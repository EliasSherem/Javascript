let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeManejar = esMayorDeEdad && tieneLicencia; // false porque una de las condiciones es falsa
console.log(puedeManejar);
tieneLicencia = true;
puedeManejar = esMayorDeEdad && tieneLicencia; // true porque ambas condiciones son verdaderas
console.log(puedeManejar);

let tieneCarnetProvisional = true;
let acceso = tieneLicencia || tieneCarnetProvisional; // true porque una de las condiciones es verdadera
console.log(acceso);