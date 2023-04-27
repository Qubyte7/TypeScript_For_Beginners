"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CLASSES 1st
class User {
    constructor(email, name) {
        this.city = "huye"; //Tomean that city is not accessible outside of the class
        this.email = email;
        this.name = name;
        this.behavior = function behavior() {
            console.log("My email is " + this.email + "Ka my name kange nako ni" + this.name);
        };
    }
}
//CLASSES 2nd
class House {
    constructor(paints, bricks, Chair) {
        this.paints = paints;
        this.bricks = bricks;
        this.Chair = Chair;
    }
    //GETTER
    get getPaints() {
        return `this are some of the paints we have ${this.paints}`;
    }
    get ChairSeat() {
        return this.Chair;
    }
    //SETTER
    set ChairSeat(ChairNum) {
        if (ChairNum <= 1) {
            throw new Error("Chair umber should be mora than One");
        }
        this.Chair = ChairNum;
    }
    //privet method
    deleteToken() {
        console.log("Web token deleted");
    }
}
const innocent = new User("innocent@gmail.com", "shami Innocent");
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changePassword() {
        this.password = "innocent";
    }
}
