const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema({
    nome: String,
    Sobrenome: String,
    cpf: String
});

module.exports = mongoose.model('Jogador',jogadorSchema);