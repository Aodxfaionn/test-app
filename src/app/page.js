"use client";
import "../assets/styles/normalize.css";
import "../assets/styles/style.scss";
import Image from "next/image";
import info from "../assets/img/info-bg.png";
import partners1 from "../assets/img/partners-1.png";
import partners2 from "../assets/img/partners-2.png";
import partners3 from "../assets/img/partners-3.png";
import balance from "../assets/img/balance-img.jpg";
import howWork from "../assets/img/howWork-img.png";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
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
          else
            link = document.querySelector(`.desktopNav a[href="#${item.id}"]`);
          if (link != null) {
            let rect = item.getBoundingClientRect();
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
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
  }, []);
  return (
    <>
      <div className="img-bg">
        <Image src={info} />
      </div>
      <header className="header">
        <div className="container">
          <p className="header__logo logo">LOGO</p>
          <nav className="desktopNav">
            <ul className="header__nav nav">
              <li className="nav__item">
                <a href="#balans">Преимущества</a>
              </li>
              <li className="nav__item">
                <a href="#howWork">Как работаем</a>
              </li>
            </ul>
          </nav>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="burger-open"
          >
            <rect
              x="1"
              y="1"
              width="42"
              height="42"
              rx="9"
              stroke="#FF5900"
              strokeWidth="2"
            />
            <path
              d="M11.4783 14H33"
              stroke="#FF5900"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11.4783 22H33"
              stroke="#FF5900"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M11.4783 30H33"
              stroke="#FF5900"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div className="mobileMenu">
            <p className="header__logo logo">LOGO</p>
            <div className="burger burger-close">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.00716 0.592606C1.61663 0.202082 0.983466 0.202082 0.592942 0.592606C0.202418 0.983131 0.202418 1.6163 0.592942 2.00682L7.49504 8.90892L0.593186 15.8108C0.202662 16.2013 0.202662 16.8345 0.593186 17.225C0.983711 17.6155 1.61688 17.6155 2.0074 17.225L8.90926 10.3231L15.8111 17.225C16.2016 17.6155 16.8348 17.6155 17.2253 17.225C17.6158 16.8345 17.6158 16.2013 17.2253 15.8108L10.3235 8.90892L17.2256 2.00682C17.6161 1.6163 17.6161 0.983133 17.2256 0.592608C16.835 0.202084 16.2019 0.202084 15.8114 0.592608L8.90926 7.49471L2.00716 0.592606Z"
                  fill="#FF5900"
                />
              </svg>
            </div>
            <nav className="mobileNav">
              <ul className="header__nav nav">
                <li className="nav__item">
                  <a href="#balans">Преимущества</a>
                </li>
                <li className="nav__item">
                  <a href="#howWork">Как работаем</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="info" id="info">
          <div className="container">
            <h1 className="title-one">
              Монетизируйте клиентскую базу, не снижая NPS
            </h1>
            <p className="info__desc">
              Найдите идеальный баланс выручки и удовлетворённости пользователей
              с платформой рекламной монетизации
            </p>
            <a href="#forma" className="info__btn btn btn-orange">
              Заказать звонок
            </a>
          </div>
        </section>
        <section className="additional" id="additional">
          <div className="container">
            <h2 className="title-two">
              Дополнительные источники выручки для разных компаний
            </h2>
            <div className="tab">
              <div className="tab__title">
                <button className="btn btn-active" data-name="operator">
                  <span>Операторам</span>
                </button>
                <button className="btn" data-name="service">
                  <span>ОТТ сервисам</span>
                </button>
                <p className="line"></p>
              </div>
              <div className="tab__text operator active">
                Найдите идеальный баланс выручки и удовлетворённости
                пользователей с платформой рекламной монетизации
              </div>
              <div className="tab__text service">
                Дополнительные возможности обогащения данных об аудитории и
                монетизации
              </div>
            </div>
          </div>
        </section>
        <section className="balans" id="balans">
          <div className="container">
            <h2 className="title-two">
              Баланс между выручкой и удовлетворённостью пользователей
            </h2>
            <div className="balans__flex">
              <div className="balans__left">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="12" fill="#FF5900" />
                  <path
                    d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                    fill="white"
                  />
                </svg>
                <h3 className="title-three">Частотность под контролем</h3>
                <p>Чтобы не ронять NPS и не увеличивать отток пользователей</p>
              </div>
              <div className="balans__img">
                <div className="balans__img-bg">
                  <Image src={balance} alt="Баланс" />
                </div>
              </div>
              <div className="balans__right">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="12" fill="#FF5900" />
                  <path
                    d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                    fill="white"
                  />
                </svg>
                <h3 className="title-three">Максимальная выручка</h3>
                <p>За счёт заполенения всех рекламных мест по высокой цене</p>
              </div>
            </div>
          </div>
        </section>
        <section className="partners" id="partners">
          <div className="container">
            <h2 className="title-two">Наши партнёры по монетизации</h2>
            <ul className="partners__list">
              <li className="partners-one">
                <Image src={partners1} alt="Партнер" />
              </li>
              <li className="partners-two">
                <Image src={partners2} alt="Партнер" />
              </li>
              <li className="partners-three">
                <Image src={partners3} alt="Партнер" />
              </li>
            </ul>
          </div>
        </section>
        <section className="howWork" id="howWork">
          <div className="container">
            <h2 className="title-two">
              Подробные отчёты для вас и правообладателей
            </h2>
            <ul className="howWork__list">
              <li className="howWork__list__item">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="12" fill="#FF5900" />
                  <path
                    d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                    fill="white"
                  />
                </svg>
                <p>
                  Выручка, CTR, показы и другие показатели в реальном времени.
                </p>
              </li>
              <li className="howWork__list__item">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="12" fill="#FF5900" />
                  <path
                    d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                    fill="white"
                  />
                </svg>
                <p>Инструменты контроля качества трафика.</p>
              </li>
              <li className="howWork__list__item">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="12" fill="#FF5900" />
                  <path
                    d="M11.4697 19.4698C11.1768 19.7627 11.1768 20.2376 11.4697 20.5305C11.7626 20.8233 12.2374 20.8233 12.5303 20.5305L11.4697 19.4698ZM20.75 12.0001C20.75 11.5859 20.4142 11.2501 20 11.2501H13.25C12.8358 11.2501 12.5 11.5859 12.5 12.0001C12.5 12.4143 12.8358 12.7501 13.25 12.7501H19.25V18.7501C19.25 19.1643 19.5858 19.5001 20 19.5001C20.4142 19.5001 20.75 19.1643 20.75 18.7501V12.0001ZM12.5303 20.5305L20.5303 12.5305L19.4697 11.4698L11.4697 19.4698L12.5303 20.5305Z"
                    fill="white"
                  />
                </svg>
                <p>
                  Ежемесячные автоматические отчёты для каждого правообладателя.
                </p>
              </li>
            </ul>
            <a href="#forma" className="btn btn-black-active">
              {" "}
              Заказать звонок{" "}
            </a>
          </div>
          <Image
            src={howWork}
            className="howWork__img"
            alt="Подробные отчёты для вас и правообладателей"
          />
        </section>
        <section className="forma" id="forma">
          <div className="container">
            <h2 className="title-two">Заполните форму</h2>
            <form className="form">
              <textarea
                name="text"
                id="text"
                placeholder="Напишите свой вопрос"
              ></textarea>
              <div>
                <div className="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="email__input"
                    placeholder="Введите e-mail"
                  />
                  <p className="email__error">Неправильно указана почта</p>
                </div>
                <div className="checkbox">
                  <div>
                    <input type="checkbox" name="agree" id="agree" />
                    <label htmlFor="agree"></label>
                  </div>
                  <p>
                    Я ознакомлен(а) с&nbsp;
                    <a href="/">политикой конфиденциальности</a> и согласен(на)
                    на обработку <a href="/">персональных данных</a>.
                  </p>
                </div>
                <button type="submit" className="btn btn-black-active">
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
