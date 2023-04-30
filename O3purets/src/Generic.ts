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
































