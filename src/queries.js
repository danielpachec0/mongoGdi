// // const { Timestamp } = require("mongodb");


// // console.log(db.jogador.find());
// // console.log(db.time.findOne({pais: "Brasil"}));
// // console.log(db.jogador.find({nome: "Art"}).pretty());
// // console.log(db.time.count());
// // db.campeonato.updateOne({nome: "teste"},{$set:{"nome": "IEM"}})
// // console.log(db.time.find());
// // console.log(db.time.find().sort({vitorias: -1}));
// // db.jogador.renameCollection("proplayer");
// // save() --> deprecated
// // console.log(db.time.aggregate({$match:{pais: "Brasil"}}, {$max: "vitorias"}));
// // var startDate = new Date("Tue Aug 20 2021 15:26:12 GMT-0300 (Brasilia Standard Time)").getTime();
// // console.log(db.campeonato.aggregate([
// //     {
// //         $match: {
// //             dt_inicio: {$lt: startDate}
// //         },
// //     }
// // ]));


// // console.log(db.time.aggregate([
// //     {
// //         $group: {
// //             _id: "$pais",

// //             total_titulos: {
// //                 $sum: "$vitorias"
// //             }
// //         }
// //     }
// // ]))

// // console.log(
// //     db.jogador.find(
// //         {
// //             idade: {$gte: 18}
// //         }
// //     )
// // )

// // console.log(db.jogador.aggregate([
// //     {
// //     $lookup: {
// //         from: "time",
// //         localField: "pais",
// //         foreignField: "pais",
// //         as: "Times do mesmo pais"
// //     }
// //   }
// // ]));


// db.campeonato.updateMany({Nome: "teste"},{$addToSet: 
//     {
//         times:
//         {
//             $each:
//             [
//                 db.time.findOne({nome: "Rainhas da bala"})._id, 
//                 db.time.findOne({nome: "Pain Gaming"})._id
//             ]
//         }
//     }
// })

// console.log(db.time.findOne({nome: "Pain Gaming"})._id)

db.campeonato.createIndex( { Nome:"text"} )

console.log(db.campeonato.find( { $text: { $search: "\"Brasileiro\"" } } ));