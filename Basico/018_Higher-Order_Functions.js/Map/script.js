function novoAluno(nome, idade) {
    return { nome, idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

function alunoDaquiA5anos(aluno) {
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }

}

console.log(alunos.map(alunoDaquiA5anos));


// function mapear(callback) {
//     let a = [];

//     for (let aluno of this) {
//         if (callback(aluno)) {
//             a.push(callback(aluno));
//         }
//     }
//     return a;

// }

// alunos.mapear = mapear

// console.log(alunos.mapear(alunoDaquiA5anos));
