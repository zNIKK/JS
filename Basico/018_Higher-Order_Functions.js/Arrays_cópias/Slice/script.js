let turmaA = ["Igor", "Maria", "Paula"]

turmaA = turmaB.slice()
// turmaA = [...turmaB]


turmaB.push("João")

// para adcionar Jõao na turmaB sem ter que alterar TurmaA, temos que usar ".slice()"