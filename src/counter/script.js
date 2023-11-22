function count() {

    let startTEXT = window.document.querySelector('#start').value
    let endTEXT = window.document.querySelector('#end').value
    let stepTEXT = window.document.querySelector('#step').value
    let answer = window.document.querySelector('#answer')
    
    let start = Number(startTEXT)
    let end = Number(endTEXT)
    let step = Number(stepTEXT)

    answer.innerHTML = `counting.. `
    answer.classList.remove('text-gray-500')
    
    if (start < end) {
        
        while (start <= end) {
            answer.innerHTML += `${start} `
            start += step
        }

    }

    else {

        while (start >= end) {
            answer.innerHTML += `${start} `
            start -= step
        }

    }

}
