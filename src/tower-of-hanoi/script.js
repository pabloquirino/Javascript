const rangeInput = document.getElementById('rangeInput')
const rangeValue = document.getElementById('rangeValue')

rangeInput.addEventListener('input', function () {
  rangeValue.textContent = rangeInput.value
})
