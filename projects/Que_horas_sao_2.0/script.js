let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()

console.log(hora)
console.log(min)


let img = document.querySelector("#img")
let txt = document.querySelector("#txthoras")

txt.innerHTML = `Agora são ${hora} horas`

if (hora >= 1 && hora <= 12) {
    console.log('dia')
    document.body.style.backgroundColor = "rgb(199, 186, 116)"
    img.src = "Images/dia.png"
} else if (hora >= 13 && hora <= 18) {
    console.log('tarde')
    document.body.style.backgroundColor = "rgb(199, 139, 116)"
    img.src = "Images/tarde.png"
} else {
    console.log('noite')
    document.body.style.backgroundColor = "rgb(78, 78, 78)"
    img.src = "Images/noite.png"
}