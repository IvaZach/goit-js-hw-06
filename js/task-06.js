/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.
1.Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті 
data-length.
2.Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, 
які ми вже додали у вихідні файли завдання.*/

const textEl = document.querySelector('#validation-input');

textEl.addEventListener('input', textInputed);

function textInputed() {
  if (textEl.selectionEnd <= Number(textEl.dataset.length)) {
    textEl.classList.add('valid');
    textEl.classList.remove('invalid');
  } else {
    textEl.classList.add('invalid');
    textEl.classList.remove('valid');
  }
}
