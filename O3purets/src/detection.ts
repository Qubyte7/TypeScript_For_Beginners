function detectType(val: number[] | string)
{
    if(typeof val === 'object'){//object is the data type of array
        for(const v of val){
            console.log(v);//here we are looping through the got results
        }
    }else{
        return val;
    }
}



interface User{
    name:string,
    email:string,
}

interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
function isAdminAccount(account:User | Admin){
         
        if("isAdmin" in account){//verifies if the property isAdmin is had by the account
            return account.isAdmin
        }


}
function logValue(x:Date | string){
    if(x instanceof Date){//checks if this x was an instance of date as an inbuilt class 
        console.log(x.toUTCString());

    }else{
        console.log(x.toUpperCase());
    }
}
type Fish = {swim: ()=>void};
type Bird  = {fly :()=>void};

function isFish(pet:Fish |Bird ):pet is Fish{//this will return fish as a pet
    return (pet as Fish).swim !== undefined;
}

function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet
        return"fish food";
    }else{
        pet 
        return "bird food";
    }
}



