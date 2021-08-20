const {MongoClient} = require('mongodb');


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
    const uri = "mongodb+srv://projetomongo:123321@cluster0.yyvzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        await client.connect();

        await client.db("joguitos").dropDatabase();

        
        await client.db("joguitos").collection("jogador").insertMany([{
            nome: "Art",
            CPF: "1"
        },
        {
            nome: "Yuri",
            CPF: "2"
        },
        {
            nome: "Vini",
            CPF: "3"
        },
        {
            nome: "Kacerato",
            CPF: "4"
        },
        {
            nome: "Honda",
            CPF: "5"
        },
        {
            nome: "Stewie",
            CPF: "6"
        },
        {
            nome: "Fallen",
            CPF: "7"
        },
        {
            nome: "Naf",
            CPF: "8"
        },
        {
            nome: "Grim",
            CPF: "9"
        },
        {
            nome: "Elige",
            CPF: "10"
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
        )
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);
