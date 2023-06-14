// Usamos uma função que retorna um decorator para usar parametros
type Constructor = new (...args: any[]) => any;
function inverteNomeECor(param1: string, param2: string) {
  return function inverteNomeECor(target: Constructor) {
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
function outroDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('3. Sou o outro decorador' + param1 + ' ');
    return target;
  };
}

@outroDecorator('O parâmetro do decorator')
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('1. Sou a classe');
  }
}
// @decorator = const AnimalDecorated = decorator(Animal);
const animal = new Animal('Luiz', 'roxo');
console.log(animal);
