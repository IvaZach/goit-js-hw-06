/*Напиши скрипт створення і очищення колекції елементів. Користувач вводить 
кількість елементів в input і натискає кнопку Створити, після чого рендериться 
колекція. Натисненням на кнопку Очистити, колекція елементів очищається. 

Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

1. Розміри найпершого <div> - 30px на 30px.

2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
3. Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб 
видаляючи всі створені елементи.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', inputAmount);
destroyBtnEl.addEventListener('click', destroyBoxes);

function inputAmount() {
  const amount = inputEl.value;
  createBoxes(amount);
  return;
}
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    boxesEl.innerHTML += `<div style="width: ${30 + i * 10}px; 
  height: ${30 + i * 10}px; 
  background-color:${getRandomHexColor()}"></div>`;
  }
}
function destroyBoxes() {
  inputEl.value = '';
  boxesEl.innerHTML = '';
}
