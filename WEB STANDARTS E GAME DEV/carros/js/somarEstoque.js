function somarEstoque(carros){

    const estoqueTotal = carros.reduce((accumulator, carro) =>
        accumulator + carro.preco, 0)


    return estoqueTotal;
}