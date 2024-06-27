const { Router } = require('express');
const expensesController = require('../controllers/expenses.controller');


const router = Router();

router.get('/all/:username',expensesController.getAllExpenses);
router.get('/:id',expensesController.getExpenseById);
router.post('/',expensesController.createExpense);
router.put('/:id',expensesController.updateExpense);
router.delete('/:id', expensesController.deleteExpense);

module.exports = router;