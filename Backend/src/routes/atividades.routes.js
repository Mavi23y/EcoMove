
const express = require('express');
const router = express.Router();

const atividadeController = require('../controllers/atividades.controller');

router.get('/', atividadeController.getAllAtividades);

module.exports = router;