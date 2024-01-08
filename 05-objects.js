const cookie = {
    "name":"chocochip",
    nos:5,
    isGlutenFree:false,
    eatCookie: function(){console.log("eating");}
};
console.log(cookie);
console.log(cookie.name);
cookie.eatCookie();

class Cookie{
    constructor(name, isGlutenFree){
        this.name=name;
        this.isGlutenFree=isGlutenFree;
    }

    eatCookie(){
        console.log("i am eating");
    }
}
const myCookie = new Cookie("Iced",false);

console.log(myCookie);
console.log(myCookie.name);
myCookie.eatCookie();
