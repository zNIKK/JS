const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")

const app = express();

let consoleBody = (req, res, next)=>{
    console.log(req.body);
    next();
}

let hello = (req,res)=>{
    res.send("Hello World");
}
app.use("/meusite",express.static(path.join(__dirname, 'client')))

app.get("/", (req,res)=>{
    // res.set("Content-type", "text/html")

    // ----------------------
    // res.type('.html') => 'text/html'
    // res.type('html') => 'text/html'
    // res.type('txt') => 'text/plain'
    // res.type('json') => 'application/json'
    // res.type('application/json') => 'application/json'
    // res.type('png') => 'image/png'
    // -----------------------


    res.type("html");
    res.send("<h1>Hello World From GET</h1>")
})

app.use("/", bodyParser.json())
app.use("/", consoleBody)
app.post("/", hello)

app.put("/", hello)

app.delete("/", hello)

// Arquivos estaticos eu posso alterar sem reiniciar o server 
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})