let usuarios = ["adriano", "marcia", "José"];

function inserirUsuario(nome, callback) {
    setTimeout (() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Igor", listarUsuarios);

// Executar algo que não é em tempo real ou depois de qualquer intervalo de tempo de forma que não prejudique o função final