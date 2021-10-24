function imc() {
    // ===========================================
    var p = document.getElementById('peso').value
    var a = document.getElementById('altura').value
    var b = document.getElementById('botao')
    var txt = document.getElementById('txtIMC')
    var homem = document.getElementById('radio01')
    var mulher = document.getElementById('radio02')
    var img = document.createElement("img")
    console.log(homem.checked)  
    // O calculo de IMC
    var calculo = Number(p)/(Number(a)*Number(a))
    var numero = Number(calculo.toFixed(2))
    // para homens
    if (homem.checked===true) {
        if (numero < 18.5) {
            // Abaixo do peso ideal
            
            txt.innerHTML = `Seu imc é de ${numero} está ABAIXO DO PESO IDEAL`
            img.src = "imagens/assets.newatlas.png"
            txt.appendChild(img)
        }
        else if (numero >= 18.5 && numero <= 24.9) {
            // Peso ideal
            txt.innerHTML = `Seu imc é de ${numero} está no PESO IDEAL`
            img.src = "imagens/dados-de-saude-doencas-cardiologicas-aplicativo-de-saude-1552931722251_v2_1920x1162.png"
            txt.appendChild(img)
        }
        else if (numero >= 25 && numero <= 30){
            // Acima do peso
            txt.innerHTML = `Seu imc é de ${numero} está ACIMA DO PESO IDEAL`
            img.src = "imagens/web-obesidade-adolescentes-1989.png"
            txt.appendChild(img)
        }
        else if (numero >= 31 && numero <= 39.9) {
            // Obesidade
            txt.innerHTML = `Seu imc é de ${numero} está com OBESIDADE`
            img.src = "imagens/unnamed.png"
            txt.appendChild(img)
        }
        else {
            // Obesidade morbida
            txt.innerHTML = `Seu imc é de ${numero} está com OBESIDADE GRAVE`
            img.src = "imagens/a385f048d346d10e07cb8dd48274afac.png"
            txt.appendChild(img)
        }
    }
    // para mulheres
    else if (mulher.checked===true) {
        if (numero < 18) {
            // Abaixo do peso ideal
            txt.innerHTML = `Seu imc é de ${numero} está ABAIXO DO PESO IDEAL`
            img.src = "imagens/assets.newatlas.png"
            txt.appendChild(img)
        }
        else if (numero >= 18.5 && numero <= 24) {
            // Peso ideal
            txt.innerHTML = `Seu imc é de ${numero} está no PESO IDEAL`
            img.src = "imagens/dados-de-saude-doencas-cardiologicas-aplicativo-de-saude-1552931722251_v2_1920x1162.png"
            txt.appendChild(img)

        }
        else if (numero > 24 && numero <= 30){
            // Acima do peso
            txt.innerHTML = `Seu imc é de ${numero} está ACIMA DO PESO IDEAL`
            img.src = "imagens/web-obesidade-adolescentes-1989.png"
            txt.appendChild(img)
        }
        else if (numero > 30 && numero <= 39.9) {
            // Obesidade
            txt.innerHTML = `Seu imc é de ${numero} está com OBESIDADE`
            img.src = "imagens/unnamed.png"
            txt.appendChild(img)
        }
        else {
            // Obesidade morbida
            txt.innerHTML = `Seu imc é de ${numero} está com OBESIDADE GRAVE`
            img.src = "imagens/a385f048d346d10e07cb8dd48274afac.png"
            txt.appendChild(img)
        } 
    }
    else {
        txt.innerHTML = "IMC não inserido ou incorreto. Tente novamente"
        img.src = "imagens/depositphotos_52406655-stock-photo-unknown-person.png"
        txt.appendChild(img)
    }   
}
