let brocha = 0;
let llave = 0;
let martillo = 0;
let tronco = 0;
const carrito = document.getElementById("cart");
function suma(item){
    if (item == "brocha"){
        brocha++;
        console.log("Brocha: " + brocha);
    }else if (item == "llave"){
        llave++; 
         console.log("Llave: " + llave);
    }else if (item == "martillo"){
        martillo++;
        console.log("Martillo: " + martillo);
    }else if (item == "tronco"){
        tronco++;
        console.log("Tronco: " + tronco);
    }else{
        console.log("Error: item no reconocido");
    }
    eval();
    
}

function resta(item){
    if (item == "brocha"){
        brocha--;
        console.log("Brocha: " + brocha);
    }else if (item == "llave"){
        llave--; 
         console.log("Llave: " + llave);
    }else if (item == "martillo"){
        martillo--;
        console.log("Martillo: " + martillo);
    }else if (item == "tronco"){
        tronco--;
        console.log("Tronco: " + tronco);
    }else{
        console.log("Error: item no reconocido");
    }
    eval();
}

function eval(){
    carrito.innerHTML=`
    <div class="item" id="brocha">
        <p>Brocha: ${brocha}</p>
    </div>
    <div class="item" id="llave">
        <p>Llave: ${llave}</p>
    </div>
    <div class="item" id="martillo">
        <p>Martillo: ${martillo}</p>
    </div>
    <div class="item" id="tronco">
        <p>Tronco: ${tronco}</p>
    </div>
    <button id="vaciar" class="btn" onclick="vaciar()">Vaciar</button>
`;
}
function vaciar(){
    brocha = 0;
    llave = 0;
    martillo = 0;
    tronco = 0;
    eval();
}
