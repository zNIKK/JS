let p = document.getElementsByTagName("p") // Todas do mesmo ID

let p1 = document.getElementById("p1")
let meuAtt = p1.getAttribute("meuAtt")

console.log(meuAtt);

p[0].innerHTML = "<h2>Novo conteúdo</h2>" // Pode usar tags HTML
p[1].innerText = "<h2>Novo conteúdo</h2>"  // Mostra so o que aparece na tela
p[2].textContent = "<h2>Novo conteúdo</h2>" // Mostra todo texto que aparece no HTML

p[0].className = "" // Troca a class do objeto
p[2].style = "color:blue"

// <p class="paragrafo" id="p1">Parágrafo1</p>
