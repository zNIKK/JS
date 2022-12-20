function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('ERROR: esperando instância de função DATE.');

        // instanceof = espera a função date ser chamado. Se não for chamado irá ocorrer esse erro
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-Br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",

        hour12: false,
    })
}


const hora = retornaHora(new Date)

console.log(retornaHora());