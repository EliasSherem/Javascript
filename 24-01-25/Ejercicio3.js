const boton = document.getElementById("btn");
boton.addEventListener("click", buscar);

function buscar(){
    let index =document.getElementById("comic").value;
    console.log(index);
    let url = `https://xkcd.com/${index}/info.0.json`;
    console.log(url);
    fetch(url,)
    .then((res) => res.json())
    .then((data) => { imprimir(data);})
    .catch((error) => {
        console.error("Error:", error);
        document.getElementById("respuesta").innerHTML = `<p>Error al cargar los datos</p>`;
    });
}

function imprimir(datos){
    let salida = "";
    console.log(datos);
    salida += `<div class="card">
    <img src="${datos.img}" alt="${datos.title}" style="width:100%">
    <div class="container">
      <h4><b> fecha: ${datos.year} </b></h4>
        <p><b>titulo: ${datos.title}</b></p>
        </div>
        </div>`
        console.log(salida)
        document.getElementById("respuesta").innerHTML = salida;

    
}