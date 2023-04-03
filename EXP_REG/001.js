// g - global (encontra todas as ocorrências)
// i - insensitive (ignora as maiúsculas e minúsculas)
// () - criar grupos
// | - ou
const {texto} = require('./base')
const regExp1 = /(maria|joão|luiz )(5 filhos)/i;
const found = regExp1.exec(texto)

if (found) {
    console.log(found[0])
    console.log(found[1])
    console.log(found[2])
}