let x = 10; // eslint-disable-line

x = 0b1010;
// x = 'Luiz';
const y = 10;

// let a = 100 as const;
// a = 120;
const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

// pessoa.nome  = "Luiz1" // Type '"Luiz1"' is not assignable to type '"Luiz"'.

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Vermelho'));
// Module Mode
export default 1;
