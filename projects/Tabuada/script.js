function multiplicar() {
    let num = document.querySelector('#number')
    let tab = document.querySelector('#tabela')
    let n = Number(num.value)
    tab.innerText = ''
    c=0
    if (String(num.value).length===0) {
        window.alert(" [ERRO] Valor não especificado!")
        let op = document.createElement("option")
        tab.appendChild(op)
        op.innerText = 'Digite o número da tabuada acima 😁'
    } else{
        for (let r=0; c<=10; r*n) {
            let op = document.createElement("option")
            tab.appendChild(op)
            op.innerText += ` ${n} x ${c} = ${r} `      
            c++
            r+=n
        }
    }
}