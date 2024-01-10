import { comparePw } from "../encryption.js";
import { readUserByMail } from "../mongo/user.js";

const msg1 = "Successful Login ✅";
const msg2 = "User not found! 🙅‍♂️";
const msg3 = "Wrong password! ❌";

const testLogin = {
    email:"rimidalf@tutamail.com",
    password:"plainjane1234"
}

const loginRespond = (msg,access,_id,resCode)=>{
    return{
        msg:msg,
        access:access,
        _id:_id,
        resCode:resCode
    }
};

async function userAuth (user, clientData){
    try{
        const password = clientData.password;
        const hash = user.password
        return comparePw(password,hash)
    }catch(err){
        console.error("ERROR: ",err.message)
    };
};

const login = async (req,res)=>{

    const clientData = req.body
    const user = await readUserByMail(clientData)
    // const userId = readUserByMail()
    console.log(user)
    if (user !== null){
        console.log(`User ${user.username} found!`)
        const access = await userAuth(user,clientData)
        if (access){
            console.log("Access granted!")
            res.json(loginRespond(msg1,true,user._id,0));
        }else{
            console.log("Wrong password! Access denied!")
            res.json(loginRespond(msg3,false,null,2));
        }
    }else{
        console.log(`No user with this email found!`)
        res.json(loginRespond(msg2,false,null,1));
    }
}
export default login