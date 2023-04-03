const {lookahead} = require('./base');


console.log(lookahead)

// console.log(lookahead.match(/.+[^in]active/gim))
// /m - usada geralmente em textos com padrões

// ?= - positive lookahead (retorna frases que tem active)
// console.log(lookahead.match(/.+(?=\s[^in]active)/gim))

// ?! - Negative Lookahead (retorna frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))

//positive lookbehind (retorna Frases que começam com ONLINE)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim))

// Negative lookbehind (retorna Frases que NÃO começam com ONLINE)
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))

const cpf = `
012.250.796-10
111.111.111-11
147.285.963-10
`

// elimina cpfs aonde são sequências repetidas de números
console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));