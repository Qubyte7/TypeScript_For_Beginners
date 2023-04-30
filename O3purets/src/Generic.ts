const score: Array<number> = []


function identity(val:any):any{
    return val
}

function identity2<Type>(val:Type):Type{
    return val
}
//Most ways this is written
function identity3<t>(val:t):t{
    return val
}
identity2(2)//this will return 2

//you can pass an interface in the generic 
interface Bootle{
  brand:string,
  type:number
}
identity3<Bootle>({brand:"sdi",type:3})


function getSearchProducts<T>(products: T[]):T{//here  we have to return 1  value in tha passed argument
    
    return products[1]
}

function DealingWithArray<T>(ARG:Array<T>):Array<T>{
    console.log(ARG.length);//Arry have arguments so no ARGUMENTS
    return ARG;
}

const getMoreSearchProducts = <T,>(products: T[]):T =>{
        const index = 4
        return products[index]
}
//<T,> the comer is for mentioning that it is a generic 

//ADVANCED USE GENERIC
//(1)
function anotherFunction<T, U>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}
anotherFunction(1,"free")
//(2)
function anotherFunction2<T, U extends number>(valOne:T, valTwo:U):object{
    return{valOne,valTwo}
}
anotherFunction2("innocent",23)

//(3)
interface genericInterface{
    name:string,
    children:number
}
function anotherFunction3<T, U extends genericInterface>(valOne:T, valTwo:U):object{
    return{valOne,valTwo}
}
anotherFunction3(12,{name:"Innocent",children:12})
//GENERIC CLASSES
class sellable<T>{
    public cart:T[]=[]

    addToCart(product:T){
        this.cart.push(product)
    }
}






































