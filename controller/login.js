import { comparePw } from "../encryption.js";
import { readUser } from "../mongo/user.js";

const msg1 = "Successful Login ✅";
const msg2 = "User not found! 🙅‍♂️";
const msg3 = "Wrong password! ❌";

const testLogin = {
    email:"rimidalf@tutamail.com",
    password:"plainjane1234"
}

const loginRespond = (msg,access,resCode)=>{
    return{
        msg:msg,
        access:access,
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

const Login = async (req,res)=>{

    const clientData = req.body
    const user = await readUser(clientData)
    // console.log(user)
    if (user !== null){
        console.log(`User ${user.username} found!`)
        const access = await userAuth(user,clientData)
        if (access){
            console.log("Access granted!")
            res.json(loginRespond(msg1,true,0));
        }else{
            console.log("Wrong password! Access denied!")
            res.json(loginRespond(msg3,false,2));
        }
    }else{
        console.log(`No user with this email found!`)
        res.json(loginRespond(msg2,false,1));
    }
}
export default Login