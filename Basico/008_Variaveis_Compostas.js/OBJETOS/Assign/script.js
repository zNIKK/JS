let turmaA = ({nome: "Igor", Idade: 15})

turmaB = Object.assign({}, turmaA)

turmaB.idade = 25

console.log(turmaA);
console.log(turmaB);

// para adcionar a idade 25 na turmaB sem ter que alterar TurmaA, temos que usar "Object.assign({}, alunoA)"