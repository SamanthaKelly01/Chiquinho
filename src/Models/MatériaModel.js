const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MatériaSchema = new Schema({
    título : String
})

const MatériaModel = mongoose.model('matérias', MatériaSchema);

module.exports = MatériaModel;