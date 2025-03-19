
for(i=1;i<=12;i++){
    if(i % 2 == 0){
        console.log(`${i} al cubo es ${i**3}`);
    }else if(i % 2 != 0){
        console.log(`${i} al cuadrado es ${i**2}`);
    }else{
        console.log("Error");
    }
}