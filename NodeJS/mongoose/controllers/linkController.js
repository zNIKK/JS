const Link = require('../models/Link')


const redirect = async (req, res) => {
    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title })
        // .find({}) = fazer uma busca do elemento title no banco de dados e irá achar e colocar todos os objetos que forem iguais dentro de uma array
        // .findOne({}) = a mesma coisa só que ele irá achar o primeiro objeto

        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send(error)
    }
}

module.exports = { redirect }