const { json } = require('body-parser');
const express = require('express');
let router = express.Router();

let alunos =
    [
        { id: 0, nome: "José" },
        { id: 1, nome: "maria" },
        { id: 2, nome: "João" },
        { id: 3, nome: "Marcos" }
    ]

router.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})

router.get("/aluno", (req, res, next) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
})

router.get("/", (req, res, next) => {
    console.log(req.query.id);
    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno);
    } else {
        res.send("Aluno não encontrado")
    }
})

// mostra objeto todo
router.get("/all", (req, res) => {
    res.json(JSON.stringify(alunos))
})

// parametros localhost:3000/1 => parametros colocados no site para especificar quantidade ou um id especifico

// ? => parametro pode ou não ser recebido
router.get("/:id?", (req, res, next) => {
    console.log(req.params.id);

    // query localhost:3000/?nome=Luiz&sobrenome=Miranda&idade=30 => parametro que retornará um objeto
    console.log(req.query);
    // { nome: 'luiz', sobrenome: 'Miranda', idade='30'}
    console.log(req.query.sobrenome);
    // { sobrenome: 'Miranda' }

    let aluno = alunos[req.params.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next()
    }
})


router.post('/aluno/add', (req, res) => {
    const id = alunos.length

    alunos.push({ id, nome: req.body.nome });
    console.log(alunos);
    res.send(JSON.stringify(alunos))
})

module.exports = router;