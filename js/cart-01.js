const cartWrapper = document.querySelector(".cart-wrapper");

// шукаємо клік
window.addEventListener("click", function (event) {
  // вибиває атрибут тієї кнопки + дивимся чи це та з якою ми працюємо
  if (event.target.hasAttribute("data-cart")) {
    // находимо карту по якій був клік
    const card = event.target.closest(".card");
    // Збираємо дані  у виді обєкта
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };
    // Підставляєм наш продакт інфо в шаблон
    const cartItemHTML = `							<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${productInfo.imgSrc}" alt="123">
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="${productInfo.itemsInBox} / ${productInfo.weight}">6 шт. / 205г.</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${productInfo.counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price}</div>
          </div>

        </div>
        <!-- // cart-item__details -->

      </div>
    </div>
  </div>`;
    // відображаєм товар в корзині
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
  }
});
