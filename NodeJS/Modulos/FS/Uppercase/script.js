// node script readme

// cria um txt a partir do readme e transforma em um txt maiusculas

let fs = require("fs");

let args = process.argv.slice(2);
let fileName = args[0];
console.log(fileName);

fs.readFile(fileName+ ".txt" , "UTF8", (err, data) => {
    if (err) throw err;
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (err) => {
        if (err) throw err;

        console.log("Arquivo gerado com sucesso");

    })
});