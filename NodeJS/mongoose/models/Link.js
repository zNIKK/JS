const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: {type: String, required: true}, // required = campo obrigatório
    description: String,
    url: String,
    click: {type: Number, default: 0} // default = valor padrão
})
// mongoose.Schema = Cria um esquema de documento contendo informações principais


module.exports = mongoose.model('Link', linkSchema)