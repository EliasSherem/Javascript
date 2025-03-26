let promesa = new Promise((resolve,reject)=>{
    if(2+2==4){
        resolve("todo bien");
    }else{
        reject("todo mal");
    }
})

console.log(promesa);