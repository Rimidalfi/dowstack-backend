import { goalModel } from "./schemas.js";

async function createGoal(goalData){
    try{
        const newGoal = new goalModel(goalData);
        const result = await newGoal.save();
        console.log("Goal created ✨",result);
        return result
    }catch(err){
        console.error("ERROR❗️ creating goal:", err.message);
    }
};
async function readGoalByUserId(userId){
    try{
        const read = await goalModel.find({user_id:userId});
        console.log("goals:",read);
        return read;
    }catch(err){
        console.error("ERROR❗️ fetching goals",err.message)
    }
};
async function readGoalById(goalId){
    try{
        const read = await goalModel.find({_id:goalId});
        console.log("goals:",read);
        console.log(goalId)
        return read;
    }catch(err){
        console.error("ERROR❗️ fetching goal",err.message)
    }
};
async function updateGoal(goalId,updateData){
    try{
        const update = await goalModel.updateOne({_id:goalId},updateData);
        const msg = {msg:"GOAL updated 💫:",update:updateData}
        console.log("Goal updated 💫:",update)
        return msg
    }catch(err){
        console.error("ERROR❗️ updating goal",err.message)
    }
};
async function deleteGoal(goalId){
    try{
        const deleteGoal = await goalModel.deleteOne({_id:goalId})
        let result = null
        // console.log(result)
        deleteGoal.deletedCount === 1 ? result = true : result = false
        // console.log(result)
        return result
    }catch(err){
        console.error("ERROR❗️ deleting goal",err.message)
    };
};
export {createGoal,readGoalById,readGoalByUserId,updateGoal,deleteGoal}