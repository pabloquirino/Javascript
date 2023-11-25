let display = window.document.querySelector('#display')

function addToDisplay(value) {

    display.innerHTML += value

}

function clearDisplay() {

    display.textContent = ''

}

function calculateResult() {

    const displayValue = display.textContent
    let result = ''

    try {
        result = eval(displayValue)
    }

    catch (error) {
        result = 'ERROR'
    }

    display.innerHTML = `${result}`

}