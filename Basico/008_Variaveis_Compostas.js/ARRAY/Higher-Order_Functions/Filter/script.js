function novoAluno(nome, idade) {
    return { nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

let jogadores = [
    novoAluno("Igor", 23),
    novoAluno("Leo", 45),
    novoAluno("Michelle", 29),
    novoAluno("Maria", 35)
]

function temMenosDe30(aluno) {
    return aluno.idade < 30
}

function temMaisDe30(aluno) {
    return aluno.idade > 30
}

let alunosComMenosDe30 = alunos.filter(temMaisDe30)

// ISSO É A MESMA COISA DA FUNÇÃO FILTER

function filtro(callback) {
    let alunosFiltrados = [];
    for (let aluno of this) {
        if (callback(aluno)) {
            alunosFiltrados.push(aluno)
        } 
    }
    return alunosFiltrados;
}
jogadores.filtro = filtro

console.log(jogadores.filtro(temMenosDe30));

