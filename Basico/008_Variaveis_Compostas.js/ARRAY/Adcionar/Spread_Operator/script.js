var pessoa = {
    name: "José Silva",
    idade: 32,
}

var contato = {
    telefone: 8765432,
    email:   "jose@gmai.com"
}

var copia = {...pessoa, cidade: "Rio de Janeiro", ...contato}

copia.idade = 88 

console.log(pessoa);
console.log(copia);


var aluno = {
    matricula: 1234,
    nome: "marcos",
    telefone: 987654432,
    cidade:"Barra do piraí",
}

const { matricula, nome, ...resto } = aluno

console.log(matricula);
console.log(resto);
