const input = document.querySelector("#validation-input");
const inputA = document.querySelector('[data-length="6"]');

input.addEventListener("blur", () => {
  const inputValue = input.value;

  if (inputValue.length === parseInt(inputA.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
