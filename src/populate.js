const {MongoClient} = require('mongodb');


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    const uri = "mongodb+srv://projetomongo:123321@cluster0.yyvzu.mongodb.net/joguitos?retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        await client.connect();

        await client.db("joguitos").dropDatabase();

        
        await client.db("joguitos").collection("jogador").insertMany([{
            nome: "Art",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "1"
        },
        {
            nome: "Yuri",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "2"
        },
        {
            nome: "Vini",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "3"
        },
        {
            nome: "Kacerato",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "4"
        },
        {
            nome: "Honda",
            pais: "Brasil",
            funcao: "rifler",
            idade:17,
            CPF: "5"
        },
        {
            nome: "Stewie",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "6"
        },
        {
            nome: "Fallen",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "7"
        },
        {
            nome: "Naf",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "8"
        },
        {
            nome: "Grim",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "9"
        },
        {
            nome: "Elige",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "10"
        },
        {
            nome: "kNgV-",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "11"
        },
        {
            nome: "HEN1",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "12"
        },
        {
            nome: "LUCAS1",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "13"
        },
        {
            nome: "vsm",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "14"
        },
        {
            nome: "trk",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "15"
        },
        {
            nome: "leo_drk",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "16"
        },
        {
            nome: "TACO",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "17"
        },
        {
            nome: "felps",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "18"
        },
        {
            nome: "latto",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "19"
        },
        {
            nome: "bartin",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "20"
        },
        {
            nome: "dumau",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "21"
        },
        {
            nome: "anna",
            pais: "Brasil",
            funcao: "igl",
            idade:24,
            CPF: "22"
        },
        {
            nome: "pan",
            pais: "Brasil",
            funcao: "awp",
            idade:22,
            CPF: "23"
        },
        {
            nome: "cAmyy",
            pais: "Brasil",
            funcao: "lurker",
            idade:17,
            CPF: "24"
        },
        {
            nome: "izaa",
            pais: "Brasil",
            funcao: "suporte",
            idade:18,
            CPF: "25"
        },
        {
            nome: "gabi",
            pais: "Brasil",
            funcao: "rifler",
            idade:22,
            CPF: "26"
        },
        {
            nome: "elaine",
            pais: "Brasil",
            funcao: "rifler",
            idade:22,
            CPF: "27"
        },
        {
            nome: "rebeca",
            pais: "Brasil",
            funcao: "rifler",
            idade:22,
            CPF: "28"
        },
        {
            nome: "lethy",
            pais: "Brasil",
            funcao: "rifler",
            idade:22,
            CPF: "29"
        },
        {
            nome: "naty",
            pais: "Brasil",
            funcao: "rifler",
            idade:22,
            CPF: "30"
        },
        {
            nome: "bizinha",
            pais: "Brasil",
            funcao: "rifler",
            idade:22,
            CPF: "30"
        }


        ]);

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "Furia",
                pais: "Brasil",
                participacoes: 10,
                vitorias: 5,
                jogadores: [
                    await client.db("joguitos").collection("jogador").find({nome: "Art"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Yuri"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Vini"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Kacerato"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Honda"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    )
                ]
            }
        );

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "Godsent",
                pais: "Suecia",
                participacoes: 12,
                vitorias: 3,
                jogadores: [
                    await client.db("joguitos").collection("jogador").find({nome: "TACO"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "felps"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "latto"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "bartin"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "dumau"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    )
                ]
            }
        );

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "Pain Gaming",
                pais: "Brasil",
                participacoes: 6,
                vitorias: 2,
                jogadores: [
                    await client.db("joguitos").collection("jogador").find({nome: "cAmyy"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "izaa"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "pan"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "anna"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "bizinha"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    )
                ]
            }
        );

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "O Plano",
                pais: "Brasil",
                participacoes: 7,
                vitorias: 5,
                jogadores: [
                    await client.db("joguitos").collection("jogador").find({nome: "vsm"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "leo_drk"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "kNgV-"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "trk"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "LUCAS1"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "HEN1"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    )
                ]
            }
        );

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "Team Liquid",
                pais: "usa",
                participacoes: 17,
                vitorias: 7,
                jogadores: [
                    await client.db("joguitos").collection("jogador").find({nome: "Fallen"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Elige"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Stewie"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Grim"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "Naf"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    )
                ]
            }
        );

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "Rainhas da bala",
                pais: "Brasil",
                participacoes: 17,
                vitorias: 7,
                jogadores: [
                    await client.db("joguitos").collection("jogador").find({nome: "gabi"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "rebeca"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "lethy"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "naty"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    ),
                    await client.db("joguitos").collection("jogador").find({nome: "elaine"}).toArray()
                    .then(items => {
                    return items[0]._id}
                    )
                ]
            }
        );

        await client.db("joguitos").collection("campeonato").insertOne(
            {
                Nome: "teste",
                dt_inicio: Date.now(),
                dt_termino: Date.now(),
                times: [
                    await client.db("joguitos").collection("time").find({nome: "Team Liquid"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Furia"}).toArray()
                    .then(items => {
                    return items[0]._id})
                ]
            }
        );

        await client.db("joguitos").collection("campeonato").insertOne(
            {
                Nome: "MAJOR 2021",
                dt_inicio: (Date.now() - 259200000),
                dt_termino: Date.now(),
                times: [
                    await client.db("joguitos").collection("time").find({nome: "Godsent"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "O Plano"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Furia"}).toArray()
                    .then(items => {
                    return items[0]._id})
                ]
            }
        );

        await client.db("joguitos").collection("campeonato").insertOne(
            {
                Nome: "Campeonato TPM",
                dt_inicio: (Date.now() - 172800000),
                dt_termino: Date.now(),
                times: [
                    await client.db("joguitos").collection("time").find({nome: "Team Liquid"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Furia"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "O Plano"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Godsent"}).toArray()
                    .then(items => {
                    return items[0]._id})
                ]
            }
        );

        await client.db("joguitos").collection("campeonato").insertOne(
            {
                Nome: "teste",
                dt_inicio: (Date.now() - 86400000),
                dt_termino: Date.now(),
                times: [
                    await client.db("joguitos").collection("time").find({nome: "Godsent"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Furia"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Team Liquid"}).toArray()
                    .then(items => {
                    return items[0]._id})
                ]
            }
        );

        await client.db("joguitos").collection("campeonato").insertOne(
            {
                Nome: "Campeonato Brasileiro CSGO 2019",
                dt_inicio: (Date.now() - 86400000),
                dt_termino: Date.now(),
                times: [
                    await client.db("joguitos").collection("time").find({nome: "Pain Gaming"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Furia"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "O Plano"}).toArray()
                    .then(items => {
                    return items[0]._id})
                ]
            }
        );

        await client.db("joguitos").collection("campeonato").insertOne(
            {
                Nome: "Campeonato Brasileiro Feminino 2020",
                dt_inicio: (Date.now() - 86400000),
                dt_termino: Date.now(),
                times: [
                    await client.db("joguitos").collection("time").find({nome: "Pain Gaming"}).toArray()
                    .then(items => {
                    return items[0]._id}),
                    await client.db("joguitos").collection("time").find({nome: "Rainhas da bala"}).toArray()
                    .then(items => {
                    return items[0]._id})
                ]
            }
        );
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);
