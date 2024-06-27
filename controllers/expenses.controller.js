const Expense = require('../models/expense');
const Counter = require('../models/counter');
const Income = require('../models/income');
const User = require('../models/user');
const BaseResponse = require('../core/base_response.model');

// Create Expense
exports.createExpense = async (req, res) => {
  try {
    const {type="expense", title, amount, date, category, description, paymentMethod, username } = req.body;
    const dbUser = await User.findOne({username: username});
    const user = dbUser._id;
    const newExpense = await Expense.create({type, title, amount, date, category, description, paymentMethod, user});
    
    return res.status(200).json(BaseResponse.success(newExpense));
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};

// Get All Expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const dbUser = await User.findOne({ username: req.params.username });
    const expenses = await Expense.find({user: dbUser._id});
    return res.status(200).json(BaseResponse.success(expenses));
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};

// Get a Single Expense
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id).populate('user', 'username email'); // Populate user details from 'User' model
    if (!expense) {
      return res.status(404).json(BaseResponse.error("Expense not found"));
    }
    res.json(expense);
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};

// Update Expense
exports.updateExpense = async (req, res) => {
  try {
    const {type, title, amount, date, category, description, paymentMethod, user } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, {
      type,
      title,
      amount,
      date,
      category,
      description,
      paymentMethod,
      user
    }, { new: true });
    if (!updatedExpense) {
      return res.status(404).json(BaseResponse.error("Expense not found"));
    }
    res.json(updatedExpense);
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};

// Delete Expense
exports.deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    return res.json(BaseResponse.success(null));
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};
