"use strict";

import * as usefulFunctions from "./components/functions.js"; // Полезные функции
import maskInput from "./forms/input-mask.js"; // Маска ввода для форм
import quantity from "./forms/quantity.js"; // input number
import fileField from "./forms/file-field.js"; // Select
import mobileNav from "./components/mobile-nav.js"; // Мобильное меню
import collapse from "./components/collapse.js"; // Сворачиваемые блоки
import tabs from "./components/tabs.js"; // Tabs
import Rating from "./components/rating.js"; // Rating plugin
import Spoilers from "./components/spoilers.js";
import Dropdown from "./components/dropdown.js";
import Select from "./components/select.js"; // Select
import SimpleBar from "simplebar"; // Кастомный скролл
import Choices from "choices.js"; // Select plugin
import { Fancybox } from "@fancyapps/ui"; // Fancybox modal gallery
import Sliders from "./components/sliders.js";
import AOS from "aos";

// Проверка поддержки webp
usefulFunctions.isWebp();

// Добавление класса после загрузки страницы
usefulFunctions.addLoadedClass();

// Добавление класса touch для мобильных
usefulFunctions.addTouchClass();

// Mobile 100vh
usefulFunctions.fullVHfix();

// Плавный скролл
usefulFunctions.SmoothScroll("[data-anchor]");

// Вкладки (tabs)
tabs();

// Сворачиваемые блоки
collapse();

// Маска для ввода номера телефона
maskInput('input[name="phone"]');

// input Number
quantity();

// Меню для мобильной версии
mobileNav();

// Spoilers
Spoilers();

// Dropdown
Dropdown();

// Rating
Rating();

// Select Dropdown
Select();

fileField();

Sliders();

// Custom Select
document.querySelectorAll(".pretty-select").forEach((el) => {
  const prettySelect = new Choices(el, {
    allowHTML: true,
    searchEnabled: false,
  });
});

// Custom Scroll
// Добавляем к блоку атрибут data-simplebar
// Также можно инициализировать следующим кодом, применяя настройки

if (document.querySelectorAll("[data-simplebar]").length) {
  document.querySelectorAll("[data-simplebar]").forEach((scrollBlock) => {
    new SimpleBar(scrollBlock, {
      autoHide: false,
    });
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-chapter-toggle]")) {
    event.target.closest("[data-chapter]").classList.toggle("open");
  }
});

// Modal Fancybox
Fancybox.bind("[data-fancybox]", {
  autoFocus: false,
  Thumbs: {
    type: "classic",
  },
});

/* Модуль работы с ползунком */
/*
Документация плагина: https://refreshless.com/nouislider/ */
import "./forms/range.js";

// Sliders
import "./components/sliders.js";

// Animation
AOS.init({
  duration: 1000,
});
