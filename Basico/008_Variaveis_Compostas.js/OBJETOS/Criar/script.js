function obj(n , s) {
    this.nome = n
    this.sobrenome = s

}

var o = new obj("Igor", "Oliveira")

console.log(o.nome);
console.log(o["sobrenome"]);

// 2º Maneira de criar um objeto

// var funObj = function obj(n, s ) {
//     return {nome: n, sobrenome: s, }
// }

// console.log(funObj("Igor", "Oliveira"));

// 1º Maneira de criar um objeto

var objeto = {
    nome: "Nicolas",
    sobrenome: "Gandolfi",
}

console.log(objeto); 