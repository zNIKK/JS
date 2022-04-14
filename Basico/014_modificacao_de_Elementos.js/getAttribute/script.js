
let lista = document.getElementById("lista")

lista.dataset.n = 5

let num = parseInt(lista.dataset.n)

let id = parseInt(lista.getAttribute("data-id"))  // pega um atributo
console.log(id);

let conteudo = ""

for(let i = 0; i <= num; i++) {
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo