const model = require('../models/model');


const alunos =
    [
        { id: 0, nome: "José" },
        { id: 1, nome: "maria" },
        { id: 2, nome: "João" },
        { id: 3, nome: "Marcos" }
    ];

model.create(alunos);

exports.paginaPost = (req, res) => {
    // req.flash('info', 'Olá mundo!')
    // req.flash('error', '234dasfaqe')
    // req.flash('success', 'Blaaaaaaaaaaaaa')
    console.log(req.flash('info'));
    console.log(req.flash('error'));
    console.log(req.flash('success'));
    // flash = monstra a mensagem uma vez para o usuario depois de mostrada some
    // req.session.usuario = { nome: "Nicolas", logado: true } // isso irá ficar gravado por 7 dias, mesmo apagando vai continuar
    console.log(req.session.usuario);

    res.render('index', {
        titulo: 'Este é o titulo no ejs <br>'
    })
}
exports.adcionarAluno = (req, res) => {
    const id = alunos.length;
    alunos.push({ id, nome: req.body.nome });
    console.log();


    res.json(JSON.stringify(alunos))
}

exports.aluno = (req, res, next) => {
    console.log(req.body);
    let aluno = alunos[req.body.id];
    if (aluno) {
        res.json(aluno);
    } else {
        next();
    }
}


exports.paginaPrincipal = (req, res, next) => {

    console.log(req.query.id);
    let aluno = alunos[req.query.id];
    if (aluno) {
        res.json(aluno);
    } else {
        res.send("Aluno não encontrado")
    }
}

exports.todosAlunos = (req, res) => {
    res.json(JSON.stringify(alunos))
}


// parametros localhost:3000/1 => parametros colocados no site para especificar um id

// ? => parametro pode ou não ser recebido
exports.procurarPeloId = (req, res, next) => {
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
}