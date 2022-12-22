class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume += 2;
    }
    //Método de instâncias

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método de estático

    static trocaPilha() {
        console.log("Trocando pilha!");
        // NÃO TEM ACESSO AOS METODOS DESSA FUNÇÃO!!
        return this.tv // undefined
    }
}

const controle1 = new ControleRemoto('LG')

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)

// so poderá acessar o metodo estático se não estânciar uma variável da classe 
console.log(ControleRemoto.trocaPilha());
// metodo estático no Math sem criar a palavra new
console.log(Math.random());
// controle1.trocaPilha();
