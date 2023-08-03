const mongoose = require("mongoose");

async function startDB(){
    try {
        await mongoose.connect('mongodb+srv://sam:JgbIJ67X2ABQKk2q@sistemawebchiquinho.ygnrb9j.mongodb.net/');
        console.log("Conexão com o banco de dados estabelecida.");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
}

module.exports = startDB;

