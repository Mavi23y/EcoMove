const db = require('../config/db');

const User = {
  create: (data, callback) => {
    const query = 'INSERT INTO usuarios (nome, email, senha, foto_url) VALUES (?, ?, ?, ?)';
    db.query(query, [data.nome, data.email, data.senha, data.foto_url], callback);
  }
};

module.exports = User;