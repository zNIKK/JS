// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, preco, estoque){

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: function() {
            return estoque;
        },
        writable: false,
        configurable: true,

    })
    
    // define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Para modificar uma propriedade, writable tem que ser true
            value: nome, // valor da propriedade
            writable: true, // mostar ou não mostrar o que esta dentro de estoque
            configurable: true, // se a propriedade pode ser deletada/alterada ou não
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