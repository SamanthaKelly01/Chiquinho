const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnotaçãoSchema = new Schema({
    título : String,
    conteúdo: String,
    id_usuário: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios'
    },
    id_matéria: {
        type: Schema.Types.ObjectId,
        ref: 'matérias'
    },
})

const AnotaçãoModel = mongoose.model('anotações', AnotaçãoSchema);

module.exports = AnotaçãoModel;