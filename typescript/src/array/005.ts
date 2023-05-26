// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function toUpperCase(...args: Array<string>): string[] {
  return args.map((valor) => valor.toUpperCase());
}

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
