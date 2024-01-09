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
async function updateUserById(userId,updateData){
    try{
        const userUpdate = await userModel.updateOne({_id:userId},updateData)
    }catch(err){
        console.error("ERROR!",err.message)
    };
};
async function deleteUserById(userId){
    try{
        const deleteUser = await userModel.deleteOne({_id:userId})
        let result = null
        // console.log(result)
        deleteUser.deletedCount === 1 ? result = true : result = false
        // console.log(result)
        return result
    }catch(err){
        console.error("ERROR!",err.message)
    };
};
export {createUser,readUserByMail,readUserById,readAllUsers,userExists,updateUserById,deleteUserById}