const prompt = require('prompt-sync')();


    let year = 0;
    do{
        year = parseInt(prompt("Introduce un año: "));
        esBisiesto(year);
        if(year!=0){
            if(year){
                console.log("Es bisiesto");
            }else{
                console.log("No es bisiesto");
            }
        }
        
    }while(year != 0);


function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

