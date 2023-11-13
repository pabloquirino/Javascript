function atualizar() {

    //.toString().padStart(2, '0') -> preencher esquerda dos números do relógio até terem 1 dezena.
    const now = new Date()
    const hour = now.getHours().toString().padStart(2, '0')
    const min = now.getMinutes().toString().padStart(2, '0')
    const sec = now.getSeconds().toString().padStart(2, '0')
    
    const hourFormat = window.document.querySelector('#hour')
    const minFormat = window.document.querySelector('#min')
    const secFormat = window.document.querySelector('#sec')

    hourFormat.innerHTML = hour
    minFormat.innerHTML = min
    secFormat.innerHTML = sec

}

setInterval(atualizar,1000) //atualizar o relógio a cada 1000 milissegundos