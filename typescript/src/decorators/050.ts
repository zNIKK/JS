@decorator
export class Animal {
  constructor(public name: string, public cor: string) {}
}

// decorator decora partindo de base da class original usando argumentos dela
function decorator<T extends new (...args: any[]) => any>(target: T) {
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
// @decorator = const AnimalDecorated = decorator(Animal);
const animal = new Animal('Luiz', 'roxo');
console.log(animal);
