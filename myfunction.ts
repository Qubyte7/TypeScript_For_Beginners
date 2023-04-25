// let loginUser = (name:string , email:string, isPaid:boolean) =>{}
// loginUser("innocent","jdijid@gmail.com",true)

function addTwo (num:number):number{
    return num+2
}
const getHello = (s:string):string=>{
    return "string return"
}
const heros = ["thor","spiderman","iron man","batman"];

heros.map( (hero):string =>{
    return `hero is ${hero}` 
})
function consoleError(errmsg:string):void{
    console.log(errmsg)
}
//we use aliases and interface for naming the object Example is bellow

interface Point{
  readonly m:number;//readonly means that you will not able to change, manipilate, or assign it a value tha datatype of this property
    n:string
}
type Point1={
   x:number;
   y:number;
   b?:number;//Means that it is optional
}

function UsingInterface(pt:Point){
    pt.n = "Mugisha shami Innnocent ";
    console.log("My name is "+pt.m);
    console.log("And my age is "+pt.n);
}
function Type(pt:Point1){
 
    console.log("I have "+pt.x+"Balls of tennis");
    console.log("Did you know that the number that I like is "+pt.y)
}

Type({x:2,y:4})


let myvalue =  addTwo(5)

function createUser({name:string ,isPaid:boolean }){}
createUser({name:"innnocent",isPaid:true})
 
function createCourse():{name:string,price:number}{
    return{name:"Tomato",price:20000}
}
//function Name(){}{}//here the function we prompted that itwill return an object


type cardName={
    cardname:string
}
type cardDate={
    carddate:string
}

type cardDetail = cardDate & cardName &{//here we are extending cardDetails to have cardNumber and CardDate and also adding a component of cvv
    cvv:number
}
//Array

//one way
const superHeros:string[]=["HUlk"]//here the arra\y will contain string things
superHeros.push("spider Man");
//another way 
const power :Array<number> = []
//usin type aliases with arrays
type array={
    name:string,
    isActive:boolean
}
const array2: array[]=[{name:"adioasd",isActive:true}]
array2.push({name:"Ganza",isActive:true})





export {}
