const rangeInput = document.querySelector('#rangeInput')
const rangeValue = document.querySelector('#rangeValue')

rangeInput.addEventListener('input', function () {
  rangeValue.textContent = rangeInput.value
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

  if (event.target.classList.contains('dropzone')) {
    event.target.appendChild(draggedElement)
  }
}