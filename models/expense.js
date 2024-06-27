const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: {type: String, required: true},
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String},
  description: { type: String },
  type: {type: String},
  paymentMethod: { type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
});

module.exports = mongoose.model('Expense', expenseSchema);
