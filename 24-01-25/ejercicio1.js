

function imprimir(datos) {

  let salida = "";
  datos.results.forEach((libro) => {
    console.log(libro);
    salida += `<div class="card">
  <img src="${libro.formats["image/jpeg"]}" alt="${libro.title}" style="width:100%">
  <div class="container">
    <h4><b>${libro.title}</b></h4>
    <p>${libro.authors[0].name}</p>
  </div>
</div>`;
  });
  document.getElementById("respuesta").innerHTML = salida;
}


fetch("https://gutendex.com/books/")
.then((res)=> res.json())
  .then((data) => {imprimir(data);})
