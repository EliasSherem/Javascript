let objeto = {
    nombre: "Elias",
    apellido: {
        primero: "sherem",
        segundo: "Dayan"
    },
    edad: 27,
    direccion: "Calle 123",
    mascotas: ["perro", "gato"],
    nombreCompleto(){
        return `${this.nombre} ${this.apellido.primero} ${this.apellido.segundo}`;
    }
}

console.log(objeto.nombre); // Elias
console.log(objeto.apellido.primero); // sherem
console.log(objeto.mascotas[1]); // gato
console.log(objeto["direccion"]); // Calle 123
let propiedad = "direccion";
console.log(objeto[propiedad]); // Calle 123
console.log(objeto.nombreCompleto()); // Elias sherem Dayan
