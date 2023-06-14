type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1)); // 3 overloads = posso mandar só x, posso mandar x e y e posso mandar x, y e outros argumentos
console.log(adder(1, 2));
console.log(adder(1, 2, 3));

// overload = uma função se comporta de maneira diferente baseada na quantidade de parametros que ela recebe
