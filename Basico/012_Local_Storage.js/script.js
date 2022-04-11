onload = function() {
    let nome = localStorage.getItem("nome")
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome
} 

function atualizar(e) {

    let valor = e.value
    console.log(valor);

    let h1 = document.getElementById("nome")
    h1.innerHTML = valor

    localStorage.setItem("nome", valor)
    
}


// localStorage.setItem("nome","igor") // salva item na memoria do navegador

// let n = localStorage.getItem("nome") // pega item na memoria do navegador

// console.log(n);

// localStorage.removeItem("nome") // remove item na memoria do navegador

// localStorage.clear("nome") // Limpa TUDO da memoria do navegador