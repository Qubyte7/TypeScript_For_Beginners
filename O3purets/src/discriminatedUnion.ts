
interface Circle{
    Kind :"circle",
    radius:number
}
interface Square {
    Kind:"Square",
    side:number
}
interface Rectangle{
    Kind:"rectangle",
    length:number,
    width:number
}
type Shape = Circle | Square | Rectangle
type Shape2 = Circle | Square
function getTrueShape(shape :Shape2){
if(shape.Kind === "circle"){
      return Math.PI * shape.radius ** 2;
}else{
    return shape.side * shape.side;
}
}
function getArea(shape:Shape){
    switch(shape.Kind){
        case "circle":
        return Math.PI * shape.radius **2; //the ** 2 means squared
        
       case "Square":
        return shape.side * shape.side

        case "rectangle":
            return shape.length * shape.width;
        default :
        const _defaultforshape :never = shape
           return _defaultforshape
    }
}










