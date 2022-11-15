window.addEventListener("click", function (event) {
  // це перемінна для лічильника
  let counter;
  // це строго клік по кнопками яких нам треба
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // нашли родителя
    const counterWrapper = event.target.closest(".counter-wrapper");
    // нашли counter всередині родителя
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === "minus") {
    // Перевіряємо,щоб лічильник був більше одиниці
    if (parseInt(counter.innerText) > 1) {
      // Змінюємо  текст в лічильнику зменшуючи його на 1
      counter.innerText = --counter.innerText;
    }
  }
});
