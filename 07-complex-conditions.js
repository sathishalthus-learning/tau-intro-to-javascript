const car = {
    price:1999,
    color:"red",
    numDoors:4
};

if(car.price<2000 && (car.color=="red" || car.numDoors==4)){
console.log("we will take it");
}
else{
    console.log("we will look");
}