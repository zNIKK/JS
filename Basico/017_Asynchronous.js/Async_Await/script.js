function rand(min=0, max=3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE')

        // setTimeout => para simular o tempo de espera
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

// async / await

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', rand())
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', rand())
        console.log(fase2);
        const fase3 = await esperaAi(2, rand())
        console.log(fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

// pending => pendente
// fullfilled => resolvida
// reject => rejeitada  


// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//     }).then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     }).then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e))

