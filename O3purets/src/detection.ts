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
