const mongoose = require("mongoose");

async function startDB(){
    try {
        await mongoose.connect('mongodb+srv://Sam:bHX4URbciULINGL2@cluster0.rmpwuqd.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conexão com o banco de dados estabelecida.");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
}

module.exports = startDB;


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Sam:bHX4URbciULINGL2@cluster0.rmpwuqd.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
