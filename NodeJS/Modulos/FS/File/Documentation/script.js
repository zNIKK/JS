const fs = require("fs");
const path = require("path");

// fs.promises.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.promises.readdir(rootDir)
    walk(files)
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.promises.stat(fileFullPath);
        if (stats.isDirectory()) {
            readdir()
            continue;
        }
        console.log(file, stats.isDirectory());
    }
}

readdir('c:/Users/gando/Nicolas/JS/NodeJS/Modulos')
// fs.writeFile(arquivo, texto, function(erro)) - criar e escrever
// fs.appendFile(arquivo, texto, function(erro)) - adicionar mais texto
// fs.unlink(arquivo, function(erro)) - deletar
// fs.rename(arquivo, arquivo.txt, function(erro)) - renomear
// fs.readFile(arquivo, UTF8, function(erro, data)) - ler

// fs.writeFile("teste.txt", "Hello World", (err) => {
//     if (err) { throw err };
//     console.log("Arquivo criado com sucesso")
// })

