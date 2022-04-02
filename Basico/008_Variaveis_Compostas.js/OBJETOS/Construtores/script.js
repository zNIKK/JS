function criarAluno(nome, n1 , n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,

        media: function ()  {
            return (this.nota1 + this.nota2) / 2
            
        },
    }        
}



var turma = [
    criarAluno("João", 7, 4),
    criarAluno("Igor", 9, 6),
    criarAluno("Marcela", 8, 7.5)
]


turma.forEach(function (elemento) {
    console.log(elemento.nome + " " + elemento.nota1 + " / " + elemento.nota2 + "\nMédia: " + elemento.media() + "\n" + elemento.AprovReprov())
})