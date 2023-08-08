const mongoose = require("mongoose");

async function startDB(){
    try {
        await mongoose.connect('mongodb+srv://Sam:pamonha123@chiquinho.thwidoo.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conexão com o banco de dados estabelecida.");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
}

module.exports = startDB;

//pamonha123