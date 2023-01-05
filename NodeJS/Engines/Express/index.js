const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")

const app = express();



// express.static => define um arquivo estático
app.use("/meusite", express.static(path.join(__dirname, 'client')))

app.use("/", bodyParser.json())

// app.use => é usada para montar a função de middleware especificada (são as funções que têm acesso ao objeto de solicitação e ao objeto de resposta, ou podemos chamá-lo de ciclo de solicitação de resposta) em o caminho que está sendo especificado.
app.use("/", (req, res, next) => {
    console.log(req.body);
    // sem o next() o app.use não executará a rotas subsequentes
    next()
});

// app.get => define a rota "/" como um request de GET = READ
app.get("/", (req, res) => {

    /*

    res.type -> define qual o tipo de midia de middleware que irá analisar
        res.type('.html') => 'text/html'
        res.type('html') => 'text/html'
        res.type('txt') => 'text/plain'
        res.type('json') => 'application/json'
        res.type('application/json') => 'application/json'
        res.type('png') => 'image/png'
    */
    res.type("html");
    // res.set("Content-type", "text/html")

    // res.send => manda como resposta para o "http:/localhost:PORT/"
    res.send("<h1>Hello World From GET</h1>")
})

const hello = (req, res) => {
    res.send("Hello World");
}
// app.post => define a rota "/" como um request de POST = CREATE
app.post("/post", hello)

// app.put => define a rota "/" como um request de PUT = UPDATE
app.put("/put", hello)
// app.delete => define a rota "/" como um request de DELETE = DELETE
app.delete("/delete", hello)


// app.listen => inicia o server na porta 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
});


// Arquivos estaticos eu posso alterar sem reiniciar o server