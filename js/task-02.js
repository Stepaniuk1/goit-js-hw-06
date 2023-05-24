const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elements = document.querySelector("#ingredients");

const itemList = ingredients.map((el) => {
  const element = document.createElement("li");
  element.textContent = el;
  element.classList.add("item");

  return element;
});

elements.append(...itemList);
