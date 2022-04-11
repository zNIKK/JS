let h1 = document.getElementsByTagName("h1")

for (let h of h1) {
    console.log(h);

    h.addEventListener("click", qop)

}


function qop (e) {
    let t = e.target // Referindo ao alvo do evento
    console.log(t.parentElement);

}





// let d1 = document.getElementById('d1')

// let h1 =  d1.children[0] // Imprimir o 1º elemento filho
// console.log(h1.parentElement) // Imprimir o elemento pai
// console.log(document.body.children) // TODOS OS ELEMENTOS FILHO