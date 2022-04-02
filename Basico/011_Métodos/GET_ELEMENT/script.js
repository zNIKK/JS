let tp = document.getElementsByTagName("p") // Todos da mesma tag

for (let t of tp)
    console.log(t);

// <p class="paragrafo" id="p1">Parágrafo1</p>
// <p class="paragrafo"> Parágrafo2</p>
// <p>Parágrafo3</p>

let paragrafos = document.getElementsByClassName("paragrafo") // Todas da mesma classe

for (let p of paragrafos) {
    console.log(p);
}
// <p class="paragrafo" id="p1">Parágrafo1</p>
// <p class="paragrafo"> Parágrafo2</p>

let p1 = document.getElementById("p1") // Todas do mesmo ID
console.log(p1)

// <p class="paragrafo" id="p1">Parágrafo1</p>
