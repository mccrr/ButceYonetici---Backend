const BaseResponse = require('../core/base_response.model');
const Income = require('../models/income');
const User = require('../models/user');

// Create Income
exports.createIncome = async (req, res) => {
  try {
    const {type, title, amount, date, source, description, username } = req.body;
    const dbUser = await User.findOne({username: username});
    const user = dbUser._id;
    const newIncome = await Income.create({type, title, amount, date, source, description, user });

    return res.status(201).json(BaseResponse.success(newIncome));
  } catch (err) {
    return res.status(400).json(BaseResponse.error(err.message));
  }
};

// Get All Incomes
exports.getAllIncomes = async (req, res) => {
  try {
    const dbUser = await User.findOne({ username: req.params.username });
    const incomes = await Income.find({ user: dbUser._id }); // Populate user details from 'User' model
    return res.status(200).json(BaseResponse.success(incomes));
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};

// Get a Single Income
exports.getIncomeById = async (req, res) => {
  try {
    const income = await Income.findById(req.params.id).populate('user', 'username email'); // Populate user details from 'User' model
    if (!income) {
      return res.status(404).json(BaseResponse.error("Income not found"));
    }
    return res.status(200).json(BaseResponse.success(income));
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};

// Update Income
exports.updateIncome = async (req, res) => {
  try {
    const {type, title, amount, date, source, description, username } = req.body;
    const dbUser = await User.findOne({username: username});
    const user = dbUser._id;
    const updatedIncome = await Income.findByIdAndUpdate(req.params.id, {
      type,
      title,
      amount,
      date,
      source,
      description,
      user
    }, { new: true });
    if (!updatedIncome) {
      return res.status(404).json(BaseResponse.error("Income not found"));
    }
    return res.status(200).json(BaseResponse.success(updatedIncome));
  } catch (err) {
    return res.status(400).json(BaseResponse.error(err.message));
  }
};

// Delete Income
exports.deleteIncome = async (req, res) => {
  try {
    const deletedIncome = await Income.findByIdAndDelete(req.params.id);
    if (!deletedIncome) {
      return res.status(404).json(BaseResponse.error("Income not found"));
    }
   return res.json(BaseResponse.success(null));
  } catch (err) {
    return res.status(500).json(BaseResponse.error(err.message));
  }
};
