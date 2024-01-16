import {createGoal,readGoalById,readGoalByUserId,updateGoal,deleteGoal} from "../mongo/goals.js"

function isMongoDBObjectId(id) {
    return typeof id === 'string' && id.length === 24 && /^[0-9a-fA-F]+$/.test(id);
}

const createGoalEntry = async(req,res)=>{
    const goalData = await req.body;
    const goal =  await createGoal(goalData);
    res.json({msg:"goal created ✨",goal:goal})
};
const goalByUserId = async (req,res)=>{
    const userId = req.params.id
    if(isMongoDBObjectId(userId)){
        const userGoal = await readGoalByUserId(userId)
        userGoal.length !== 0 ? res.json(userGoal) :res.json({msg:"No Goal Eentries with This Id ! 🙅‍♂️"})
    }else{
        res.json({msg:"Error! Input a valid MongoDB ObjectId"})
    };
};
const goalById = async (req,res)=>{
    const goalId = req.params.id
    if(isMongoDBObjectId(goalId)){
        const goal = await readGoalById(goalId)
        goal.length !== 0 ? res.json(goal) :res.json({msg:"No Goal Entries with This Id ! 🙅‍♂️"})
    }else{
        res.json({msg:"Error! Input a valid MongoDB ObjectId"})
    };
};
const updateGoalById = async (req,res)=>{
    const goalData = await req.body;
    const goalId = goalData._id;
    const updateData = goalData.updateData;
    const result = await updateGoal(goalId,updateData)
    res.json(result);
};
const deleteGoalById = async (req,res)=>{
    const goalId = await req.body;
    console.log(goalId._id)
    deleteGoal(goalId._id);
    res.json({msg:"goal deleted"});
};

export {createGoalEntry, goalByUserId, goalById, updateGoalById, deleteGoalById}