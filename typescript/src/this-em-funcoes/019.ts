export function funcao(this: Date, ARGUMENTO1: string, age: number): void {
  console.log(this); // objeto Date()
  console.log(ARGUMENTO1, age);
}

funcao.call(new Date(), 'Luiz', 30); // chama a função com o this sendo Date()
funcao.apply(new Date(), ['Luiz', 30]); // os argumentos estão dentro do array
