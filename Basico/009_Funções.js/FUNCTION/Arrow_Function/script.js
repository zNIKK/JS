
let dobro = x => 2 * this.x;

// let dobro = function (x) {
//     return 2 * this.x
// }

// A arrow function não entende o THIS

let numero = {
    x: 8,
    d: dobro
}

console.log(numero.d());