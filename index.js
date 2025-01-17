import { catalogs } from "./catalog.js";

const catalogLink = document.getElementById("catalog");

const bag = document.getElementById("header_bag");

const renderCatalog = () => {
  const catalogsHtml = catalogs
    .map((catalog) => {
      return `<li class="catalog_link" key =${catalog.id}>
            <img src=${catalog.imgUrl}>
            <p class='stock'>Акция</p>
            <button class='detailed'>Подробнее</button>
            <h2 class='catalog_name' >${catalog.name}</h2>
            <span class='catalogPrice'>
            <p  class="catalog_price ">${catalog.price}</p>
            <p class="catalog_oldPrice">${catalog.oldPrice}</p>
            </span>
            </li>`;
    })
    .join("");

  catalogLink.innerHTML = catalogsHtml;

  //   oldPrices.forEach((e) => e.addEventListener("click", () => handl));

  const oldPrices = document.querySelectorAll(".catalog_oldPrice");
  const prices = document.querySelectorAll(".catalog_price");
  const stocks = document.querySelectorAll(".stock");

  for (let i = 0; i < oldPrices.length; i++) {
    console.log(oldPrices[i]);
    console.log(stocks[i]);
    oldPrices.forEach((oldPrice) => {
      oldPrice[i] !== ""
        ? (stocks[i].style.display = "block")
        : (stocks[i].style.display = "none");
    });

    //     let old =
    //       oldPrices[i]
    //         ? (prices[i].style.color = "red")
    //         : (prices[i].style.color = "black");
    //     let stock =
    //      !oldPrices[i]
    //         ? (stocks[i].style.display = "none")
    //         : (stocks[i].style.display = "block")
  }
};

renderCatalog();
