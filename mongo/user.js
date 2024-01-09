import { userModel } from "./schemas.js";

async function createUser(clientData){
    try{
        // console.log(clientData)
        const newUser = new userModel(clientData);
        const result = await newUser.save();
        // console.log("User created", result)        
    }catch(err){
        "ERROR❗️ creating user:",err.message
    }
};
async function readUserByMail(clientData){
    try{
        const user = await userModel.findOne({email:clientData.email})
        return user
    }catch(err){
        console.error("ERROR❗️ reading user:",err.message);
    };
};
async function readUserById(userId){
    try{
        const user = await userModel.findOne({_id:userId})
        return user
    }catch(err){
        console.error("ERROR❗️ reading user:",err.message);
    };
};
async function readAllUsers(){
    try{
        return await userModel.find()

    }catch(err){
        console.error(err.message)
    }
};
async function userExists(clientData){
    try{
        if (await userModel.exists({email:clientData.email}) !== null){
            console.log("User already exists!")
            return true
        }else{
            console.log("User does not exist yet!")
            return false
        }
    }catch(err){
        console.error(err.message)
    };
};
//WIP  
async function updateUser(){
    const userUpdate = await userModel.updateOne({_id:"6595d4eaa045ef760f46dd15"},{password:"$2b$13$08BqoheXXA3Pr07Jquzym.t1YKFrVnEpuCV6GP.Jze6Fd/JjReA2a"})
    console.log(userUpdate)
};
export {createUser,readUserByMail,readUserById,readAllUsers,userExists}
