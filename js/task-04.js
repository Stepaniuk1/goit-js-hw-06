const value = document.querySelector("#value");
const removeFigureBtn = document.querySelector(
  'button[data-action="decrement"]'
);
const addFigureBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function addClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

function removeClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

addFigureBtn.addEventListener("click", addClick);
removeFigureBtn.addEventListener("click", removeClick);
