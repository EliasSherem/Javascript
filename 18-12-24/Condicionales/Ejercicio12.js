const prompt = require('prompt-sync')();

console.log("En que puesto quedaste? ");
let puesto = parseInt(prompt());

//1
if(puesto == 1){
    console.log("Ganaste");
}else{
    console.log("lo importante es participar");
}

//2
if(puesto == 1){
    console.log("Medalla de oro");
}else if(puesto == 2){
    console.log("Medalla de plata");
}else if(puesto == 3){
    console.log("Medalla de bronce");
}else{
    console.log("Lo importante es participar");
}


//3
switch(puesto){
    case 1:
        console.log("Medalla de oro");
        break;
    case 2:
        console.log("Medalla de plata");
        break;
    case 3: 
        console.log("Medalla de bronce");
        break;
    default:
        console.log("Lo importante es participar");
        break;
}

//4
if(puesto >= 1 && puesto <= 3){
    console.log("Sube al podio");
}else{
    console.log("Se acabo la carrera");
}
