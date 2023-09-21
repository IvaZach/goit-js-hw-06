// 1. Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.

const liEls = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liEls.length}`);

// 2. Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoryEl = liEls.forEach(liEl => {
  const titleEl = liEl.querySelector('h2').textContent;
  const listEL = liEl.querySelectorAll('ul >li');
  console.log(`\n`);
  console.log(`Category: ${titleEl} \n Elements: ${listEL.length}`);
});
