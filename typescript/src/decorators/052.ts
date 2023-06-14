// Usamos uma função que retorna um decorator para usar parametros
function inverteNomeECor(param1: string, param2: string) {
  return function inverteNomeECor<T extends new (...args: any[]) => any>(
    target: T,
  ) {
    console.log('Sou o decorador e recebi', target);
    return class extends target {
      cor: string;
      nome: string;
      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return (
          // Usando parametros
          valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2
        );
      }
    };
  };
}

// passar parametros em decorators, exemplo:
// @inverteNomeECor('valor1', 'valor2')
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}
// @decorator = const AnimalDecorated = decorator(Animal);
const animal = new Animal('Luiz', 'roxo');
console.log(animal);
