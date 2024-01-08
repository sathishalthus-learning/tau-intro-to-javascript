function sum(a,b){
    return a+b;
}

console.log(sum(5,4));

setTimeout(function(){
    console.log("time out 1000");
},1000);

setTimeout(()=> console.log("arrow function"),1000);
