const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*Напиши скрипт, який для кожного елемента масиву ingredients:

1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
2. Додасть назву інгредієнта як його текстовий вміст.
3. Додасть елементу клас item.
4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.*/

const ulIngredients = document.querySelector('ul#ingredients');
const liIngredients = ingredients.map(ingredient =>{
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item'); 
  return liEl
})
ulIngredients.append(...liIngredients)





