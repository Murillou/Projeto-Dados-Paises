const count = document.querySelector('h3')
count.innerHTML = `Número total de países é de: ${paises.length}`

const searchInput = document.querySelector('#search')
const tableBody = document.querySelector('#countries-table-body')

function populateTable(countries){
    tableBody.innerHTML = ''
    let row = document.createElement('tr')
    for(let i = 0; i < countries.length; i++){
        if (i % 6 == 0 && i !== 0) {
            tableBody.appendChild(row)
            row = document.createElement('tr')
        }
        const nameCell = document.createElement('td')
        nameCell.textContent = countries[i]
        row.appendChild(nameCell)
    }
    tableBody.appendChild(row)
}

const btn = document.querySelector("#btn")

btn.addEventListener('click', () => {


function filterCountries(){
    const searchTerm = searchInput.value.toLowerCase()
    const filteredCountries = paises.filter(country =>
    country.toLowerCase().startsWith(searchTerm))
    populateTable(filteredCountries)
    const counts = document.querySelector('h4')
    counts.innerHTML = `Número total de países que começam com <strong id = "letter">${searchTerm}</strong> é de: 
    <span id = "number">${filteredCountries.length}</span>`
}

searchInput.addEventListener('input', filterCountries)
populateTable(paises)

})

const btnTwo = document.querySelector("#btnTwo")

btnTwo.addEventListener('click', () => {


function filterCountries(){
    const searchTerm = searchInput.value.toLowerCase()
    const filteredCountries = paises.filter(country =>
    country.toLowerCase().includes(searchTerm))
    populateTable(filteredCountries)
    const counts = document.querySelector('h4')
    counts.innerHTML = `Número total de países que contém <strong id = "letter">${searchTerm}</strong> é de: 
    <span id = "number">${filteredCountries.length}</span>`
}

searchInput.addEventListener('input', filterCountries)
populateTable(paises)

})

populateTable(paises)

