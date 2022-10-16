// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 

    this.metodo = () => {
        console.log(`${this.nome} : sou um metodo`);
    }
}

const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Luiz', 'Oliveira')

console.log(p1.metodo());