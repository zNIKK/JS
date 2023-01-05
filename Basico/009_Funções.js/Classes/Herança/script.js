//

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' está ligado');
            return;
        }
        this.ligado = false;
    }

    desligar() {
        if(this.ligado) {
            console.log(this.nome + ' está desligado');
            return;
        }
        this.ligado = false;
    }
}

// extends = faz com que a função Smartphone herde todas as funções e metodos de DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        // usada para chamar e implementar o metodo nome de DispositivoEletronico na função
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}
class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
    
        super(nome);
        this.temWifi = temWifi;
        
    }

    ligar() {
        console.log('Olha, você alterou o metodo ligar');
    }
    
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10');
const t1 = new Tablet('ipad', 'Sim')

console.log(t1);

console.log(s1);
