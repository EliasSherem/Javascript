const contenido = document.getElementById("content")
const parrafo = document.createElement("p")
const title = document.getElementById("titulo");
title.textContent = "Titulo";
console.log(title);
//parrafo.textContent = "parrafo"
//contenido.appendChild(parrafo)



window.onload = function(){
    const contenido = document.getElementById("content")
    contenido.innerHTML = `
    <p>parrafo</p>
`
}