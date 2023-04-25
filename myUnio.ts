
let  score:number | string = 33//here score can be either of dataype number or string


type User = {
    name:string;
    id:number
}

type Admin = {
    username:string,
    id:number
}

let Innocent: User | Admin ={name:"Innocent",id:1}
Innocent = {username:"Shami",id:2}











