import { createRequire } from 'module';
import { letraNombre, letraApellido, fechaNacimiento } from './objetos/superheroes.js'; 

const require = createRequire(import.meta.url);
const prompt = require('prompt-sync')();

let nombre = prompt("Ingrese su nombre: ").toLowerCase();
let apellido = prompt("Ingrese su apellido: ").toLowerCase();
let fecha = prompt("Ingrese su Año de nacimiento: ");
let genero = prompt("Ingrese su genero (masculino o femenino): ").toLowerCase();

let lN = nombre[0];
let lA = apellido[0];
let lF = fecha[fecha.length - 1]; 

let nombreHeroe = letraNombre[lN]?.[genero];
let apellidoHeroe = letraApellido[lA]?.[genero];
let fechaHeroe = fechaNacimiento[`num${lF}`]?.[genero];


let superHeroe = `${nombreHeroe} ${apellidoHeroe} ${fechaHeroe}`;
console.log(superHeroe);