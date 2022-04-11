let a = {
            nome:'Igor',
            nota: 8.5,
        }


let b = JSON.stringify(a) // Tranforma OBJETO em JSON

let a2 = '{"nome": "fabio", "nota": 7.8}'

let b2 = JSON.parse(a2) //Transforma JSON em OBJETO

console.log(a); // OBJETO
console.log(b); // JSON

console.log(a2); // JSON
console.log(b2); // OBJETO

