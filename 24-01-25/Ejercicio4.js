const select = document.getElementById("select");

let url = `https://rickandmortyapi.com/api/location/`;
let objeto = {};
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    llenado(data);
    objeto = data;
  });

function llenado(datos) {
  let salida = "";
  datos.results.forEach((planet) => {
    salida += `<option value="${planet.id}">${planet.name}</option>`;
  });
  select.innerHTML = salida;
}

select.addEventListener("change", buscar);
function buscar() {
  let index = select.value;
  console.log(index);
  let salida = "";
  objeto.results[index - 1].residents.forEach((personaje) => {
    fetch(personaje)
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data);
        salida += `<div class="card">
        <img src="${data.image}" alt="${data.name}" style="width:100%">
        <div class="container">
          <h4><b> nombre: ${data.name} </b></h4>
        </div>
        </div>`;
        document.getElementById("respuesta").innerHTML = salida;
      });
  });
}

