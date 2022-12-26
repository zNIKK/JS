const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const aluno = require("./routes/alunos");
const addAluno = require('./controllers/controller');

// app.use => para usar o caminho /aluno como principal para usar as todas as funções das rotas
app.use("/aluno", aluno);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World -- vá para http:/localhost:3000/")
})

app.get('/aluno/add', addAluno.paginaPost)

app.post('/aluno/add', aluno)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})