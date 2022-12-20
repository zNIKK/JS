let usuarios = ["adriano", "marcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject){
        setTimeout (() => {
            usuarios.push(nome);

            // TRATAMENTO DE ERRO
            let error = false;

            if(!error){
                resolve();
            } else {
                reject({msg: "Houve um erro!!"});
            }
            // TRATAMENTO DE ERRO

        }, 1000);


    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios);
}

async function executar() {
    await inserirUsuario("Igor"); // await = So execute as subsequentes linhas se essa linha for executada corretamente
    listarUsuarios();

} 

executar()

