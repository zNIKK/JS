

function looded() {
    let t = document.getElementById('titulo')
    t.addEventListener("click", mudarText) // addEventListener(evento , função)
    t.addEventListener("mouseout", mouseout)
    
    // t.onclick = mudarText;
}

function mudarText() {
    this.innerHTML = "Novo texto"
}

function mouseout () {
    this.innerHTML = "mouse fora do elemento"
}