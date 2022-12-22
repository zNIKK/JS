function rand(min, max) {
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

esperaAi('Conectando com DB...', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados...', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Exibir dados...')
    })
    // .then(resposta => {
    //     console.log(resposta);
    //     esperaAi(321, rand(1, 3));
    // })
    .then(() => {
        console.log("Exibir dados na tela...");
    })
    .catch(e => {
        console.log("Houve um erro: ", e);
    })
// Executar algo que não é em tempo real ou depois de qualquer intervalo de tempo de forma que não prejudique o função final
