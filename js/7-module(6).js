const input = document.getElementById('validation-input')
input.addEventListener('blur', isValid)
input.addEventListener('input', isTyping)

function isValid() {
    if (input.value.length <= this.dataset.length && input.value.length > 0 && input.value !== ' ') {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.remove('valid')
        input.classList.add('invalid')
    }
    console.log(input.length);
}
function isTyping() {
    input.classList.remove('invalid')
    input.classList.remove('valid')
}