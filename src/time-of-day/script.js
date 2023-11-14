let text = window.document.querySelector('#text')
let img = window.document.querySelector('#img')
let body = window.document.querySelector('#body')

let now = new Date()
let hour = now.getHours()

 if (hour > 5 && hour < 12) {

    text.innerHTML = `Bom dia são ${hour} horas.`
    img.src = 'img/manha.png'
    body.classList.add('bg-manha')

}

else if (hour > 11 && hour < 18) {

    text.innerHTML = `Boa tarde são ${hour} horas.`
    img.src = 'img/tarde.png'
    body.classList.add('bg-tarde')

}

else if (hour > 17) {

    text.innerHTML = `Boa noite são ${hour} horas.`
    img.src = 'img/noite.png'
    body.classList.add('bg-noite')

}

else {

    text.innerHTML = `Boa madrugada são ${hour} horas.`
    img.src = 'img/madrugada.png'
    body.classList.add('bg-madrugada')

} 