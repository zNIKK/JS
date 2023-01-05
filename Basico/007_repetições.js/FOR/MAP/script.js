// metodo MAP faz com que a ordem das chaves não seja alterada 

const pessoas = [
    {id: 2, nome: "Maria"},
    {id: 1, nome: "Helena"},
    {id: 3, nome: "Luiz"},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa; 
    novasPessoas.set(id, {...pessoa})
}


for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}

novasPessoas.delete(3)
console.log(novasPessoas.get(2));
console.log(novasPessoas);
