// && / e
// || / ou
// Negativo



// var a = true
// var b = false

// var c = a && b ;  // quando 1 for falso ou os dois

// console.log(c);

// var d = a || b  // quando os 2 for falso

// console.log(d);

// && e
var idade = 35

var maior20 = idade > 20
var menor30 = idade < 30

var entre = maior20 && menor30

console.log("idade:", idade);

console.log("Maior que 20: ", maior20);

console.log("Menor que 30: ", menor30);

console.log("Entre 20 e 30: ", entre);

// || ou
var idade2 = 10

var menor10 = idade2 <= 10
var maior65 = idade2 >= 65

var gratuidade = menor10 || maior65

console.log("idade 2:", idade2);

console.log("Maior que 65: ", maior65);

console.log("Menor que 10: ", menor10);

console.log("Tem direito a gratuidade? ", gratuidade);

// Negativo

console.log(!true);
