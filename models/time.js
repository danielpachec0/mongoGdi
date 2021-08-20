const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
    nome: String,
    jogadores: [{ type: mongoose.Schema.ObjectId, ref: 'Jogador' }]
});

module.exports = mongoose.model('Time',timeSchema)