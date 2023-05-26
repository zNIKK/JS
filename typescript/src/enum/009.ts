enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores.VERMELHO);
// console.log(Cores[10]);
// console.log(Cores.ROXO);

function escolhaCores(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCores(201);
