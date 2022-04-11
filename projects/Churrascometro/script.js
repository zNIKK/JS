function calcular() {
    let res = document.getElementById("res")
    let adultos = parseInt(document.getElementById("adultos").value)
    let crianças = parseInt(document.getElementById("crianças").value)
    let tempo = parseInt(document.getElementById("tempo").value)

    
    let todos = adultos + (crianças / 2)
    
    let mediaCarne = 400
    let mediaCerveja = 1200
    let mediaRefrigerante = 1000
    
    if (tempo >= 6) {
        let carne = parseFloat((todos * (mediaCarne + 250)) * 0.001);

        let cerveja = Math.round((adultos * (mediaCerveja + 800)) / 350)
        
        let refrigerante = Math.round((((todos * (mediaRefrigerante + 500)) / 2) / 1000))

        res.innerHTML = `  
                        <p>${carne} Kg de Carne</p>
                        <p>${cerveja} Latas de Cerveja</p>
                        <p>${refrigerante} Garrafas de 2L de Refrigerante</p>
                        `
   

        
    } else {            
        let carne = parseFloat((todos * mediaCarne) * 0.001);

        let cerveja = Math.round((adultos * mediaCerveja) / 350)

        let refrigerante = Math.round(((todos * mediaRefrigerante) / 2) / 1000);

        res.innerHTML = `  
                        <p>${carne} Kg de Carne</p>
                        <p>${cerveja} Latas de Cerveja</p>
                        <p>${refrigerante} Garrafas de 2L de Refrigerante</p>
                        `
        
    }


} 
   

