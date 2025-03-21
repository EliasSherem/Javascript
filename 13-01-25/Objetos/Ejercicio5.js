import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const letraNombre = require('./objetos/superheroes.js');
const letraApellido = require('./objetos/superheroes.js');
const fechaNacimiento = require('./objetos/superheroes.js');



const prompt = require('prompt-sync')();
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let fecha = prompt("Ingrese su Año de nacimiento: ");
let genero = prompt("Ingrese su genero (masculino o femenino): ");
let lN = nombre[0];
let lA = apellido[0];
let lF = fecha[3];
/*console.log(lN);
console.log(lA);
console.log(lF);*/

console.log(letraNombre);

