import { readAllExpenses, readExpenseById, readExpenseByUserId, createExpense, updateExpense, deleteExpense } from "../mongo/expenses.js";

const allExpenses = async (req, res) => {
    res.send(await readAllExpenses());
};

const createExpenseEntry = async (req, res) => {
    const expenseData = await req.body;
    const expense = await createExpense(expenseData);
    res.json({ msg: "expense created ✨", expense: expense });
};

const expenseByUserId = async (req, res) => {
    const expenseData = await req.body;
    const expense = await readExpenseByUserId(expenseData.user_id);
    res.json(expense);
};

const expenseById = async (req, res) => {
    const expenseData = await req.body;
    const expense = await readExpenseById(expenseData._id);
    res.json(expense);
};

const updateExpenseById = async (req, res) => {
    const expenseData = await req.body;
    const expenseId = expenseData._id;
    const updateData = expenseData.updateData;
    const result = await updateExpense(expenseId, updateData);
    res.json(result);
};

const deleteExpenseById = async (req, res) => {
    const expenseId = await req.body;
    console.log(expenseId._id);
    deleteExpense(expenseId);
    res.json({ msg: "expense deleted" });
};

export { allExpenses, createExpenseEntry, expenseById, expenseByUserId, updateExpenseById, deleteExpenseById };
