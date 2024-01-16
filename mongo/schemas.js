import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_DB_URI);

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    firstname:String,
    lastname:String,
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    balance:{type:Number, required:true},
});

const incomeSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    creationDate: { type: Date, required: true },
    updated: { type: Date},
    amount: { type: Number, required: true },
    recurring: { type: Boolean, default: false }
});

const expensesSchema = new mongoose.Schema({
    user_id:{type:String, required:true},
    title:{type:String, required:true},
    creationDate: { type: Date, required: true },
    updated: { type: Date},
    amount:{type:Number, required:true},
    recurring:{type:Boolean, default:false}
});

const goalSchema = new mongoose.Schema({
    user_id:{type:String, required:true},
    title:{type:String, required:true},
    creationDate: { type: Date, required: true },
    updated: { type: Date},
    balance:{type:Number, required:true},
    goal:{type:Number, required:true},
    rate:{type:Number},
});

const InterestSchema = new mongoose.Schema({
    user_id:{type:String, required:true},
    title:{type:String, required:true},
    creationDate: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    interest:{type:Number, required:true},
    rate:{type:Number, required:true},
    capital:{type:Number, required:true},
    durration:{type:Number, required:true}
});

const assetsSchema = new mongoose.Schema({
    user_id:{type:String, required:true},
    title:{type:String, required:true},
    creationDate: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
    value:{type:Number, required:true}
});

const userModel = mongoose.model("user",userSchema);
const goalModel = mongoose.model("goal",goalSchema);
const incomeModel = mongoose.model("income",incomeSchema);
const expensesModel = mongoose.model("expense",expensesSchema);
const interestModel = mongoose.model("interest",InterestSchema);
const assetsModel = mongoose.model("asset",assetsSchema);

export {userModel,goalModel,incomeModel,expensesModel,interestModel,assetsModel};