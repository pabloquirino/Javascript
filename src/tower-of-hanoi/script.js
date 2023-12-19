const rangeInput = document.querySelector('#rangeInput')
const rangeValue = document.querySelector('#rangeValue')

rangeInput.addEventListener('input', () => {

  const numElements = Number(rangeInput.value)
  rangeValue.textContent = rangeInput.value

  let perfectMovement = window.document.querySelector('#perfectMovement')

  switch (numElements) {

    case 2:
      perfectMovement.innerHTML = `| minimum amount of movements: 3`
    break;
    
    case 3:
      perfectMovement.innerHTML = `| minimum amount of movements: 7`
    break;

    case 4:
      perfectMovement.innerHTML = `| minimum amount of movements: 15`
    break;

    case 5:
      perfectMovement.innerHTML = `| minimum amount of movements: 31`
    break;
    
  }

  //ocultar discos
  const elements = document.querySelectorAll('[class^="bg-"]')
  for (let i = 4; i >= numElements; i--) {
    elements[i].style.display = 'none'
  }
  
  //mostrar discos
  for (let i = 0; i < numElements; i++) {
    elements[i].style.display = 'block'
  }

})

window.document.querySelector('.reset').addEventListener('click', () => {
  location.reload()
})

let draggedItem

function drag(event) {
  event.dataTransfer.setData('text/plain', event.target.id)
}

function allowDrop(event) {
  event.preventDefault()
}

function drop(event) {
  event.preventDefault()

  const data = event.dataTransfer.getData('text/plain')
  const draggedElement = document.getElementById(data)
  const dropzone = event.target

  if (dropzone.classList.contains('dropzone')) {
    const topDisk = dropzone.firstChild

    dropzone.insertBefore(draggedElement, topDisk) //inserindo elemento arastável antes do primeiro filho existente

    //verifica se o disco movido é maior que o disco no topo
    if (draggedElement.clientWidth > topDisk.clientWidth) {
      alert(`Movimento inválido!`)
      location.reload()
    } 
   
    
  }
}
