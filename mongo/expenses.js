import { expensesModel } from "./schemas.js";

async function createExpense(expenseData) {
    try {
        const newExpense = new expensesModel(expenseData);
        const result = await newExpense.save();
        console.log("Expense created ✨", result);
        return result;
    } catch (err) {
        console.error("ERROR❗️ creating expense:", err.message);
    }
}

async function readAllExpenses() {
    try {
        return await expensesModel.find();
    } catch (err) {
        console.error("ERROR❗️", err.message);
    }
}

async function readExpenseByUserId(userId) {
    try {
        const read = await expensesModel.find({ user_id: userId });
        console.log("Expenses:", read);
        return read;
    } catch (err) {
        console.error("ERROR❗️ fetching expense", err.message);
    }
}

async function readExpenseById(expenseId) {
    try {
        const read = await expensesModel.find({ _id: expenseId });
        console.log("Expenses:", read);
        console.log(expenseId);
        return read;
    } catch (err) {
        console.error("ERROR❗️ fetching expense", err.message);
    }
}

async function updateExpense(expenseId, updateData) {
    try {
        const update = await expensesModel.updateOne({ _id: expenseId }, updateData);
        const msg = { msg: "Expense updated 💫:", update: updateData };
        console.log("Expense updated 💫:", update);
        return msg;
    } catch (err) {
        console.error("ERROR❗️ updating expense", err.message);
    }
}

async function deleteExpense(expenseId) {
    try {
        const deleteExpense = await expensesModel.deleteOne({ _id: expenseId });
        let result = null;
        deleteExpense.deletedCount === 1 ? (result = true) : (result = false);
        return result;
    } catch (err) {
        console.error("ERROR❗️ deleting expense", err.message);
    }
}

export {
    createExpense,
    readExpenseByUserId,
    readExpenseById,
    readAllExpenses,
    updateExpense,
    deleteExpense
};
