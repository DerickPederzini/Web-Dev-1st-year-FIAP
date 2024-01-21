
const sort = document.getElementById('sortear')

sort.addEventListener('click', function () {

            let numeros = [];

            const divNums = document.getElementById('numeros');

            for (let i = 0; i < 10; i++) {
                //numeros[i] = parseInt(Math.random()*100);

                numeros.push(parseInt(Math.random() * 100))
            }

            divNums.textContent = numeros;


        })