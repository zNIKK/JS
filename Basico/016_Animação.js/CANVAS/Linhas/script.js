let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

ctx.moveTo(0,0)
ctx.lineTo(250,250)
ctx.lineWidth = 5  // Aumenta a espeçura da linha
ctx.lineTo(500,0)
ctx.strokeStyle = "red" // Mudar cor
ctx.stroke() // Executar