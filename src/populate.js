const {MongoClient} = require('mongodb');


async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function createJogador(client, newJogador){
    const result = await client.db("joguitos").collection("jogador").insertOne(newListing);
    console.log(`New listing created with the following id: ${result.insertedId}`);
}


async function main(){
    const uri = "mongodb+srv://projetomongo:123321@cluster0.yyvzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
 
    const client = new MongoClient(uri);
 
    try {
        await client.connect();
 
        
        await client.db("joguitos").collection("jogador").insertMany([{
            nome: "daniel",
            CPF: "1"
        },
        {
            nome: "daniel",
            CPF: "2"
        }]);
        

        await  listDatabases(client);
        
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);
