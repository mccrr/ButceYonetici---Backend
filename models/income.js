const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  title: {type: String, required: true},
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  source: { type: String },
  description: { type: String },
  type: {type: String},
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
});

module.exports = mongoose.model('Income', incomeSchema);
