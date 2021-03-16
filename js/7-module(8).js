const controlInput = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]')
const clearBtn = document.querySelector('[data-action="destroy"]')

const mainContainer = document.getElementById('boxes')

createBtn.addEventListener('click', function () {
    createBoxes(controlInput.value)
})
function createBoxes(amount) {
    let containerSize = 30;
    const newContainerArray = [];

    for (let i = 1; i <= amount; i++) {
        const newContainer = document.createElement('div');
        newContainer.style.backgroundColor = `rgba(${ randomColor() }, ${ randomColor() }, ${ randomColor()})`;
        newContainer.style.height = `${containerSize}px`;
        newContainer.style.width = `${containerSize}px`;
        containerSize += 10;
        
        newContainerArray.push(newContainer)
    }

    mainContainer.append(...newContainerArray)

}
 
function randomColor() {
    return Math.floor(Math.random() * 256);
}

clearBtn.addEventListener('click', destroyBoxes)
function destroyBoxes() {
    mainContainer.innerHTML = '';
}