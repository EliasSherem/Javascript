function operacion1(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if(2+2==4){
                resolve("exito1");
            }else{
                reject("fallo1");
            }
        }, 1000);
    });
}

function operacion2(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if(2+2==4){
                resolve("exito2");
            }else{
                reject("fallo2");
            }
        }, 1000);
    });
}
function operacion3(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if(2+2==4){
                resolve("exito3");
            }else{
                reject("fallo3");
            }
        }, 1000);
    });
}

operacion1()
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.error(error)})
.then(()=>{operacion2()
    .then((respuesta)=>{console.log(respuesta)})
    .catch((error)=>{console.log(error)})})
    .then(()=>{operacion3()
        .then((respuesta)=>{console.log(respuesta)})
        .catch((error)=>{console.log(error)})
    })

