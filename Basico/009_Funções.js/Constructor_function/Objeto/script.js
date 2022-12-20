// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 

    this.metodo = function () {
        return `${this.nome} : sou um metodo`;
    }

    Object.freeze(this) // Bloqueia qualquer criação ou mudanças de metodos ou elementos
}

const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Luiz', 'Oliveira')

console.log(p1.metodo());

p1.nome = "Nicolas" // Se há Object.freeze(this) o nome não será alterado
console.log(p1.nome);