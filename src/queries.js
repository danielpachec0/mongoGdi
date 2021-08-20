const mongoose = require('mongoose');
const Jogador = require('../models/jogador');
const Time = require('../models/time');
const Campeonato = require('../models/campeonato');
const { $where } = require('../models/jogador');

mongoose.connect(
'mongodb+srv://projetomongo:123321@cluster0.yyvzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Time.find($where, { nome: "Furia" })
.exec()
.then(doc => {
    console.log(doc);
})
.catch(err => console.log(err));

Time.find().count()
.exec()
.then(doc => {
    console.log(doc);
})
.catch(err => console.log(err));

