const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nome : {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    senha : String
})

const UsuarioModel = mongoose.model('usuarios', UsuarioSchema);

module.exports = UsuarioModel;