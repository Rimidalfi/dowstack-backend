import express from "express";
import login from "../controller/userLogin.js";
import registration from "../controller/UserRegistration.js";
import {allUsers,deleteUser,oneUser,updateUser} from "../controller/userController.js";
import { allIncome, createIncomeEntry, incomeById, incomeByUserId, updateIncomeById,deleteIncomeById} from "../controller/incomeController.js";
import { allExpenses,createExpenseEntry,expenseById,expenseByUserId,updateExpenseById,deleteExpenseById } from "../controller/expensesController.js";

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
userRouter.get('/all',allUsers);
userRouter.get('/:id',oneUser);
userRouter.put('/settings',updateUser);
userRouter.delete('/delete',deleteUser);
incomeRouter.get('/all',allIncome);
incomeRouter.get('/user/:id',incomeByUserId);
incomeRouter.get('/:id', incomeById);
incomeRouter.post('/',createIncomeEntry);
incomeRouter.put('/update',updateIncomeById);
incomeRouter.delete('/delete',deleteIncomeById);
expensesRouter.get('/all', allExpenses);
expensesRouter.get('/user/:id', expenseByUserId);
expensesRouter.get('/:id', expenseById);
expensesRouter.post('/', createExpenseEntry);
expensesRouter.put('/update', updateExpenseById);
expensesRouter.delete('/delete', deleteExpenseById);
savingGoalRouter.get('/',(req,res)=> res.send("Saving Goals"));
expensesRouter.get('/',(req,res)=> res.send("Expenses"));
interestCalcRouter.get('/',(req,res)=> res.send("Calculator"));
AssetRouter.get('/',(req,res)=> res.send("Assets"));

export {userRegistration,userLogin,userRouter,savingGoalRouter,incomeRouter,expensesRouter,interestCalcRouter,AssetRouter};