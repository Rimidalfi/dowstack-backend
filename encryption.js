import bcrypt from "bcrypt";

async function hashPw (password,workfactor){
    try{
        const hash = await bcrypt.hash(password,workfactor)
        console.log("Successful hash ✅",hash)
        return hash
    }catch(err){
        "ERROR❗️ hashing PW",err.message
    }
};

async function comparePw(password,hash){
    try{
        const comparison = await bcrypt.compare(password,hash)
        if(comparison){
            console.log("access granted ✅")
            return true
        }else{
            console.log("access denied ❌")
            return false
        }
    }catch(err){
        "ERROR❗️ verifing password",err.message
    }
};
// console.log(await hashPw("plainjane1234",13))
export {hashPw,comparePw}