const input = document.getElementById('validation-input')
input.addEventListener('blur', isValid)
input.addEventListener('input', isTyping)

function isValid() {
    if (this.value.length === +this.dataset.length) {
        this.classList.add('valid')
        this.classList.remove('invalid')
    } else {
        this.classList.remove('valid')
        this.classList.add('invalid')
    }
    console.log(input.length);
}
function isTyping() {
    this.classList.remove('invalid')
    this.classList.remove('valid')
}