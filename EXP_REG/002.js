
const {texto} = require('./base')
const regExp1 = /(joão|maria)/gi;
// (... ())(...)(...) = $1 $2...
// console.log(texto.match(regExp1))

//substituir todas as ocorrencias
console.log(texto.replace(regExp1, function (input) {
    return '******** ' + input.toUpperCase() + ' ********';
}))

// console.log(texto)