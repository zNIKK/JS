// decorator decora partindo de base da class original usando argumentos dela
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
  console.log('2. Sou o decorador e recebi', target);
  return class extends target {
    cor: string;
    nome: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('1. Sou a classe');
  }
}
// @decorator = const AnimalDecorated = decorator(Animal);
// Primeiro ele inicia o decorator depois a classe

const animal = new Animal('Luiz', 'roxo');
console.log(animal);
