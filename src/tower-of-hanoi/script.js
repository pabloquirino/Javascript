const rangeInput = window.document.querySelector('#rangeInput')
const rangeValue = window.document.querySelector('#rangeValue')

rangeInput.addEventListener('input', function () {
  rangeValue.textContent = rangeInput.value;
})