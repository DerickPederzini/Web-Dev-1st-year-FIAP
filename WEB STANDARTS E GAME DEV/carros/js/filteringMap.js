// filter Retorna array com todos os carros na cor vermelha

const carrosAuto = carros.filter(carro => carro.transmissao === "Automática");

const carrosEletricos = carros.filter(carro => carro.transmissao === "CVT");

//map() = desconto de 45% em todos os carros

const carrosDesconto = carros.map(carro => carro.preco*.45);

