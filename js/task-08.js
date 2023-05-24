const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);
const email = document.querySelector('input[name="email"]').value;
const password = document.querySelector('input[name="password"]').value;

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
