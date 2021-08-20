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
            nome: "daniel",
            CPF: "1"
        },
        {
            nome: "daniel",
            CPF: "2"
        }]);

        await client.db("joguitos").collection("time").insertOne(
            {
                nome: "Furia",
                jogadores: ["pegar os ids"]
            }
        );
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);
