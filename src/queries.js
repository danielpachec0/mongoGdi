db = db.getSiblingDB("joguitos");
console.log(db.jogador.find());
console.log(db.jogador.find({nome: "Art"}).pretty());
console.log(db.time.count());
db.campeonato.updateOne({nome: "teste"},{$set:{"nome": "IEM"}})
console.log(db.time.find());
console.log(db.time.find().sort({vitorias: -1}));