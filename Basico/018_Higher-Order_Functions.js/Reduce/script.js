function novoAluno(nome, idade) {
    return {nome, idade}
}


let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 23),
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade; 
}

// console.log(alunos.reduce(idadeDaTurma, 0));

function reduzir(callback, num=0) {
    let a = []
    for (let aluno of this) {
        let total = 0

        if (callback(total, aluno)) {
            a.push(callback(total, aluno))
        }
    }
    return a
}

alunos.reduzir = reduzir

console.log(alunos.reduzir(idadeDaTurma));