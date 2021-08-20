const { Timestamp } = require("mongodb");

db = db.getSiblingDB("joguitos");
/*console.log(db.jogador.find());
console.log(db.jogador.find({nome: "Art"}).pretty());
console.log(db.time.count());
db.campeonato.updateOne({nome: "teste"},{$set:{"nome": "IEM"}})
console.log(db.time.find());
console.log(db.time.find().sort({vitorias: -1}));*/

var startDate = new Date("Tue Aug 20 2021 15:26:12 GMT-0300 (Brasilia Standard Time)").getTime();
console.log(db.campeonato.aggregate([
    {
        $match: {
            dt_inicio: {$lt: startDate}
        },
    }
]));