const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// using for
//
// const makeListItems = (options) => {
//   const elements = [];
//   for (let i = 0; i < ingredients.length; i++) {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = ingredients[i];
//     itemEl.classList.add("item");
//     elements.push(itemEl);
//   }
//   return elements;
// };
//
// const listEl = document.querySelector("#ingredients");
// const elements = makeListItems(ingredients);
// listEl.append(...elements);

//using map

const listEl = document.querySelector("#ingredients");

const makeListItems = (options) => {
  return options.map((option) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = option;
    itemEl.classList.add("item");
    return itemEl;
  });
};

const elements = makeListItems(ingredients);
listEl.append(...elements);
