// const { Timestamp } = require("mongodb");



// console.log(db.jogador.find());
// console.log(db.time.findOne({pais: "Brasil"}));
// console.log(db.jogador.find({nome: "Art"}).pretty());
// console.log(db.time.count());
// db.campeonato.updateOne({nome: "teste"},{$set:{"nome": "IEM"}})
// console.log(db.time.find());
// console.log(db.time.find().sort({vitorias: -1}));
// db.jogador.renameCollection("proplayer");
// save() --> deprecated
// console.log(db.time.aggregate({$match:{pais: "Brasil"}}, {$max: "vitorias"}));
// var startDate = new Date("Tue Aug 20 2021 15:26:12 GMT-0300 (Brasilia Standard Time)").getTime();
// console.log(db.campeonato.aggregate([
//     {
//         $match: {
//             dt_inicio: {$lt: startDate}
//         },
//     }
// ]));


// console.log(db.time.aggregate([
//     {
//         $group: {
//             _id: "$pais",

//             total_titulos: {
//                 $sum: "$vitorias"
//             }
//         }
//     }
// ]))

// console.log(
//     db.jogador.find(
//         {
//             idade: {$gte: 18}
//         }
//     )
// )

// console.log(db.jogador.aggregate([
//     {
//     $lookup: {
//         from: "time",
//         localField: "pais",
//         foreignField: "pais",
//         as: "Times do mesmo pais"
//     }
//   },
//   {$limit: 5}
// ]));

// db.campeonato.updateMany({Nome: "teste"},{$addToSet: 
//     {
//         times:
//         {
//             $each:
//             [
//                 db.time.findOne({nome: "Furia"})._id,
//                 db.time.findOne({nome: "Godsent"})._id,
//                 db.time.findOne({nome: "Pain Gaming"})._id,
//                 db.time.findOne({nome: "O Plano"})._id,
//                 db.time.findOne({nome: "Team Liquid"})._id,
//                 db.time.findOne({nome: "Rainhas da bala"})._id,
//             ]
//         }
//     }
// })

// console.log(db.time.findOne({nome: "Pain Gaming"}))
// console.log(db.time.findOne({nome: "Pain Gaming"}, {jogadores: 0, _id: 0}))

// console.log(db.time.aggregate(
//     [
//        {
//           $project:
//             {
//                 _id: 0,
//                 nome: 1,
//                 vitorias:
//                 {
//                   $cond: { if: { $gte: [ "$vitorias", 5 ] }, then: "Top Tier", else: "F" }
//                 }
//             }
//        }
//     ]
//  ));

// console.log(db.campeonato.find({times: {$all: [
//     db.time.findOne({nome: "Furia"})._id,
//     db.time.findOne({nome: "Godsent"})._id,
//     db.time.findOne({nome: "Pain Gaming"})._id,
//     db.time.findOne({nome: "O Plano"})._id,
//     db.time.findOne({nome: "Team Liquid"})._id,
//     db.time.findOne({nome: "Rainhas da bala"})._id,
// ]}}))

// db.time.aggregate( [
//    { $addFields:
//         {
//          message:
//             { $function:
//                 {
//                     body: function(nome, vitorias) {
//                         let total = Array.sum(vitorias);
//                         return `Hello ${nome}.  Your total score is ${total}.`
//                     },
//                     args: [ "$nome", "$vitorias"],
//                     lang: "js"
//                 }
//             }
//         }
//     }
// ])

// console.log(db.campeonato.aggregate([
//     {
//        $project: {
//            _id: 0,
//            Nome: 1,
//           juizes: {
//              $filter: {
//                 input: "$juizes",
//                 as: "juiz",
//                 cond: { $gte: [ "$$juiz.idade", 40] }
//             }
//           }
//        }
//     }
//  ]));

// db.campeonato.createIndex( { Nome:"text"} )
// console.log(db.campeonato.find( { $text: { $search: "\"Brasileiro\"" } } ));

//campeonatos com 4 jogadores
console.log(db.campeonato.find({times:{$size: 4}}));
//times com 1 jogador reserva
console.log(db.time.find({jogadores:{$size: 6}}));