// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostar a chave?
        configurable: true, // é configurável ou apagavel?
        get: function() {
            return estoquePrivado;
        },
        
        set: function(valor){
            if (typeof valor !== 'number') {
                throw new TypeError('Bad value'); // emitir mensagems de erro
            }

            estoquePrivado = valor
        }

    });
   
}


const p1 = new Pessoa('Camiseta', 20, 3)

p1.estoque = 300
console.log(p1.estoque);