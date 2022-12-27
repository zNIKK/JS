const express = require('express');
const bodyParser = require("body-parser")
const controller = require('../src/controllers/controller');
let router = express.Router();


router.get("/alunos", controller.alunos)

router.get("/aluno", controller.aluno)

router.get("/", controller.paginaPrincipal)

// mostra objeto todo
router.get("/all", controller.todosAlunos)

router.get("/:id?", controller.procurarPeloId)

router.get('/add', controller.paginaPost)

router.post('/add', bodyParser.urlencoded({ extended: true }), controller.adcionarAluno)

module.exports = router;