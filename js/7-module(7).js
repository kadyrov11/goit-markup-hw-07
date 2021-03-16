const fsControler = document.getElementById('font-size-control');
const controledText = document.getElementById('text')

fsControler.addEventListener('input', changeFontSize)
function changeFontSize() {
    controledText.style.fontSize = `${this.value}px`
}