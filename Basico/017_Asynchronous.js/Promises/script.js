let usuarios = ["adriano", "marcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject){
        setTimeout (() => {
            usuarios.push(nome);

            let error = true;

            if(!error){
                resolve();
            } else {
                reject({msg: "Houve um erro!!"});
            }
        }, 1000);

    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Igor")
        .then(listarUsuarios)
        .catch((error) => {
                console.log(error.msg);
        });

// Executar algo que não é em tempo real ou depois de qualquer intervalo de tempo de forma que não prejudique o função final