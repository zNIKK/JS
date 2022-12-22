function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (min - max) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        // setTimeout => para simular o tempo de espera
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise');
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

// promise.race() = executa a que foi resolvida primeiro


const promises = [
    'primeiro valor',
    esperaAi('promise 1', 3000),
    esperaAi('promise 2', 500),
    esperaAi('promise 3', 1000),
    // esperaAi(1000, 1000),
    'Outro valor'
]

Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (erro) {
        console.log(erro);
    });

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página já está em cache')
        // Promise.resolve = cairá no then
        // Promise.reject = cairá no catch
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
    console.log(dadosPagina);
})
    .catch(e => console.log(e))


