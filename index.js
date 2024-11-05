const number = document.querySelector('#primaryNumber')
const multiplication = document.querySelector('#multiplication')
const formu = document.querySelector('#form')
const resultTable = document.querySelector('#resultTable')
const numTitle = document.querySelector('#numTitle')


function createTable(numValue, multValue){
    resultTable.innerHTML = ''
    numTitle.innerHTML = numValue

    for(let i = 0; i <= multValue; i++){

        let result = numValue * i
        let p = document.createElement('p')
        p.textContent = `${numValue}x${i} = ${result}`
        p.classList.add('resultItem')
        resultTable.appendChild(p)
    }
}

formu.addEventListener('submit', (e) =>{
    e.preventDefault()

    const numValue = +number.value
    const multValue = +multiplication.value

    createTable(numValue, multValue)
})