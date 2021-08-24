//Retorna todos os jogadores inseridos no banco de dados.
console.log(db.jogador.find());

//Retorna todos os times com país de origem brasil
console.log(db.time.findOne({pais: "Brasil"}));

//retorna o jogador com nome "Art"
console.log(db.jogador.find({nome: "Art"}).pretty());

//retorna o numero de times registrados no banco de dados
console.log(db.time.count());

//faz um update de um campeonato que tenha o nome igual a "teste" e muda o seu nome para "IEM" 
db.campeonato.updateOne({nome: "teste"},{$set:{"nome": "IEM"}})

//retorna os times registrados no bd e depois retorna eles com um sort
//para ordenar do time com mais vitorias para o com menos
console.log(db.time.find());
console.log(db.time.find().sort({vitorias: -1}));

//aqui mudamos o nome da coleção "jogador" parra "proplayer"
db.jogador.renameCollection("proplayer");


//Lista todos os campeonatos que tem data de inicio a
//data da variavel start Date
var startDate = new Date("Tue Aug 20 2021 15:26:12 GMT-0300 (Brasilia Standard Time)").getTime();
console.log(db.campeonato.aggregate([
    {
        $match: {
            dt_inicio: {$lt: startDate}
        },
    }
]));

//consulta que retorna o total agredo de
//vitorias dos paises com times registrados
console.log(db.time.aggregate([
    {
        $group: {
            _id: "$pais",

            total_titulos: {
                $sum: "$vitorias"
            }
        }
    }
]))

//retorna todas os jogadores  com idade maio que 18
console.log(
    db.proplayer.find(
        {
            idade: {$gte: 18}
        }
    )
)

//printa 5 joigadores e quais os times do pais dele
console.log(db.proplayer.aggregate([
    {
    $lookup: {
        from: "time",
        localField: "pais",
        foreignField: "pais",
        as: "Times do mesmo pais"
    }
  },
  {$limit: 5}
]));

//usa a funcao add to set para adcionar os times passados para todos os
//campeonatos que tem o nome "teste"
db.campeonato.updateMany({Nome: "teste"},{$addToSet: 
    {
        times:
        {
            $each:
            [
                db.time.findOne({nome: "Furia"})._id,
                db.time.findOne({nome: "Godsent"})._id,
                db.time.findOne({nome: "Pain Gaming"})._id,
                db.time.findOne({nome: "O Plano"})._id,
                db.time.findOne({nome: "Team Liquid"})._id,
                db.time.findOne({nome: "Rainhas da bala"})._id,
            ]
        }
    }
})

//retorna o time com nome pain gaming depois faz uma consulta igual mas usando
//projection de forma implicita para n mostar o id nem os jogadores
console.log(db.time.findOne({nome: "Pain Gaming"}))
console.log(db.time.findOne({nome: "Pain Gaming"}, {proplayer: 0, _id: 0}))
//console.log(db.time.findOne({nome: "Pain Gaming"}, {proplayer: 0, _id: 0}).pretty())

//cassifica os times em 'Top tier' e 'f' 
//top tier se o numero de vitorias for maior que 5 
console.log(db.time.aggregate(
    [
       {
          $project:
            {
                _id: 0,
                nome: 1,
                vitorias:
                {
                  $cond: { if: { $gte: [ "$vitorias", 5 ] }, then: "Top Tier", else: "F" }
                }
            }
       }
    ]
 ));

//Retorna campeonatos que tem um array de times que contem todos os que 
//foram passqados na consulta
console.log(db.campeonato.find({times: {$all: [
    db.time.findOne({nome: "Furia"})._id,
    db.time.findOne({nome: "Godsent"})._id,
    db.time.findOne({nome: "Pain Gaming"})._id,
    db.time.findOne({nome: "O Plano"})._id,
    db.time.findOne({nome: "Team Liquid"})._id,
    db.time.findOne({nome: "Rainhas da bala"})._id,
]}}))



//retorna osjuizes de cada campeonato que tem idade maior que 40 
console.log(db.campeonato.aggregate([
    {
       $project: {
           _id: 0,
           Nome: 1,
          juizes: {
             $filter: {
                input: "$juizes",
                as: "juiz",
                cond: { $gte: [ "$$juiz.idade", 40] }
            }
          }
       }
    }
 ]));

//Retorna os campeonatos que tem "Brasileiro" no nome
db.campeonato.createIndex( { Nome:"text"} )
console.log(db.campeonato.find( { $text: { $search: "\"Brasileiro\"" } } ));

//Retorna os campeonatos com 4 jogadores
console.log(db.campeonato.find({times:{$size: 4}}));

//Retorna os Times que tem 6 jogadores
console.log(db.time.find({proplayer:{$size: 6}}));

//Retorna apenas os campeonatos que tem uma premiacao
console.log(db.campeonato.find( { premiacao: { $exists: true}}, {_id:0, juizes: 0, times: 0}));

//consulta que retonar o pais que possui o mair numero de
//vitorios dos que tem  pais de origem brasil
console.log(db.time.aggregate({$match:{pais: "Brasil"}}, {$max: "vitorias"}));

//retorna a media de idade de jogadores com pais de origem brasil
console.log(db.proplayer.aggregate(
    [
      {
        $group:
          {
            _id: "$pais",
            avgQuantity: { $avg: "$idade" }
          }
      }
    ]
))

//Retorna os campeonatos que tem o array de time igual ao array passado na
//funcao com o metodo where
console.log(db.campeonato.find({$where: function() { return this.nome == [
    db.time.findOne({nome: "Godsent"})._id,
    db.time.findOne({nome: "Furia"})._id,
    db.time.findOne({nome: "Team Liquid"})._id
] }}));

//
console.log(db.time.aggregate( [
    { $addFields:
         {
          message:
             { $function:
                 {
                     body: function(nome, vitorias) {
                         let total = Array.sum(vitorias);
                         return `o time ${nome}tem um total de vitorias de: ${total}.`
                     },
                     args: [ "$nome", "$vitorias"],
                     lang: "js"
                 }
             }
         }
     }
 ]));
 
//map reduce esta como depracatedclea
//save() tbm
var mapFunction1 = function() {
    emit(this.funcao, this.idade);
};
var reduceFunction1 = function(keyfuncao, idades) {
    return Array.sum(idades);
};
db.jogador.mapReduce(
    mapFunction1,
    reduceFunction1,
    { out: "map_reduce_example" }
)