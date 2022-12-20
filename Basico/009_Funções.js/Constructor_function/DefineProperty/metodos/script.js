// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostar a chave?
        value: function() {
            return estoque;
        }, // o valor
        writable: false, // pode alterar o valor da variavel?
        configurable: true, // é configurável ou apagavel?

    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true,
        }
    })

   
}

const p1 = new Pessoa('Camiseta', 20, 3)

p1.nome = "Nicolas"
console.log(Object.keys(p1));