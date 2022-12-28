const mongoose = require('mongoose');

const Schema = new moogoose.Schema({
    id: {type: Number, req},
    nome: { type: String, required: true },
    descricao: String
});

const Model = mongoose.model('Model', Schema);

module.exports = Model;

