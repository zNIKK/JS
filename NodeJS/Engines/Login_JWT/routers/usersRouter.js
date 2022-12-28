const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', (req, res) => {
    // req.session.usuario = { nome: "Nicolas", logado: true };
    console.log(req.session.usuario);
    res.send('Hello World')
})
router.post("/register", userController.register)
router.post("/login", userController.login)

module.exports = router