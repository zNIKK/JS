let url = "https://economia.awesomeapi.com.br/last/USD"


function converter() {
    let input = document.getElementById("valor")
    let valor = input.value
    
    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) =>{
        let USD = data.USDBRL.high


        document.getElementById("resultado").innerHTML = `${valor}$ = ${USD * valor}R$ `
    })
}
