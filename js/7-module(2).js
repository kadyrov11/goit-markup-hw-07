const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients')
ingredientsList.style.listStyle = 'none';
const getIngredientsList = ingredients =>  ingredients.map(
    ingredient => {
        const itemEl = document.createElement('li');
        itemEl.textContent = ingredient;
        return itemEl
    }
)
const itemValues = getIngredientsList(ingredients);
   ingredientsList.append(...itemValues);