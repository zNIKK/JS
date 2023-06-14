type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

// Encadeamento opcional
console.log(documento.data?.toDateString() ?? '1-Ixi, não existe data');
// ??(Operador de coalescência nula) = se retornar null ou undefined ele retorna a frase
console.log(undefined ?? '2-Ixi, não existe data');
console.log(null ?? '3-Ixi, não existe data');
console.log(false ?? '4-Ixi, não existe data');
console.log(0 ?? '5-Ixi, não existe data');
console.log('' ?? '6-Ixi, não existe data');

// mesma coisa de:

// if (documento.data.toDateString) {
//   documento.data.toDateString();
// } else {
//   console.log('Ixi, não existe data');
// }
