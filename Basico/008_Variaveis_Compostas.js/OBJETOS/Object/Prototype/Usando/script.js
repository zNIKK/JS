function Produto(nome, preço) {
    this.nome = nome;
    this.preço = preço; 

}

Produto.prototype.desconto = function(percentual) {
    this.preço = this.preço - (this.preço * (percentual / 100));


}

Produto.prototype.aumento = function(percentual) {
    this.preço = this.preço + (this.preço * (percentual / 100));


}

const p1 = new Produto('Camiseta', 30
)

console.log(object);