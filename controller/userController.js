import { readAllUsers,readUserById,updateUserById,deleteUserById} from "../mongo/user.js"
import { userExists } from "../mongo/user.js";
import { hashPw } from "../encryption.js";

const allUsers = async (req,res)=>{
    res.send(await readAllUsers())
};
const oneUser = async (req,res)=>{
    const userId = req.params.id
    // console.log("One User",userId)
    const singleUser = await readUserById(userId)
    // console.log("Single User",singleUser)
    res.send(singleUser)
};
const updateUser = async (req,res)=>{

    const clienteData = req.body;
    const userId = clienteData.userId;
    const updateData = clienteData.updateData;

    if(updateData.password){
        // console.log("password vorhanden");
        const hash = await hashPw(updateData.password,13);
        updateData.password = hash;
        // console.log("password hashed and changed:", hash)
    };

    if (updateData.email){
        const userExistance = await userExists(updateData)
        console.log(userExistance)
        if(await userExists(updateData)){
            res.json({msg:"this Email already exist!"});
        }else{
            updateUserById(userId,updateData);
            res.json({msg:"User Data updated!"})
        };
    }else{
        updateUserById(userId,updateData)
        res.json({msg:"User Data updated!"})
    };
};
const deleteUser = async (req,res)=>{
    const userId = req.body.userId
    console.log(userId)
    const result = await deleteUserById(userId)
    result ? res.json({msg:"user deleted"}) : res.json({msg:" NO user deleted"})
};
export {allUsers,oneUser,updateUser,deleteUser}

