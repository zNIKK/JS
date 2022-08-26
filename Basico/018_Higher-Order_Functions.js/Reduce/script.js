function novoAluno(nome, idade) {
    return {nome, idade}
}


let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 25),
]

teste = {sadad: 1, daw: 2}


function idadeDaTurma(total, aluno) {
    return total + aluno.idade; 
}

console.log(alunos.reduce(idadeDaTurma, 0));

function reduzir(callback, num=0) {
    let a = []
    total = 0

    for (let aluno of this) {
        if (callback(total, aluno)) {
            total = callback(total,aluno);
        }

    }

    return total + num;
}

alunos.reduzir = reduzir;

console.log(alunos.reduzir(idadeDaTurma, 0));