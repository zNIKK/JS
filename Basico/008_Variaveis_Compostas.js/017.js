let num = [5, 8, 2, 9, 3, 7]
num[3] = 6  //  Trocar valor ou adicionar valor se não existir
num.push(141)
num.push(12)
num.push(65) // Adicionar valor no ultimo elemento
num.sort() // Colocar todos os elementos em ordem crescente

console.log(`Nosso vetor é o [${num}]`)

console.log(`O vetor tem ${num.length}`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)

if (pos == -1) {
    console.log('O valor não encontrado!')

} else {
    console.log(`O valor 8 esta na posiçao ${pos}`)
}

