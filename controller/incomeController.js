import { readAllIncomes,readIncomeById,readIncomeByUserId,createIncome,updateIncome,deleteIncome} from "../mongo/income.js";

const allIncome = async (req,res)=>{
    res.send(await readAllIncomes())
};
const createIncomeEntry = async(req,res)=>{
    const incomeData = await req.body;
    const income =  await createIncome(incomeData);
    res.json({msg:"income created ✨",income:income})
};
const incomeByUserId = async (req,res)=>{
    const incomeData = await req.body;
    const income = await readIncomeByUserId(incomeData.user_id);
    res.json(income);
};
const incomeById = async (req,res)=>{
    const incomeData = await req.body;
    const income = await readIncomeById(incomeData._id);
    res.json(income);
};
const updateIncomeById = async (req,res)=>{
    const incomeData = await req.body;
    const incomeId = incomeData._id;
    const updateData = incomeData.updateData;
    const result = await updateIncome(incomeId,updateData)
    res.json(result);
};
const deleteIncomeById = async (req,res)=>{
    const incomeId = await req.body;
    console.log(incomeId._id)
    deleteIncome(incomeId);
    res.json({msg:"income deleted"});
};

export {allIncome, createIncomeEntry,incomeById,incomeByUserId, updateIncomeById, deleteIncomeById}