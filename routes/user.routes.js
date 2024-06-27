const { Router } = require('express');
const userController = require('../controllers/user.controller');


const router = Router();

router.post('/login', userController.getUserByUsername);
router.post('/',userController.createUser);
router.put('/',userController.updateUser);

module.exports = router;