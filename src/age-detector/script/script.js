function verificar() {

    let date = new Date()
    let yearNow = date.getFullYear()
    let year = window.document.querySelector('#year')
    let sex = window.document.getElementsByName('radsex')

    let radio = false

    for (i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            radio = true
        }
    }
    
    if (year.value.length == 0 || year.value > yearNow || radio === false) {

        window.alert(`[ERROR] Verifique seus dados!`)

    } 

    else {

        let img = window.document.querySelector('#img')
        let answer = window.document.querySelector('#answer')
        let age = yearNow - year.value 

        if (sex[0].checked) {
            
            if (age < 14) {
                answer.innerHTML = `detectamos uma criança de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/criança(m).jpg'
            }
            
            else if (age < 20) {
                answer.innerHTML = `detectamos um adolescente de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/adolescente(m).jpg'
            }
            
            else if (age < 60) {
                answer.innerHTML = `detectamos um adulto de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/adulto.jpg'
            }
            
            else {
                answer.innerHTML = `detectamos um idoso de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/idoso.jpg'
            }

        }

        else {
            
            if (age < 14) {
                answer.innerHTML = `detectamos uma criança de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/criança(f).jpg'
            }
            
            else if (age < 20) {
                answer.innerHTML = `detectamos uma adolescente de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/adolescente(f).jpg'
            }
            
            else if (age < 60) {
                answer.innerHTML = `detectamos uma adulta de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/adulta.jpg'
            }
            
            else {
                answer.innerHTML = `detectamos uma idosa de ${age} anos.`
                img.classList.remove('hidden')
                img.src = 'img/idosa.jpg'
            }

        }
    }
    
}

function limpar() {
    window.location.reload()
}