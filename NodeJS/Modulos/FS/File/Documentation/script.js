let fs = require("fs");

// fs.writeFile(arquivo, texto, function(erro)) - criar e escrever
// fs.appendFile(arquivo, texto, function(erro)) - adicionar mais texto
// fs.unlink(arquivo, function(erro)) - deletar
// fs.rename(arquivo, arquivo.txt, function(erro)) - renomear
// fs.readFile(arquivo, UTF8, function(erro, data)) - ler

fs.writeFile("teste.txt", "Hello World", (err)=>{
    if (err) { throw err };
        console.log("Arquivo criado com sucesso");
})

