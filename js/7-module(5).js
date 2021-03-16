const nameInput = document.getElementById('name-input')
const typingName = document.getElementById('name-output')

nameInput.addEventListener('input', getName)
function getName() {
    typingName.textContent = nameInput.value
    if (nameInput.value === '') {
        typingName.textContent = 'незнакомец'
    }
}