const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); 

// Rota de teste para ver se está funcionando
app.get('/', (req, res) => {
  res.send('Servidor do EcoMove rodando com sucesso! 🚀');
});

// Aqui é onde você vai importar suas rotas depois, ex:
// const userRoutes = require('./routes/userRoutes');
// app.use('/users', userRoutes);

// Definição da porta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta: ${PORT}`);
});