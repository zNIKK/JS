exports.paginaPost = (req, res) => {
    res.send(`
        <form action="/aluno/add" method="post">
            Nome: <input type="text" name="nome">
            <button type="submit">Enviar</button>
        </form>
    `)}