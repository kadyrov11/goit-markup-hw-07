const value = document.getElementById('value')
let valueCounter = 0;

const decrementBtn = document.querySelector('#counter [data-action = "decrement"]');
const incrementBtn = document.querySelector('#counter [data-action = "increment"]');

decrementBtn.addEventListener('click', handleDecrAction);

function handleDecrAction() {
    if (valueCounter !== 0) {
        valueCounter -= 1;
        value.textContent = valueCounter;
        return value;
    }
}
incrementBtn.addEventListener('click', handleIncrAction);


function handleIncrAction() {
    valueCounter += 1;
    value.textContent = valueCounter;
   
}