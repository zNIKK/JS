var idade = 67
if (idade < 15) {
    console.log(`não vota`)
console.log(`Você tem ${idade} anos`);
}
else if (idade < 18 || idade >= 65) {
        console.log(`Voto opcional`);
    }
else {
    console.log(`Voto obrigatório`);
}
