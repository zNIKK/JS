class Livro {
    constructor(nome, editora, paginas) {
        this.gNome = nome;
        this.gEditora = editora;
        this.gPaginas = paginas;
    }
    getNome () {
        return this.gNome;
    }
    getEditora () {
        return this.gEditora;
    }

    getPaginas () {
        return this.gPaginas;
    }
}


const GraphQL = new Livro(
    "GraphQL",
    "Casa do Código",
    143
)

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());