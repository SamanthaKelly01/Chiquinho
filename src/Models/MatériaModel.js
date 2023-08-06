const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MatériaSchema = new Schema({
    título : {
        type: String,
        unique: true,
    },
})

const MatériaModel = mongoose.model('matérias', MatériaSchema);

module.exports = MatériaModel;