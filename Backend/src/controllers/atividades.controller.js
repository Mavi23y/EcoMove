const atividadeModel = require('../models/atividades.models');

const getAllAtividades = async (req, res) => {
  try {
    const atividades = await atividadeModel.findAll(); 
    res.status(200).json(atividades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar atividades' });
  }
};

module.exports = { getAllAtividades };