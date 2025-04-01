let brocha = 0;
let llave = 0;
let martillo = 0;
let tronco = 0;
const carrito = document.getElementById("cart");
const brochaCart = document.createElement("p");
const llaveCart = document.createElement("p");
const martilloCart = document.createElement("p");
const troncoCart = document.createElement("p");
const vaciarCart = document.createElement("button");
const brochaIcon = document.createElement("img");
const llaveIcon = document.createElement("img");
const martilloIcon = document.createElement("img");
const troncoIcon = document.createElement("img");

brochaIcon.innerHTML=`<img alt="Brocha" width="5%" height="5%">`;
brochaIcon.src=`sources/brocha.svg`;
brochaIcon.style.width = "10%";
brochaIcon.style.height = "10%";
llaveIcon.innerHTML=`<img alt="Llave" width="100%" height="100%">`;
llaveIcon.src=`sources/llave.svg`;
martilloIcon.innerHTML=`<img alt="Martillo" width="100%" height="100%">`;
martilloIcon.src=`sources/martillo.svg`;
martilloIcon.style.width = "10%";
martilloIcon.style.height = "10%";
troncoIcon.innerHTML=`<img alt="Tronco" width="100%" height="100%">`;
troncoIcon.src=`sources/tronco.svg`;
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
        if(brocha <= 0){
            brocha = 0;
            carrito.removeChild(brochaCart);
            carrito.removeChild(brochaIcon);
        }
        brocha--;
        
        console.log("Brocha: " + brocha);
    }else if (item == "llave"){
        if(llave <= 0){
            llave = 0;
            carrito.removeChild(llaveCart);
            carrito.removeChild(llaveIcon);
        }
        llave--; 
        
         console.log("Llave: " + llave);
    }else if (item == "martillo"){
        if(martillo <= 0){
            martillo = 0;
            carrito.removeChild(martilloCart);
            carrito.removeChild(martilloIcon);
        }
        martillo--;
        
        console.log("Martillo: " + martillo);
    }else if (item == "tronco"){
        if(tronco <= 0){
            tronco = 0;
            carrito.removeChild(troncoCart);
            carrito.removeChild(troncoIcon);
        }
        tronco--;
        
        console.log("Tronco: " + tronco);
    }else{
        console.log("Error: item no reconocido");
    }
    eval();
}

function eval(){
    if (brocha > 0){
        brochaCart.innerHTML=`<p>Brocha: ${brocha}</p>`
        carrito.appendChild(brochaCart);
        for(let i = 0; i < brocha; i++){
            brochaCart.appendChild(brochaIcon.cloneNode(true));
        }
        //carrito.appendChild(brochaIcon);
    }
    if (llave > 0){
        llaveCart.innerHTML=`<p>Llave: ${llave}</p>`
        carrito.appendChild(llaveCart);
        for(let i = 0; i < llave; i++){
            llaveCart.appendChild(llaveIcon.cloneNode(true));
        }
    }
    if (martillo > 0){
        martilloCart.innerHTML=`<p>Martillo: ${martillo}</p>`
        carrito.appendChild(martilloCart);
        for(let i = 0; i < martillo; i++){
            martilloCart.appendChild(martilloIcon.cloneNode(true));
        }
    }
    if (tronco > 0){
        troncoCart.innerHTML=`<p>Tronco: ${tronco}</p>`
        carrito.appendChild(troncoCart);
        for(let i = 0; i < tronco; i++){
            troncoCart.appendChild(troncoIcon.cloneNode(true));
        }
    }
}

