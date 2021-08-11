const input = document.querySelector(".input");
const buttonDecr = document.querySelector(".decr");
const buttonIncr = document.querySelector(".incr");

const INITIAL_VALUE = 0;

init();

function init() {
  input.value = INITIAL_VALUE;
  checkInputValue();

  buttonDecr.addEventListener("click", () => buttonHandler("-"));
  buttonIncr.addEventListener("click", () => buttonHandler("+"));
  input.addEventListener("change", () => checkInputValue());
  input.addEventListener("input", () => {
    validateInput();
    checkInputValue();
  });
  input.addEventListener("keyup", (event) => checkNumber(event));
}

function buttonHandler(direction) {
  if (direction === "+") {
    input.value++;
    checkInputValue();
  } else {
    input.value--;
    checkInputValue();
  }
}

function checkInputValue() {
  if (+input.value === 100) {
    buttonIncr.setAttribute("disabled", true);
  } else if (+input.value === 0) {
    buttonDecr.setAttribute("disabled", true);
  } else {
    buttonIncr.removeAttribute("disabled");
    buttonDecr.removeAttribute("disabled");
  }
}

function validateInput() {
  if (input.value > 0) {
    input.value = parseInt(+input.value, 10);
  }
  if (+input.value > 100) input.value = 100;
  if (+input.value < 0) input.value = 0;
}

function checkNumber(event) {
  const key = event.key.toLowerCase();
  const isNumber = key >= "0" && key <= "9";

  if (!isNumber) input.value = "";
}
