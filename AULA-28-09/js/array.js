const PESSOAS = ['String', 3, true, 'Nós', 'EU'];
let hash = {32: 3,a:'true', "hello": 'World'}

for (let i =0; i< PESSOAS.length; i++){

    console.log(PESSOAS[i]);
}

console.log(PESSOAS.length);
console.table(PESSOAS);

console.table(hash);


//inserir no primeiro indice

PESSOAS.unshift('EU MESMO');
console.table(PESSOAS);

//Excluir o primeiro Indice - PERDER VALOR

PESSOAS.shift(PESSOAS);
console.table(PESSOAS);

//INSERIR NO ULTIMO INDICE

PESSOAS.push("Nós MESMOS");
console.table(PESSOAS)

//RETIRAR NO ULTIMO INDICE

PESSOAS.pop(PESSOAS);
console.table(PESSOAS);

//METODO SPLICE, INSERIR E EXCLUIR

PESSOAS.splice(2,2);
console.table(PESSOAS);

//METODO SPLICE, INSERINDO

PESSOAS.splice(2,0,'Ele','Nós')
console.table(PESSOAS);