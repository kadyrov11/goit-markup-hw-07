
const categories = document.getElementById('categories');
const items = categories.children
console.log(`В списке ${items.length} категории.`);

for (const item of items) {
    const title = item.querySelector('h2').textContent;
    const elCount = item.querySelectorAll('li').length;
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${elCount}`);
    
}