import { readAllUsers,readUserById,updateUserById,deleteUserById} from "../mongo/user.js"
import { userExists } from "../mongo/user.js";
import { hashPw } from "../encryption.js";

function isMongoDBObjectId(id) {
    return typeof id === 'string' && id.length === 24 && /^[0-9a-fA-F]+$/.test(id);
}

const allUsers = async (req,res)=>{
    res.send(await readAllUsers())
};
const oneUser = async (req,res)=>{
    const userId = req.params.id
    if(isMongoDBObjectId(userId)){
        const singleUser = await readUserById(userId)
        singleUser !== null ? res.json(singleUser) :res.json({msg:"No User with This Id ! 🙅‍♂️"})
    }else{
        res.json({msg:"Error! Input a valid MongoDB ObjectId"})
    };
}
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

