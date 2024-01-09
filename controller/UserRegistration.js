import { createUser,userExists } from "../mongo/user.js";
import { hashPw } from "../encryption.js";

const registration = async (req,res)=>{
    const clientData = req.body
    if (Object.keys(clientData).length !== 0){
        const userExistance = await userExists(clientData)
        // console.log(userExistance)
        if(!userExistance){
            const clientPw = clientData.password
            // console.log("clear PW",clientData.password)
            const hash = await hashPw(clientPw,13)
            clientData.password = hash
            // console.log("hashed PW",clientData.password)
            createUser(clientData)
            res.json({msg:"User created",user:clientData.username,created:true,resCode:0})
        }else{
            res.json({msg:"Email alrerady exists",email:clientData.email,created:false,resCode:1})
        }
    }else{
        res.json({msg:"User NOT created",user:clientData.username,created:false,resCode:2})
    }
}
export default registration