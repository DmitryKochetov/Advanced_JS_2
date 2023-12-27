"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальное id, для упрощения, используем 
`Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    id: Date.now(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: Date.now() + 1,
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now() + 1,
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: Date.now() + 2,
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now() + 2,
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

console.log(initialData);
let reviewList;

const wrapper = document.querySelector(".wrapper");

function renderItem(product, reviews, id) {
  reviewList = "";
  for (let review of reviews) {
    reviewList += `<p class = "product-item__review">${review.text}</p>`;
  }
  return `
    <div class="product-item">
        <h3>${product}</h3>
        ${reviewList}
    </div>
    <input type="text" class="product-item__input" />
    <button class="product-item__button" id="${id}">Добавить</button>
    <div>${id}</div>
    <div class="product-item__error-feedback"></div>
  `;
}

function renderProductsList(list) {
  let productsList = list
    .map((item) => renderItem(item.product, item.reviews, item.id))
    .join("");
  document.querySelector(".wrapper").innerHTML = productsList;
}

renderProductsList(initialData);


let buttonEl = document.querySelectorAll(".product-item__button");
let divElError = document.querySelectorAll(".product-item__error-feedback");
let productsList = document.querySelectorAll(".product-item");

wrapper.addEventListener("click", (e) => {
  let target = e.target;
  
  if (e.target.classList.contains("product-item__button")) {

    
    clickHandler(target);
  }
});

function clickHandler(target) {
  let targetIndex = initialData.findIndex((item) => item.id == target.id);
  console.log(targetIndex);
  let inputEl = document.querySelectorAll(".product-item__input");
  let feedback = inputEl[targetIndex].value;
  console.log(feedback);

  if (!(feedback.length >= 5 && feedback.length <= 500)) {
    console.log(
      "Отзыв должен быть не менее 5 символов и не более 500 символов"
    );
  }

  initialData[targetIndex].reviews.push({ id: Date.now(), text: feedback });

  renderProductsList(initialData);
}
