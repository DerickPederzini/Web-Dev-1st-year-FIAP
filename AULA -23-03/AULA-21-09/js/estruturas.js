//sortear numero
let sortedNumber = parseInt(Math.random()*100);

for(let i =0; i < 10; i++){
    let sortedNumber = parseInt(Math.random()*100);
    console.log(`Dentro do for: ${sortedNumber}`);
}

//sorteio feito fora do for
console.log(`Fora do for: ${sortedNumber}`);

//operador ternario

const result = (sortedNumber % 2 === 0) ? 'par': 'impar' ;
console.log(`${sortedNumber} é par `);

//array

//const array = new Array();
const array2 = [];
console.log(array2);