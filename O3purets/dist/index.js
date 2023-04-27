"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CLASSES
class User {
    constructor(email, name) {
        this.city = "huye"; //Tomean that city is not accessible outside of the class
        this.email = email;
        this.name = name;
    }
}
const innocent = new User("innocent@gmail.com", "shami Innocent");
