module.exports = (req, res, next) => {
    
    console.log(req.body);
    if(req.body.nome) {
        req.body.nome = req.body.nome.replace('nicolas', 'NÃO USE NICOLAS')
    }
    console.log("passei no middlewares global");
    next();
}