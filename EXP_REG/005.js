
const {alfabeto} = require('./base');

// [abc] - Conjunto
// [min-max] - range
// [^] - Negação - [^abc] tudo menos "abc"

console.log(alfabeto)
// console.log(alfabeto.match(/[0-9]+/g))
// console.log(alfabeto.match(/[a-k]+/g))
// console.log(alfabeto.match(/[A-Z]+/g))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g))
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)) // UNICODE
console.log(alfabeto.match(/\w+/g)) // Atalho [a-zA-Z0-9]
console.log(alfabeto.match(/\W+/g)) // Atalho [^a-zA-Z0-9]
console.log(alfabeto.match(/\d+/g)) // Atalho [0-9]
console.log(alfabeto.match(/\D+/g)) // Atalho [^0-9]
console.log(alfabeto.match(/\s+/g)) // encontrar os espaços
console.log(alfabeto.match(/\S+/g)) // encontrar tudo menos os espaços

