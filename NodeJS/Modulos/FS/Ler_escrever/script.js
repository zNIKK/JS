const fs = require('fs').promises
const path = require('path')
const caminhoArquivo = path.resolve(__dirname, "teste.txt");
const caminhoArquivoJson = path.resolve(__dirname, "teste.json");

const pessoas = [
    { nome: 'João' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luiza' },
];

const json = JSON.stringify(pessoas, '', 2)

// fs.writeFile(caminhoArquivo, "Frase 1 \n", { flag: 'a', encoding: 'utf8' })
fs.writeFile(caminhoArquivoJson, json, { flag: 'w', encoding: 'utf8' })

// flag: w => apaga tudo que está no arquivo e reescreve denovo
// flag: a => escreve do lado do arquivo
