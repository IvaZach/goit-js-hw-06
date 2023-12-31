/*Напиши скрипт, який реагує на зміну значення input#font-size-control
 (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість
  font-size. В результаті, перетягуючи повзунок, 
  буде змінюватися розмір тексту.*/

const fontSizeEl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');
fontSizeEl.addEventListener('input', sizeChanged);

function sizeChanged() {
  textSpan.style.fontSize = fontSizeEl.value + 'px';
}
