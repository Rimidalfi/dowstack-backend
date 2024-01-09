import { readAllUsers,readUserById} from "../mongo/user.js"

const allUsers = async (req,res)=>{
    res.send(await readAllUsers())
}
const oneUser = async (req,res)=>{
    const userId = req.params.id
    // console.log("One User",userId)
    const singleUser = await readUserById(userId)
    console.log("Single User",singleUser)
    res.send(singleUser)
}
export {allUsers,oneUser}

