const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const aluno = require("./routes/alunos");
const path = require('path')
// app.use => para usar o caminho /aluno como principal para usar as todas as funções das rotas
app.use("/aluno", aluno);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.send("Hello World -- vá para http:/localhost:3000/alunos/add")
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})