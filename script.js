const count = document.querySelector('h3')
count.innerHTML = `Número total de países é de: ${paises.length}`

let container = document.createElement('div')

let table = document.createElement('table')

let contadorPais = 0

while(contadorPais < paises.length){
    let linha = document.createElement('tr')

    for(let i = 0; i < 6; i++){
        const dados = document.createElement('td')
        dados.textContent = paises[contadorPais]

        
        linha.appendChild(dados)
        contadorPais++
    }
    table.appendChild(linha)
}



container.appendChild(table)

document.body.appendChild(container)