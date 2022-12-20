/*
Javascript é baseado e protótipos para passar propriedades e métodos de um objeto para o outro.

Definição de protótipos
Prototipos é um termo usado para se refletir ao que foi criado pela primeira vez, 
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) 
que vem da propriedade prototype da função construtora que foi usada para criá-lo. 
Quando temos acessarum membro de um objeto, 
primeiro motor do JS vai tentar encontrar esse membro no próprio objeto e depois 
a cadeia de prototipos é usada até o todo (null) até encontrar (ou não) Tal membro.
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;

    
}
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}; // adiciona no __proto__ a função nomeCompleto
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora;
const pessoa2 = new Pessoa('Maria', 'A.'); 
const data = new Date(); // <-- Date = função construtora

console.dir(pessoa1)
console.dir(data)