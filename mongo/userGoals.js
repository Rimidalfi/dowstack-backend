import {goalModel} from "./schemas";

async function createGoal(goalData){
    try{
        const newGoal = new goalModel(goalData);
        const result = await newGoal.save();
        console.log("Goal created ✨",result);
    }catch(err){
        console.error("Error while creating goal:", err.message);
    }
};

async function readGoal(userId){
    try{
        const read = await goalModel.find({user_id:userId});
        console.log("Goals:",read);
    }catch(err){
        console.error("Error fetching user Goals",err.message)
    }
};

async function updateGoal(goalId,updateData){
    try{
        const update = await goalModel.findByIdAndUpdate(goalId,updateData,{new:true});
        console.log("Goal updated:",update)
    }catch(err){
        console.error("Error while updating Goal",err.message)
    }
};

async function deleteGoal(goalId){
    try{
        const del = await goalModel.findByIdAndDelete(goalId);
        console.log("Goal deleted:", del)
    }catch(err){
        console.error("Error while deleting Goal",err.message)
    }
};

export {createGoal,readGoal,updateGoal,deleteGoal}