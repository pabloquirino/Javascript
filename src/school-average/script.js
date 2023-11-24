let num = window.document.querySelector('#numTEXT')
let list = window.document.querySelector('#list')
let answer = window.document.querySelector('#answer')
let score = [ ]

function isNumber(n) {

    if (Number(n) >= 0 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }

}

function add() {

    if (isNumber(num.value) && !num.value.length == 0) {

        score.push(Number(num.value)) // adc número no array
        let item = window.document.createElement('option')// criar um option
        item.text = `Value ${num.value} added` // texto do option
        list.appendChild(item) // inserir option criado dentro da lista

    }

    else {

        alert(`[ERROR] Invalid value!`)

    }

    num.value = ''
    num.focus()

}

function test() {

    if (score.length == 0) {
        alert(`Add values in list`)
    }

    else {

        let sum = 0

        for(let index in score) {
            sum += score[index]
        }
        
        answer.innerHTML = `<p>Your list has ${score.length} numbers</p>`

        score.sort()
        answer.innerHTML += `<p>The smallest score is ${score[0]}</p>`
        answer.innerHTML += `<p>The largest score is ${score[score.length - 1]}</p>`

        answer.innerHTML += `<p>The sum of all values is: ${sum}</p>`

        answer.innerHTML += `<p>The average of all values is: ${sum / score.length}</p>`

    }

}