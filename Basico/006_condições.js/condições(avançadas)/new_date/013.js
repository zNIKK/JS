var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`Agora são exatamente ${hora}:${min} horas`);
if (hora < 12 && hora >= 6) {
    console.log(`Bom dia!`);

} else if (hora > 0 && hora < 6) {
    console.log(`Boa madrugada`);

} else if (hora <= 18) {
    console.log(`Boa Tarde!`);
}
  else {
    console.log(`Boa Noite!`);
}