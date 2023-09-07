let counterValue = 0;

const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");

const decrementValue = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const incrementValue = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

buttonDecrementEl.addEventListener("click", decrementValue);
buttonIncrementEl.addEventListener("click", incrementValue);
