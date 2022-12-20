let turmaA = ({nome: "Igor", Idade: 15})

Object.freeze(turmaA);
turmaA.nome = "Nicolas" // não substituirá
console.log(turmaA);

// Congela o objeto