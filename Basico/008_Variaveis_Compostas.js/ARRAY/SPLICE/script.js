let nome = [ 'Luiz', 'Otávio', 'Miranda' , 'Eduardo', 'Matheus']

// const nomesRemovidos = nome.splice(1, 3) 
const nomesRemovidos = nome.splice(0, 2, 'Marcela') 
// (começando do indice 0, remova 2 elementos, adiciona marcela)
console.log(nome, nomesRemovidos);
// Altera o conteúdo de uma array adicionando ou removendo-as