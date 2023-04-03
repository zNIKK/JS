const {cpfs2} = require('./base');

// ^ - começa com
// $ - termina com
// m - multiline (exatamente a expressão)

const cpf = '254.224.877-45';
const cpfRegExp = /^(\d)Z{3}\.){2}\d{3}\-\d{2}$/gm
console.log(cpfs2)
console.log(cpfs2.match(cpfRegExp))