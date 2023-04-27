interface user{
    readonly id:number,
    email:string,
    userId:number,
    height?:number
    // startail:()=> string
    starTail():string,//this is the same as the above
    getCoupon(coupon:string):number
}
interface user{
    friends:string[]
}

interface admin extends user{
    role:"admin"|"SIO"
}
const innocent : admin = {
    starTail:() => "innocent",
    getCoupon:(coupon:"innocent")=>2,
    id:1,
    email:"innocent@gmail.com",
    userId:1,
    friends:["Ganza ","Kayumba"],
    role:"admin"
}



























