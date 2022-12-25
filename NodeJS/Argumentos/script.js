// process.argv = [ node, script.js0 ]
// contem uma array com aonde está instalado o node, e aonde está a asta q está executando
console.log(process.argv);
let args = process.argv.slice(2)
// [node script "", "", ""]

let a = Number(args[1]);
let b = Number(args[2]);
let c = ""

// node script s 10 10
if (args[0] == 's'){
    c = soma(a, b);
// node script m 10 10

} else if(args[0] == 'm') {
    c = mult(a, b);
// node script h

} else {
    c = "Opção inválida!"
}

function soma(x, y){
    return x + y;
}

function mult(x, y){
    return x * y;
}

console.log(c);