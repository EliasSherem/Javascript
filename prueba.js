let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let persona = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"

};
for(clave in persona){ //in para objetos
    console.log(persona[clave]);
}


for(value of array){ //of para arrays
    console.log(value);
}
