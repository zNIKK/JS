let ini = document.querySelector('#start')
let fim = document.querySelector("#end")
let passo =  document.querySelector("#step")
let divcont = document.querySelector("#contagem")
   
function contar() {
    if (String(ini.value).length == 0 || String(fim.value).length == 0 || String(passo.value).length == 0) {
        window.alert("[ERRO] Campo em branco!")
    } else {
        divcont.innerText = "";
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        while (i<=f) {
            divcont.innerText = divcont.innerText + i
            divcont.innerText = divcont.innerText + "->"            
            i = i + p
    }
    
}

