const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()


const linkRoute = require('./routes/linkRoute')

// mongoose.model() = Cria um modelo de documento contento as informações reais passando com segundo parametro o esquema de link

// const Link = require('./models/Link')

// let link = new Link({
//     title: "twitter",
//     description: "Link para o twitter",
//     url: "https://twitter.com/progrbr",
// })

// link.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log(err);
// })

// save() = Salva as informações do documento

mongoose.connect(process.env.MONGO_SERVER, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('db pronta')
    }).catch(e => console.log(e));

// let db = mongoose.connection;

// db.on("error", () => { console.log("Houve um erro") });
// db.once("open", () => {
//     console.log("Banco Carregado")
// })


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "templates"))

// mongoose.connect('mongodb://localhost/links').then(db=>{
//     console.log(db);
// }).catch(err=>{
//     console.log(err);
// })

// mongoose.connect('mongodb://localhost/links', (db, err) =>{
//     console.log(db);
//     console.log(err);
// })

app.use('/', linkRoute)
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));