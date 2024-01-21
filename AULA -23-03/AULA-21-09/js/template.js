
let firstNumber = 27;
let secondNumber = 9;

//criando template
console.log(`firstNumber = ${firstNumber} \nsecondNumber = ${secondNumber}`);
console.log(`${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);

//operadores aritméticos

let resultado = firstNumber+secondNumber;

console.log(`${firstNumber} + ${secondNumber} = ${resultado}`);

resultado = firstNumber-secondNumber;

console.log(`${firstNumber} - ${secondNumber} = ${resultado}`);

resultado = firstNumber*secondNumber;

console.log(`${firstNumber} * ${secondNumber} = ${resultado}`);

resultado = firstNumber/secondNumber;

console.log(`${firstNumber} / ${secondNumber} = ${resultado}`);

resultado = firstNumber%secondNumber;

console.log(`${firstNumber} % ${secondNumber} = ${resultado}`);

resultado = firstNumber**secondNumber;

console.log(`${firstNumber} ^ ${secondNumber} = ${resultado}`);

//Operadores Relacionais

resultado = firstNumber>secondNumber;
console.log(`${firstNumber} > ${secondNumber} = ${resultado}`);

resultado = firstNumber< secondNumber;
console.log(`${firstNumber} < ${secondNumber} = ${resultado}`);

resultado = firstNumber>=secondNumber;
console.log(`${firstNumber} >= ${secondNumber} = ${resultado}`);

resultado = firstNumber<=secondNumber;
console.log(`${firstNumber} <= ${secondNumber} = ${resultado}`);

firstNumber = 27;
secondNumber = '27';

resultado = firstNumber === secondNumber;
console.log(`${firstNumber} === '${secondNumber}' = ${resultado}`);

resultado = firstNumber !== secondNumber;
console.log(`${firstNumber} !== '${secondNumber}' = ${resultado}`);

console.log(typeof(resultado));

//Operador de incremento
secondNumber = 9;

console.log(firstNumber, secondNumber);
firstNumber++;
secondNumber++;
console.log(firstNumber, secondNumber);

console.log(firstNumber, secondNumber);
firstNumber--;
secondNumber--;
console.log(firstNumber, secondNumber);

//pós-fixado
resultado = firstNumber++ +secondNumber++;
console.log(resultado);
console.log(firstNumber, secondNumber);

resultado = firstNumber++ +secondNumber++;
console.log(resultado);
console.log(firstNumber, secondNumber);

//pré-fixado
secondNumber=9;
firstNumber = 27;

resultado = ++firstNumber + ++secondNumber;
console.log(firstNumber, secondNumber);
console.log(resultado);








