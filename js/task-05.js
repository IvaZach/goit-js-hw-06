/*Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".*/

let inputNameEl = document.querySelector('#name-input');
const nameTypeEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', typeName);

function typeName(evn) {
  inputNameEl = evn.currentTarget.value;
  inputNameEl === '' ? (nameTypeEl.innerText = 'Anonymous') : (nameTypeEl.innerText = inputNameEl);
}
