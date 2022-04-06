var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");

t1.onclick = colocarEmMaiusculo;
t2.onclick = colocarEmMaiusculo;

function colocarEmMaiusculo() {
    this.innerHTML = this.innerHTML.toUpperCase(); // O THIS faz referência ao objeto do qual a função é uma propriedade. Em outras palavras, o this faz referência ao objeto que está chamando a função no momento.
}
