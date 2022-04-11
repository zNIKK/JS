
var numero = 0 
var interval;

function atualizarTexto() {
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML += " " + numero
    numero++
}

function iniciar() {

    interval = setInterval(atualizarTexto , 1000)
}

function parar() {
    clearInterval(interval)
    // clearTimeout(interval)

}

// setTimeout(mudarCor, 1000) // Delay em milissegundos


function mudarCor() {
    let h = document.getElementsByTagName("h1")[0]

    h.style.color = "blue"
}