const { Router } = require('express');
const incomeController = require('../controllers/income.controller');


const router = Router();

router.get('/all/:username',incomeController.getAllIncomes);
router.get('/:id', incomeController.getIncomeById);
router.post('/',incomeController.createIncome);
router.put('/:id',incomeController.updateIncome);
router.delete('/:id', incomeController.deleteIncome);

module.exports = router;