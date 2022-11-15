//Знаходимо елементи на сторінці(мінус,плюс,лічильник)
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");
// Шукаємо клік на кнопку btnMinus
btnMinus.addEventListener("click", function () {
  // Перевіряємо,щоб лічильник був більше одиниці
  if (parseInt(counter.innerText) > 1) {
    // Змінюємо  текст в лічильнику зменшуючи його на 1
    counter.innerText = --counter.innerText;
  }
});
// Шукаємо клік на кнопку btnPlus
btnPlus.addEventListener("click", function () {
  // Змінюємо  текст в лічильнику збільшуючи його на 1
  counter.innerText = ++counter.innerText;
});
