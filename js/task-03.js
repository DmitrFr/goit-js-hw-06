const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//using createElement
//
// const makeListElementMarkup = function ({ url, alt }) {
//   const listEl = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageEl.setAttribute("src", url);
//   imageEl.setAttribute("alt", alt);
//   listEl.append(imageEl);
//   return listEl;
// };

// const makeGalleryMarkup = images.map(makeListElementMarkup);

// const galleryEl = document.querySelector(".gallery");
// galleryEl.append(...makeGalleryMarkup);

//using Template literals
//
const makeListElementMarkup = function ({ url, alt }) {
  return `
  <li>
    <img src=${url} alt=${url}>
  </li>`;
};

const makeGalleryMarkup = images.map(makeListElementMarkup).join("");

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeGalleryMarkup);
