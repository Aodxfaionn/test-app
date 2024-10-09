// Бургерное меню
showmobilemenu();
function showmobilemenu() {
  const burgerOpen = document.querySelector(".burger-open"),
    mobileMenu = document.querySelector(".mobileMenu");
  burgerOpen.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    mobileMenu.addEventListener("click", closeMenu);
  });
  function closeMenu(e) {
    if (e.target.closest("a") || e.target.closest(".burger-close"))
      mobileMenu.classList.remove("active");
    mobileMenu.removeEventListener("click", closeMenu);
  }
}

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

// Якорные ссылки
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Выделение активной секции
window.addEventListener(
  "scroll",
  debounce(function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((item) => {
      let link;
      if (window.innerWidth < 1440)
        link = document.querySelector(`.mobileMenu a[href="#${item.id}"]`);
      else link = document.querySelector(`.desktopNav a[href="#${item.id}"]`);
      if (link != null) {
        window.scrollY >= item.offsetTop &&
        window.scrollY < item.offsetTop + item.offsetHeight
          ? link.classList.add("active")
          : link.classList.remove("active");
      }
    });
  }, 300)
);

// Для улучшения производительности
function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    let later = function () {
      clearTimeout(timeout);
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
