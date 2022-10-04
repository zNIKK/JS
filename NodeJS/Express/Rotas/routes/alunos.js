const express = require('express');

let router = express.router();

let alunos = 
[{ id: 0, nome: "José" },
{ id: 1, nome: "maria" },
{ id: 2, nome: "João" },
{ id: 3, nome: "Marcos" }]

router.get("/alunos", (req,res)=>{


    res.json(JSON.stringify(alunos))
})

router.get("/aluno", (req, res, next)=>{
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
})

router.get("/", (req,res, next)=>{
    console.log(req.query.id);
    let aluno = alunos[req.query.id];
    if (aluno){
        res.json(aluno);
    } else {
        res.send("Aluno não encontrado")
    }
})

router.get("/all", (req, res)=> {
    res.json(JSON.stringify(alunos))
})

router.get("/:id", (req,res)=>{
    console.log(req.params.id);
    let aluno = alunos[req.params.id];
    if (aluno){
        res.json(aluno);
    } else {
        next()
    }
})

module.exports = router;