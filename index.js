const mongostring = "mongodb+srv://guwnomajster:1234@cluster0.kqlzt4t.mongodb.net/?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');
const client = new MongoClient(mongostring);
async function main(){
    await client.connect();
    await client.close();
}
main();