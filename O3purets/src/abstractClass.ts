abstract class TakePhoto{
    constructor(public camerMode:string , public filter:string)
    {}
    abstract getSepia():void//if mentioned as an abstract it mean it can
    getRel():number{
        return 3
    }
}
  

class Instagram extends TakePhoto{
    constructor (
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter)//help the extended class to use properties of an Abstracted class
    }  
    getSepia(): void {
        console.log("sepia");
        
    }
}
const Object1 = new Instagram("wewe","wewewe",3)

Object1.getRel()









//ABSTRACT:is used to prevent from any creation of any instance of a class it is used
//           actually when you want to make a blueprint of a class
//         ==>ABSTRACT:can allow you to create an Instanse of a class is when the class is
//                     extended  to a new class

//SSE EXPLAINATION PART



























