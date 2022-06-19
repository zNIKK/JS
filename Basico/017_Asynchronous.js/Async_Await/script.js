let usuarios = ["adriano", "marcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise(function(resolve, reject){
        setTimeout (() => {
            usuarios.push(nome);

            let error = false;

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

async function executar() {
    await inserirUsuario("Igor");
    listarUsuarios();

} 

executar()