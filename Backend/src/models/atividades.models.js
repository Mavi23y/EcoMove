const db = require('../config/db');

const atividadeModel = {
  findAll: async () => {
    const query = 'SELECT * FROM atividades';
    const [rows] = await db.query(query); 
    return rows;
  },

  create: (data, callback) => {
    const query = 'INSERT INTO atividades (usuarios_id, tipo, distancia_metros, duracao_minutos, co2_kg, data_iso) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [data.usuarios_id, data.tipo, data.distancia_metros, data.duracao_minutos, data.co2_kg, data.data_iso], callback);
  }
};

module.exports = atividadeModel;