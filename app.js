const express = require('express');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenses.routes');
const incomeRoutes = require('./routes/incomes.routes');
const userRoutes = require('./routes/user.routes');
const cors = require('cors');
const app = express();
const port = 5999;


mongoose.connect('mongodb://localhost:27017/ButceYonetici', { useNewUrlParser: true, useUnifiedTopology: true });
// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/expenses', expenseRoutes);
app.use('/income', incomeRoutes);
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
