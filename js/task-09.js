/*Напиши скрипт, який змінює кольори фону елемента <body> 
через інлайн-стиль по кліку на button.change-color і 
виводить значення кольору в span.color.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
buttonEl.addEventListener('click', colorChanged);

function colorChanged() {
  const numberColor = getRandomHexColor();
  bodyEl.style.backgroundColor = numberColor;
  colorEl.innerHTML = numberColor;
}
