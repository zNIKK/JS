let turmaA = ({nome: "Igor", Idade: 15})

turmaA = Object.assign({}, alunoA)

turmaB.idade = 25

// para adcionar a idade 25 na turmaB sem ter que alterar TurmaA, temos que usar "Object.assign({}, alunoA)"