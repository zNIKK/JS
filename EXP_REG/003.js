
const {texto, arquivos} = require('./base');

// + (obrigatório) 1 a n 
// * (opcionais) 0 a n {0, }
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape

// {n,m} mínimo e máximo
// {10,} no mínimo
// {,10} de 0 a 10
// {5,10} de 5 a 10

// console.log(texto)

// const regExp1 = /(jo+ão|maria)/gi;

// console.log(texto.match(regExp1))

const regExp2 = /\.jpe?g/gi
for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);

    if(!valido) continue;
    console.log(arquivo, arquivo.match(regExp2))
}
