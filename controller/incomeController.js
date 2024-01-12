import { readAllIncomes,readIncomeById,readIncomeByUserId,createIncome,updateIncome,deleteIncome} from "../mongo/income.js";

function isMongoDBObjectId(id) {
    return typeof id === 'string' && id.length === 24 && /^[0-9a-fA-F]+$/.test(id);
}

const allIncome = async (req,res)=>{
    res.send(await readAllIncomes())
};
const createIncomeEntry = async(req,res)=>{
    const incomeData = await req.body;
    const income =  await createIncome(incomeData);
    res.json({msg:"income created ✨",income:income})
};
const incomeByUserId = async (req,res)=>{
    const userId = req.params.id
    if(isMongoDBObjectId(userId)){
        const userIncome = await readIncomeByUserId(userId)
        userIncome.length !== 0 ? res.json(userIncome) :res.json({msg:"No Income Eentries with This Id ! 🙅‍♂️"})
    }else{
        res.json({msg:"Error! Input a valid MongoDB ObjectId"})
    };
};
const incomeById = async (req,res)=>{
    const incomeId = req.params.id
    if(isMongoDBObjectId(incomeId)){
        const income = await readIncomeById(incomeId)
        income.length !== 0 ? res.json(income) :res.json({msg:"No Income Eentries with This Id ! 🙅‍♂️"})
    }else{
        res.json({msg:"Error! Input a valid MongoDB ObjectId"})
    };
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