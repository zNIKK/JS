// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Produto(nome, preco){

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        value: function() {
            return nome;
        },
        writable: false, 
        configurable: true, 

    })
    console.log(Object.getOwnPropertyDescriptor(this, 'nome'));
    // Retorna as propiedades 
}

const p1 = new Produto('Produto', 1.80)
