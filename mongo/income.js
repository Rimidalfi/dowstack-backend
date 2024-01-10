import { incomeModel } from "./schemas.js";

async function createIncome(incomeData){
    try{
        const newIncome = new incomeModel(incomeData);
        const result = await newIncome.save();
        console.log("Income created ✨",result);
        return result
    }catch(err){
        console.error("ERROR❗️ creating income:", err.message);
    }
};
async function readAllIncomes(){
    try{
        return await incomeModel.find()
    }catch(err){
        console.error("ERROR❗️",err.message)
    }
};
async function readIncomeByUserId(userId){
    try{
        const read = await incomeModel.find({user_id:userId});
        console.log("Incomes:",read);
        return read;
    }catch(err){
        console.error("ERROR❗️ fetching income",err.message)
    }
};
async function readIncomeById(incomeId){
    try{
        const read = await incomeModel.find({_id:incomeId});
        console.log("Incomes:",read);
        console.log(incomeId)
        return read;
    }catch(err){
        console.error("ERROR❗️ fetching income",err.message)
    }
};
async function updateIncome(incomeId,updateData){
    try{
        const update = await incomeModel.updateOne({_id:incomeId},updateData);
        const msg = {msg:"Income updated 💫:",update:updateData}
        console.log("Income updated 💫:",update)
        return msg
    }catch(err){
        console.error("ERROR❗️ updating income",err.message)
    }
};
async function deleteIncome(incomeId){
    try{
        const deleteUser = await incomeModel.deleteOne({_id:incomeId})
        let result = null
        // console.log(result)
        deleteUser.deletedCount === 1 ? result = true : result = false
        // console.log(result)
        return result
    }catch(err){
        console.error("ERROR❗️ deleting income",err.message)
    };
};
export {createIncome,readIncomeByUserId,readIncomeById,readAllIncomes,updateIncome,deleteIncome}