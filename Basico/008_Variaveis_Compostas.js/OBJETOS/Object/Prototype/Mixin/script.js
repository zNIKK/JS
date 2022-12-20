// Mixin = utilizado para misturar e juntar metodos a uma classe já existente

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
}
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
}

// colocando falar, comer e beber no objeto da classe PessoaPrototype
const PessoaPrototype = Object.assign({}, falar, comer, beber)

// const PessoaPrototype = { ...falar, ...comer, ...beber }

function CriaPessoa(nome, sobrenome) {

    return Object.create(PessoaPrototype, {
        nome: { value: nome },
        nome: { value: sobrenome },
    });


}

const p1 = new CriaPessoa('Luiz', 'Otávio');
const p2 = new CriaPessoa('Maria', 'A');