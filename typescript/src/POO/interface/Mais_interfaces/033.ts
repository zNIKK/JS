interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  readonly idade?: number; // opcional
}

export const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

// pessoa.sobrenome = '';
// pessoa.enderecos.push('Rua nova');
// pessoa.idade = 31;
// Não pode alterar uma prapriedade readonly
console.log(pessoa);
