// div que contém o react
const root = document.querySelector('#root');

// React.createElement("tags HTML => h1 / div", {parametros}, texto ) 
const t1 = React.createElement("h1", {id: "Titulo principal"}, "Hello World")
const t2 = React.createElement("h4", {id: "SubTitulo"}, "SubTitulo");

const headLine =React.createElement("div", null, t1, t2)

ReactDOM.render(headLine, root)