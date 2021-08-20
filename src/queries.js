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
        
        await  listDatabases(client);
        
        let x = await client.db("joguitos").collection("jogador").find().toArray()
        .then(items => {
          console.log(`Successfully found ${items.length} documents.`)
          console.log(items)
          return items
        })
        .catch(err => console.error(`Failed to find documents: ${err}`))
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

main().catch(console.error);
