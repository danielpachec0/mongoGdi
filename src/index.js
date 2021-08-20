const mongoose = require('mongoose');
const Jogador = require('../models/jogador');
const Time = require('../models/time');
const Campeonato = require('../models/campeonato');

mongoose.connect(
'mongodb+srv://projetomongo:123321@cluster0.yyvzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const jogador = new Jogador({
    nome: "daniel",
    Sobrenome: "pacheco",
    cpf: "teste"
});

jogador.save();

const jogador1 = new Jogador({
    nome: "tl1",
    Sobrenome: "a",
    cpf: "1"
});

jogador1.save();

const jogador2 = new Jogador({
    nome: "tl2",
    Sobrenome: "b",
    cpf: "2"
});

jogador2.save();

const jogador3 = new Jogador({
    nome: "tl3",
    Sobrenome: "c",
    cpf: "3"
});

jogador3.save();

const time = new Time({
    nome: "Furia",
    jogadores: [jogador._id]
});

time.save();

const time2 = new Time({
    nome: "tl",
    jogadores: [jogador1._id, jogador2._id, jogador3._id]
});

time2.save();