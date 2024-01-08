import express from "express";
import cors from 'cors';
import { userRouter,savingGoalRouter,incomeRouter,expensesRouter,interestCalcRouter,AssetRouter, userLogin } from "./router/router.js";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.get('/',(req,res)=>res.send("Homer"))
app.use(express.json());

app.use('/login',userLogin)
app.use('/users',userRouter);
app.use('/goals',savingGoalRouter);
app.use('/in',incomeRouter);
app.use('/out',expensesRouter);
app.use('/calc',interestCalcRouter);
app.use('/assets',AssetRouter);

app.listen(PORT,()=>console.log(`Server runs on Port: http://localhost:${PORT}`));
