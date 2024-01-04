import express from "express";

const userRouter = express.Router();
const savingGoalRouter = express.Router();
const incomeRouter = express.Router();
const expensesRouter = express.Router();
const interestCalcRouter = express.Router();
const AssetRouter = express.Router();


userRouter.get('/',(req,res)=> res.send("Users"));
savingGoalRouter.get('/',(req,res)=> res.send("Saving Goals"));
incomeRouter.get('/',(req,res)=> res.send("Income"));
expensesRouter.get('/',(req,res)=> res.send("Expenses"));
interestCalcRouter.get('/',(req,res)=> res.send("Calculator"));
AssetRouter.get('/',(req,res)=> res.send("Assets"));

export {userRouter,savingGoalRouter,incomeRouter,expensesRouter,interestCalcRouter,AssetRouter};