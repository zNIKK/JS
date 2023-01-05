const fs = require("fs");
const path = require("path");

// fs.promises.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

// fs.writeFile(arquivo, texto, function(erro)) - criar e escrever
// fs.appendFile(arquivo, texto, function(erro)) - adicionar mais texto
// fs.unlink(arquivo, function(erro)) - deletar
// fs.rename(arquivo, arquivo.txt, function(erro)) - renomear
// fs.readFile(arquivo, UTF8, function(erro, data)) - ler

fs.writeFile(path.resolve(__dirname) + "/readme.txt", "Hello World", (err) => {
    if (err) { throw err };
})


