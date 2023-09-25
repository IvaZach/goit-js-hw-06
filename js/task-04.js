/*
1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
3. Обновляй интерфейс новым значением переменной counterValue.*/

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
