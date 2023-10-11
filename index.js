const mongostring = "mongodb+srv://guwnomajster:1234@cluster0.kqlzt4t.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');
const client = new MongoClient(mongostring);
async function main() {
    try { 
        await client.connect()
        await listDB(client)
    } catch (error) {
        console.error(error)
    } finally {


        await client.close()
    }
}
async function listDB(client) {
    let databaselist = await client.db().admin().listDatabases()
   // console.log(databaselist)
   databaselist.databases.forEach(database => {
    console.log("nazwa: "+ database.name + ", Rozmiar" + database.sizeOnDisk)
    
   });
}
main();
