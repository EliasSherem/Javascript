let promesa = new Promise((resolve,reject)=>{
    if(2+3==4){
        resolve("todo bien");
    }else{
        reject("todo mal");
    }
})

promesa
.then((respuesta)=>{console.log(respuesta)})
.catch((error)=>{console.log(error)})
.then(()=>{console.log("pos ya fue todo")})