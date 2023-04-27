"use strict";
// let loginUser = (name:string , email:string, isPaid:boolean) =>{}
// loginUser("innocent","jdijid@gmail.com",true)
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var getHello = function (s) {
    return "string return";
};
var heros = ["thor", "spiderman", "iron man", "batman"];
//Mapping
heros.map(function (hero) {
    return "hero is ".concat(hero);
    console.log(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function UsingInterface(pt) {
    pt.n = "Mugisha shami Innnocent ";
    console.log("My name is " + pt.m);
    console.log("And my age is " + pt.n);
}
function Type(pt) {
    console.log("I have " + pt.x + "Balls of tennis");
    console.log("Did you know that the number that I like is " + pt.y);
}
Type({ x: 2, y: 4 });
var myvalue = addTwo(5);
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "innnocent", isPaid: true });
function createCourse() {
    return { name: "Tomato", price: 20000 };
}
//Array
//one way
var superHeros = ["HUlk"]; //here the arra\y will contain string things
superHeros.push("spider Man");
//another way 
var power = [];
var array2 = [{ name: "adioasd", isActive: true }];
array2.push({ name: "Ganza", isActive: true });
var array3 = [
    { name: "mugisha", age: 16 },
    { name: "Ganza", age: 12 }
];
function mapping() {
    array3.map(function (person) {
        return person;
    });
}
mapping();
