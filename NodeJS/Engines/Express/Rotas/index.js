const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const aluno = require("./routes/aluno");

app.use("/aluno", aluno);

app.use(bodyParser.urlencoded());

app.get("/", (req,res)=>{
    res.send("Hello World")
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`);
})