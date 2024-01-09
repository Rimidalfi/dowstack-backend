import express from "express";
import login from "../controller/login.js";
import registration from "../controller/registration.js";

const userRouter = express.Router();
const savingGoalRouter = express.Router();
const incomeRouter = express.Router();
const expensesRouter = express.Router();
const interestCalcRouter = express.Router();
const AssetRouter = express.Router();
const userLogin = express.Router();
const userRegistration = express.Router();


userLogin.post('/',login);
userRegistration.post('/',registration);
userRouter.get('/',(req,res)=> res.send("Users"));
savingGoalRouter.get('/',(req,res)=> res.send("Saving Goals"));
incomeRouter.get('/',(req,res)=> res.send("Income"));
expensesRouter.get('/',(req,res)=> res.send("Expenses"));
interestCalcRouter.get('/',(req,res)=> res.send("Calculator"));
AssetRouter.get('/',(req,res)=> res.send("Assets"));

export {userRegistration,userLogin,userRouter,savingGoalRouter,incomeRouter,expensesRouter,interestCalcRouter,AssetRouter};