import { name } from "typescipt";

    //CLASSES
class User {
    email:string
    name:string 
   private readonly  city ="huye"//Tomean that city is not accessible outside of the class
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
    }
}
const innocent = new User("innocent@gmail.com","shami Innocent")

















