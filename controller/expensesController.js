import { readAllExpenses, readExpenseById, readExpenseByUserId, createExpense, updateExpense, deleteExpense } from "../mongo/expenses.js";

function isMongoDBObjectId(id) {
    return typeof id === 'string' && id.length === 24 && /^[0-9a-fA-F]+$/.test(id);
}


const allExpenses = async (req, res) => {
    res.send(await readAllExpenses());
};

const createExpenseEntry = async (req, res) => {
    const expenseData = await req.body;
    const date = expenseData.creationDate
    const [year, month, day] = date.split("-")
    expenseData.filterDate ={
        year:year,
        month:month,
        day:day
    }
    const expense = await createExpense(expenseData);
    res.json({ msg: "expense created ✨", expense: expense });
};

const expenseByUserId = async (req, res) => {
    const userId = req.params.id;
    if (isMongoDBObjectId(userId)) {
        const userExpense = await readExpenseByUserId(userId);
        userExpense.length !== 0 ? res.json(userExpense) : res.json({ msg: "No Expense Entries with This Id ! 🙅‍♂️" });
    } else {
        res.json({ msg: "Error! Input a valid MongoDB ObjectId" });
    }
};

const expenseById = async (req, res) => {
    const expenseId = req.params.id;
    if (isMongoDBObjectId(expenseId)) {
        const expense = await readExpenseById(expenseId);
        expense.length !== 0 ? res.json(expense) : res.json({ msg: "No Expense Entries with This Id ! 🙅‍♂️" });
    } else {
        res.json({ msg: "Error! Input a valid MongoDB ObjectId" });
    }
};


// const expenseByUserId = async (req, res) => {
//     const expenseData = await req.body;
//     const expense = await readExpenseByUserId(expenseData.user_id);
//     res.json(expense);
// };

// const expenseById = async (req, res) => {
//     const expenseData = await req.body;
//     const expense = await readExpenseById(expenseData._id);
//     res.json(expense);
// };

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
