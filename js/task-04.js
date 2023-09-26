/*
1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
3. Оновлюй інтерфейс новим значенням змінної counterValue.*/

const counterValue = {
  value: 0,

  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('#counter').firstElementChild;
const incrementEl = document.querySelector('#counter').lastElementChild;

decrementEl.addEventListener('click', function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementEl.addEventListener('click', function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
