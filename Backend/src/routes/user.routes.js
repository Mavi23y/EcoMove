const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota POST para criar usuário
router.post('/', userController.createUser);

module.exports = router;