
const boton = document.getElementById("boton");
boton.addEventListener("click", pedir);

function pedir() {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => {imprimir(data);});
}

function imprimir(datos) {
    let salida =""
    datos.results.forEach(persona => {
        salida += `<div class="card">
  <img src="${persona.picture.medium}" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${persona.name.first + " " + persona.name.last}</b></h4>
    <p>${persona.phone}</p>
  </div>
</div>`;
    });
    document.getElementById("respuesta").innerHTML = salida;
}
