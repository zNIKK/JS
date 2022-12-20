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
console.log("array original")
console.log(alunos)
console.log("array criado pelo map")
console.log(alunos.map(alunoDaquiA5anos)); // Usa o ARRAY ORIGINAL pra criar um novo array totalmente diferente
console.log("array original (que não se modificou)")
console.log(alunos)



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
