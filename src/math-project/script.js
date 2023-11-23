let num = window.document.querySelector('#TEXTnum') 
let radOp = window.document.getElementsByName('radOp') 
let answer = window.document.querySelector('#answer')

function generate() {
    
    let radio = false

    for (i = 0; i < radOp.length; i++) { 
        if (radOp[i].checked) {
            radio = true
        }
    }

    if (num.value.length == 0 || radio === false) { 
        window.alert('[ERROR] preencha os dados!')
    }

    else {

        if (radOp[0].checked) {

            answer.innerHTML = ''

            for (i = 1; i <= 10; i++) {
                res = Number(num.value) + i 
                answer.innerHTML += (`${num.value} + ${i} = ${res} <br>`)
           }

        }

        else if (radOp[1].checked) {

            answer.innerHTML = ''

            for (i = 1; i <= 10; i++) {
                res = Number(num.value) - i 
                answer.innerHTML += (`${num.value} - ${i} = ${res} <br>`)
           }

        }

        else if (radOp[2].checked) {

            answer.innerHTML = ''

            for (i = 1; i <= 10; i++) {
                res = Number(num.value) * i 
                answer.innerHTML += (`${num.value} * ${i} = ${res} <br>`)
           }

        }

        else {

            answer.innerHTML = ''

            for (i = 1; i <= 10; i++) {
                res = Number(num.value) / i 
                answer.innerHTML += (`${num.value} : ${i} = ${res.toFixed(2)} <br>`)
           }
        
        }
    }

}
