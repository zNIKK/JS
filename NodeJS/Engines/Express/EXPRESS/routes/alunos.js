const express = require('express');
const controller = require('../src/controllers/controller');
let route = express.Router(); 



route.get("/aluno", controller.aluno)

route.get("/", controller.paginaPrincipal)

// mostra objeto todo
route.get("/all", controller.todosAlunos)

route.get("/:id?", controller.procurarPeloId)

route.get('/add', controller.paginaPost)

route.post('/add', controller.adcionarAluno)

module.exports = route;