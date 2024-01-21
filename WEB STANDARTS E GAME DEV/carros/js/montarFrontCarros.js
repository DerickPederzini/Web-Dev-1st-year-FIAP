const tbody = document.querySelector(".table-car");

// montando o front

carros.forEach(carro =>{

    tbody.innerHTML += `
            <tr>
                <td>${carro.marca}</td>
                <td>${carro.modelo}</td>
                <td>${carro.ano}</td>
                <td>${carro.cor}</td>
                <td>${carro.transmissao}</td>
                <td>${carro.combustivel}</td>
                <td>${formatarMoeda( carro.preco)}</td>
            </tr>
    `

});

//exibindo o estoque

document.querySelector("#automaticos").textContent = formatarMoeda(somarEstoque(carrosAuto));
document.querySelector("#eletricos").textContent = formatarMoeda(somarEstoque(carrosEletricos));
document.querySelector("#total").textContent = formatarMoeda(somarEstoque(carros));