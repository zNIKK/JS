function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("nicolas",9),
    novoAluno("gustavo",8)
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade
}

// console.log(alunos.reduce(idadeDaTurma, 0));

function reduzir(callback) {
    let list = [];
    let c = 0;

    for( let a in this) {
        if (callback(a)) {
                        
        }
    }
    return a
}

alunos.reduzir = reduzir

console.log(alunos.reduzir(idadeDaTurma));
