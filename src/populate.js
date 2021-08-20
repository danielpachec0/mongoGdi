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
            funcao: "awp",
            idade:22,
            CPF: "1"
        },
        {
            nome: "Yuri",
            funcao: "awp",
            idade:22,
            CPF: "2"
        },
        {
            nome: "Vini",
            funcao: "awp",
            idade:22,
            CPF: "3"
        },
        {
            nome: "Kacerato",
            funcao: "awp",
            idade:22,
            CPF: "4"
        },
        {
            nome: "Honda",
            funcao: "rifler",
            idade:17,
            CPF: "5"
        },
        {
            nome: "Stewie",
            funcao: "awp",
            idade:22,
            CPF: "6"
        },
        {
            nome: "Fallen",
            funcao: "awp",
            idade:22,
            CPF: "7"
        },
        {
            nome: "Naf",
            funcao: "awp",
            idade:22,
            CPF: "8"
        },
        {
            nome: "Grim",
            funcao: "awp",
            idade:22,
            CPF: "9"
        },
        {
            nome: "Elige",
            funcao: "awp",
            idade:22,
            CPF: "10"
        },
        {
            nome: "kNgV-",
            funcao: "awp",
            idade:22,
            CPF: "11"
        },
        {
            nome: "HEN1",
            funcao: "awp",
            idade:22,
            CPF: "12"
        },
        {
            nome: "LUCAS1",
            funcao: "awp",
            idade:22,
            CPF: "13"
        },
        {
            nome: "vsm",
            funcao: "awp",
            idade:22,
            CPF: "14"
        },
        {
            nome: "trk",
            funcao: "awp",
            idade:22,
            CPF: "15"
        },
        {
            nome: "leo_drk",
            funcao: "awp",
            idade:22,
            CPF: "16"
        },
        {
            nome: "TACO",
            funcao: "awp",
            idade:22,
            CPF: "17"
        },
        {
            nome: "felps",
            funcao: "awp",
            idade:22,
            CPF: "18"
        },
        {
            nome: "latto",
            funcao: "awp",
            idade:22,
            CPF: "19"
        },
        {
            nome: "bartin",
            funcao: "awp",
            idade:22,
            CPF: "20"
        },
        {
            nome: "dumau",
            funcao: "awp",
            idade:22,
            CPF: "21"
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
                nome: "O Plano",
                pais: "Brasil",
                participacoes: 120,
                vitorias: 120,
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
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);
