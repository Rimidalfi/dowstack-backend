import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI);

const userSchema = new mongoose.Schema({
    username:{type: String, required: true},
    firstname:{type: String, required: true},
    lastname:{type: String, required: true},
    email:{type: String, required: true},
    password:String,
    balance:Number
})

const goalSchema = new mongoose.Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId , required: true, ref:"user"},
    title:{type: String, required: true},
    creationDate:Date,
    updated: { type: Date, default: Date.now },
    balance:Number,
    goal:Number,
    rate:Number,
})

const userModel = mongoose.model("user",userSchema)
const goalModel = mongoose.model("goal",goalSchema)

export {userModel,goalModel};
// const testUser = new User({
//     username: "Rimidalf",
//     firstname: "Wladimir",
//     lastname: "Janowitsch",
//     email:"rimidalf@tutamail.com",
//     password:"plainjane1234",
//     balance:50000000
// })

// testUser.save().then(()=>console.log("new entry"),(err)=>console.log(err));