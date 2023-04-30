import { name } from "typescipt";

    //CLASSES 1st
class User {
    behavior?:{}
    protected password?:string//gets pri vate in this class and to any class that extended this class
    email:string
    name:string 
   private readonly  city ="huye"//Tomean that city is not accessible outside of the class
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
        this.behavior = function behavior(){
            console.log("My email is "+this.email+"Ka my name kange nako ni"+this.name)
        }
    }}
       //CLASSES 2nd
       class House {
        constructor(public paints:string,public bricks:string,private  Chair:number){
        }
             //GETTER
        get getPaints():string{
            return `this are some of the paints we have ${this.paints}`
        }
        get ChairSeat():number{
            return this.Chair
        }
                   //SETTER
        set ChairSeat(ChairNum){//no datatype return specified
         if(ChairNum <=1){
            throw new Error("Chair umber should be mora than One")
         }
         this.Chair = ChairNum
        }
               //privet method
        private deleteToken():void{
            console.log("Web token deleted")
        }
    }

const innocent = new User("innocent@gmail.com","shami Innocent")

class SubUser extends User{
    isFamily:boolean =  true
    changePassword (){//function of changing the password in the parent user 
     this.password = "innocent"
   }
}















