// Factory function (Função fábrica)
// Construtor function (Função construtora)

function criaPessoa(nome, sobrenome, a,p){
    return {
        nome, // nome : nome, -> abreviação
        sobrenome: sobrenome,

        // GETTER

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}` // nesse tipo de função precisa usar this para pega uma variavel da função

        },

        // SETTER

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome =valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);

        },

        fala(assunto = "falando sobre nada") {
            return `${this.nome} está ${assunto}` 
        },


        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('nicolas', 'Gandolfi', 1.8, 80);

p1.nomeCompleto = 'Nicolas Barbosa de Carvalho Gandolfi'; // SETTER -> substitui os valores da função 
console.log(p1.nomeCompleto);
console.log(p1.nome); // GETTER -> chama a função sem os ()
console.log(p1.sobrenome);
console.log(p1.fala());

console.log(p1.imc);