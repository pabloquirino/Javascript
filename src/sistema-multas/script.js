let number = window.document.querySelector('#number')
let answer = window.document.querySelector('#answer')
let plateOk = window.document.querySelector('#ok')
let plateStop = window.document.querySelector('#stop')
let plateAttention = window.document.querySelector('#attention')

function verificar() {

    let vel = number.value

    if (vel.length == 0) {

        answer.innerHTML = '[ERROR!]' 
        plateStop.classList.add('hidden')
        plateOk.classList.add('hidden')
        plateAttention.classList.add('hidden')

        // alert() aparece após alteração no html
        setTimeout(function() {
            window.alert(`Digite sua velocidade!!`)
        }, 100)
      
    } 
    
    else if (vel <= 0) {

        answer.innerHTML = '[ERROR!]'
        plateStop.classList.add('hidden')
        plateOk.classList.add('hidden')
        plateAttention.classList.add('hidden')

        // alert() aparece após alteração no html
        setTimeout(function() {
            window.alert(`Velocidade inválida!`)
        }, 100)

    }
    
    else {

        if (vel < 100) {
            answer.innerHTML = (`Sua velocidade é de ${vel}Km/h e você está abaixo do limite da via!`)
            plateOk.classList.remove('hidden')
            plateStop.classList.add('hidden')
            plateAttention.classList.add('hidden')
        } 
           
        else if (vel == 100) {
            answer.innerHTML = (`Sua velocidade é de ${vel}Km/h e você está no limite da via!`)
            plateStop.classList.add('hidden')
            plateOk.classList.add('hidden')
            plateAttention.classList.remove('hidden')
        } 
           
        else {
            answer.innerHTML = (`Sua velocidade é de ${vel}Km/h e você está acima do limite da via!`)
            plateStop.classList.remove('hidden')
            plateOk.classList.add('hidden')
            plateAttention.classList.add('hidden')
        }

    }
}

function reload() {
    location. reload()
}
