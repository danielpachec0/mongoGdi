const mongoose = require('mongoose');

const campeonatoSchema = new mongoose.Schema({
    nome: String,
    dt_inicial: { type: Date, default: Date.now },
    dt_final: { type: Date},
    times: [{ type: mongoose.Schema.ObjectId, ref: 'Time' }]
});

module.exports = mongoose.model('Campeonato',campeonatoSchema);