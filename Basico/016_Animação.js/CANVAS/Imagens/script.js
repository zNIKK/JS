let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

// let img = document. getElementById("js")

// ctx.drawImage(img, 20, 20) // colocar imagem

let img = new Image()
img.src = "./images/Javascript_Logo.png"

img.onload = desenharImg

function desenharImg() {
    ctx.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2) // largura padrão da imagem
}