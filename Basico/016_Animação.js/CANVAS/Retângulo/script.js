let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")


ctx.rect(10,20, 100, 200)
ctx.fillStyle = "blue"

// ctx.fillRect(10,20, 100, 200) // ctx(posiçãoX, posiçãoY, largura, altura)
ctx.lineWidth = 5
ctx.strokeStyle = "red"

// ctx.strokeRect(10,20, 100, 200)

ctx.fill()
ctx.stroke()

ctx.clearRect(20,30, 30, 30) // retângulo transparente