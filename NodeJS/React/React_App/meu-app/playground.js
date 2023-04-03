class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    greetings() {
        console.log(`Olá, tudo bom? meu nome é ${this.name}`);
    }
}

class Aluno extends Person {
    constructor(name, age, turma) {
        super(name, age);
        this.turma = turma;
    }


    greetings() {
        console.log(`Olá, tudo bom? meu nome é ${this.name}, e eu estou na truma ${this.turma}`);
    }
}

let marcos = new Aluno("Marcos", 30, "1001");

marcos.greetings();