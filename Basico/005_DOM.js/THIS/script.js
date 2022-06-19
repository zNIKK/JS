var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");

t1.onclick = colocarEmMaiusculo;
t2.onclick = colocarEmMaiusculo;

function colocarEmMaiusculo() {
    this.innerHTML = this.innerHTML.toUpperCase(); 
    // O THIS faz referência ao objeto do qual a função é uma propriedade. Em outras palavras, o this faz referência ao objeto que está chamando a função no momento.
}

function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric,
}

let cat = {
    sound: "Miau",
    speak: speakGeneric,
}

// dog.speak()
// cat.speak()

let bindedFunction = speakGeneric.bind(dog)
// o método bind cria uma nova função, permite que o próprio pegue emprestado o método do objeto, sem mesmo fazer cópia desse método, é um empréstimo de função. 


bindedFunction()