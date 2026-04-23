const userModel = require('../models/userModel');

// CREATE
const createUser = async (req, res) => {
  try {
    
    const { nome, email, senha, foto } = req.body;

    const userData = {
      nome,
      email,
      senha,
      foto
    };

    const newUser = await userModel.create(userData);
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};