exports.middlewares = (req, res, next) => {
    res.locals.umaVariavelLocal = "Este é o valor da variável local."
    console.log(req.body);
    if(req.body.nome) {
        req.body.nome = req.body.nome.replace('nicolas', 'NÃO USE NICOLAS')
    }
    console.log("passei no middlewares global");
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('BAD CSRF')
    }
};

// CSRF é um dos ataques mais conhecidos, existe desde a “fundação” da Web. Ele ocorre quando uma requisição HTTP é feita entre sites na tentativa de se passar por um usuário legítimo. Quem se utiliza desse tipo de ataque normalmente foca em fazê-lo esperando que usuário alvo esteja autenticado no site onde a requisição fraudulenta será realizada, a fim de se ter mais privilégios e acessos à operações. E a razão de todo o problema está em como os navegadores lidam com os Cookies.

// esse pacote bloqueia impossibilita esse tipo de ataque por que ele cria um novo token na hora que é logado
exports.csrfMiddleware = (req, res, next) =>{
    res.locals.csrf = req.csrfToken();
    next();
}

