// Бургерное меню
// showmobilemenu();
// function showmobilemenu() {
//   const menu = document.querySelector(".mobileMenu"),
//     nav = document.querySelector(".nav");
//   menu.addEventListener("click", function () {
//     menu.classList.toggle("active");
//     nav.classList.toggle("active");
//   });
// }

// Табы
showTabs();
function showTabs() {
  const tabNav = document.querySelectorAll(".tab__title button"),
    tabContent = document.querySelectorAll(".tab__text");
  let tabName;
  tabNav.forEach((item) => item.addEventListener("click", selectTabNav));
  function selectTabNav() {
    tabNav.forEach((item) => item.classList.remove("btn-active"));
    this.classList.add("btn-active");
    tabName = this.dataset.name;
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
}

// Валидация формы
const form = document.querySelector(".form");
checkForm(form);

function checkForm(forma) {
  const btn = forma.querySelector("button");
  checkFormField(forma);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

function checkFormField(forma) {
  const emailInput = forma.querySelector(".email__input");
  const validateEmail = () => {
    const pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if (emailInput.value.match(pattern))
      emailInput.nextElementSibling.classList.remove("active");
    else emailInput.nextElementSibling.classList.add("active");
  };
  emailInput.addEventListener("change", validateEmail);
}
