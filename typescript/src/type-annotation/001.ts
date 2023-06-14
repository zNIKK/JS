/* eslint-disable  */

const nome: string = 'Luiz';
const number: number = 0b1010; // 30
const boolean: boolean = true; //true ou false
const symbol: symbol = Symbol('qualquer-symbol'); // symbol

let arrayDeNumeros: Array<number> = [1, 2, 3]
let arrayDeNumeros2: number[] = [1, 2, 3] // mesma coisa do de cima
let arrayDeStrings: Array<string> = ['a', 'b']
let arrayDeStrings2: string[] = ['a', 'b'] // mesma coisa do de cima



export let pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean, // ? - pode ser omitida
} = {
  nome: 'Nicolas',
  idade: 12,
  // adulto: true,
}

function soma(x:number, y: number):number {
  return x + y
}

const result = soma(2,2)
console.log(result);

