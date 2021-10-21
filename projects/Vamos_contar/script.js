function contar() {
    let ini = document.querySelector('#start')
    let fim = document.querySelector("#end")
    let passo =  document.querySelector("#step")
    let divcont = document.querySelector("#contagem")
    
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    divcont.innerHTML = ""

    if (String(ini.value).length === 0 || String(fim.value).length === 0 || String(passo.value).length === 0) {
        divcont.innerHTML = "Impossível contar"
        window.alert("[ERRO] Campo em branco!")     
    } else {
        if (p<=0){
            p = 1
            window.alert("PASSO INVALIDO!! Considerando passo maior que 1")
        }
        if (i>f) {
            for (let c=i;c>f;c-=p) {
                divcont.innerHTML += c
                divcont.innerHTML += ` 👉 `
            } 
        } else {
            while (i<=f) {
                if (p>0) {               
                        divcont.innerHTML += i
                        divcont.innerHTML += ` 👉 `
                        i = i + p         
                }
                       
            }
        }
        divcont.innerText = divcont.innerHTML + " ✔️ "     
    }
}