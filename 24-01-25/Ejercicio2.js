let index = Math.floor(Math.random() * 500) + 1;
console.log(index);
fetch(" https://api.disneyapi.dev/character/"+index)
  .then((res) => res.json())
  .then((data) => { imprimir(data);});


function imprimir(datos) {

    let salida = "";
    console.log(datos);
    if(datos.info.count == 0){
        document.getElementById("respuesta").innerHTML = `<p>No hay personajes</p>`;
    }else{
        
        
            salida += `<div class="card">
            <img src="${datos.data.imageUrl}" alt="${datos.data.name}" style="width:100%">
            <div class="container">
              <h4><b> nombre: ${datos.data.name} </b></h4>
              <p><b>id: ${datos.data._id}</b></p>
              `;
              datos.data.films.forEach((pelicula) => {
                salida += `<p><b>${pelicula}</b></p>`;
              });
                salida += `</div>`
                console.log(salida)
                document.getElementById("respuesta").innerHTML = salida;


        
            
    }
}
