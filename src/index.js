const mongoose = require('mongoose');
const Jogador = require('../models/jogador');
const Time = require('../models/time');

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

const time = new Time({
    nome: "Furia",
    jogadores: [jogador._id]
});

time.save();


Time.find({ nome: "Furia" })
.exec()
.then(doc => {
    console.log(doc);
})
.catch(err => console.log(err));


