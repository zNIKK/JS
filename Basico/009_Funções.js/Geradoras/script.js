function* geradora1() {
    // Codigo qualquer 
    yield 'Valor 1'; 
    // Codigo qualquer 
    yield 'Valor 2';
    // Codigo qualquer 
    yield 'Valor 3';
}

// Uma maneira diferente de "return" como se eu chamasse um por cada return em ordem

function* geradora2() {
    let i = 0

    while(true) {
        yield i
        i++

    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;

}

function* geradora5() {
    yield function() {
        console.log("Vim do y1");
    };

    return function() { // se eu usar return não irá executar os yield de baixo 
        console.log("vim do return");
    };

    yield function() {
        console.log("vim do y3");
    };
}

const g1 = geradora1();
const g2 = geradora2();
const g4 = geradora4();
const g5 = geradora5();



for (let valor of g1) {
    console.log(valor);
}

console.log(g1.next());

console.log('gerador 2');

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// executa infinitamente ...

console.log('gerador 4');
for (let valor of g4) {
    console.log(valor);
}


console.log('gerador 5');

const func1 = g5.next().value; // .next() vai para o proximo yield
const func2 = g5.next().value;
const func3 = g5.next().value;


func1();
func2();
func3();