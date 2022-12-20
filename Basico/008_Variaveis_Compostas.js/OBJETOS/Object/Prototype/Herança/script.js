// Produto
// camiseta, caneca, Lápis

function Produto(nome, preço) {
    this.nome = nome;
    this.preço = preço;


}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    // com o método call posso chamar os métodos de "Produto" em camiseta usando nome e preço
    Produto.call(this, nome, preco);
    this.cor = cor
}
// Camiseta.portotype.constructor = Camiseta
// O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto.
// com o método create posso fazer uma herança usando "prototype de Produto" como o pai.


/*
CREATE so deverá ser usado quando:
For necessário definir um protótipo diferente ao objeto a ser criado;

For necessário definir descritores de propriedade iniciais do objeto a ser criado (não confundir com propriedades). 
*/
Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.aumento = function (precentual) {
    this.preco = this.preco + (this.preco * (precentual / 100));
}

// ----------------------------------------------------------------------------
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },

        set: function (valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);

caneca.estoque = 1; // só vai passar se o valor for number

console.log(caneca);
console.log(camiseta);
console.log(produto);
