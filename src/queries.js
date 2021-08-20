const mongoose = require('mongoose');
const Jogador = require('../models/jogador');
const Time = require('../models/time');
const Time = require('../models/campeonato');

mongoose.connect(
'mongodb+srv://projetomongo:123321@cluster0.yyvzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Time.find({ nome: "Furia" })
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

Time.find().count()
.exec()
.then(doc => {
    console.log(doc);
})
.catch(err => console.log(err));