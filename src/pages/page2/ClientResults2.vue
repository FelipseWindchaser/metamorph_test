<template>
  <section class="client-results">
    <h3 class="client-results__title">результаты наших клиентов</h3>
    <div class="client-results__slider">
      <button
        class="client-results__slider-arrow client-results__slider-left-arrow"
      >
        <img
          src="../../../static/img/page2-images/unoptimized/left-arrow.svg"
        />
      </button>
      <button
        class="client-results__slider-arrow client-results__slider-right-arrow"
      >
        <img
          src="../../../static/img/page2-images/unoptimized/right-arrow.svg"
        />
      </button>
      <div class="client-results__slider-pagination">
        <div class="client-results__slider-pagination-dot active-dot"></div>
        <div class="client-results__slider-pagination-dot"></div>
        <div class="client-results__slider-pagination-dot"></div>
        <div class="client-results__slider-pagination-dot"></div>
        <div class="client-results__slider-pagination-dot"></div>
      </div>
      <swiper
        :observer="true"
        :observeParents="true"
        :slidesPerView="1"
        :speed="500"
        :modules="[Navigation, Pagination]"
        :pagination="{ clickable: true }"
        :spaceBetween="5"
        :breakpoints="{
          1024: {
            spaceBetween: 10,
          },
          1220: {
            spaceBetween: 20,
          },
        }"
        :navigation="{
          prevEl: '.client-results__slider-left-arrow',
          nextEl: '.client-results__slider-right-arrow',
        }"
      >
        <swiper-slide>
          <div class="client-results__slide">
            <div class="client-results__slide-cards">
              <div class="client-results__slide-description">
                <p class="client-results__slide-title">
                  Товары для дома и дачи
                </p>
                <p class="client-results__slide-text">
                  Крупный оптовый поставщик товаров для дома и строительства в
                  торговые сети DIY, Леруа Мерлен, Obi и другие.
                </p>
              </div>
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Задачи</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Увеличить продажи
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Скорректировать ассортимент
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить рекламные кампании
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить личный кабинет для увеличения эффективности
                    процесса продаж
                  </li>
                </ul>
              </div>
            </div>
            <div class="client-results__slide-cards">
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">На старте</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Начало работы – февраль
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 419
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка = 299 429 руб.
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Заказы = 236 шт.
                  </li>
                </ul>
              </div>

              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Результат</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Количество заказов увеличилось до 1167 шт., рост на 494%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка за май 2023 составила 1 431 964 руб., рост на 478%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    В 18 раз увеличилось количество показов товара
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 471
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Подключение модели FBY и Экспресс
                  </li>
                  <li class="client-results__slide-card-list-item">
                    ДРР в разрезе 2-х недель снизилось с 6.14 % до 0.99%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="client-results__slide">
            <div class="client-results__slide-cards">
              <div class="client-results__slide-description">
                <p class="client-results__slide-title">
                  Товары для дома и дачи
                </p>
                <p class="client-results__slide-text">
                  Крупный оптовый поставщик товаров для дома и строительства в
                  торговые сети DIY, Леруа Мерлен, Obi и другие.
                </p>
              </div>
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Задачи</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Увеличить продажи
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Скорректировать ассортимент
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить рекламные кампании
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить личный кабинет для увеличения эффективности
                    процесса продаж
                  </li>
                </ul>
              </div>
            </div>
            <div class="client-results__slide-cards">
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">На старте</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Начало работы – февраль
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 419
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка = 299 429 руб.
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Заказы = 236 шт.
                  </li>
                </ul>
              </div>

              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Результат</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Количество заказов увеличилось до 1167 шт., рост на 494%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка за май 2023 составила 1 431 964 руб., рост на 478%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    В 18 раз увеличилось количество показов товара
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 471
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Подключение модели FBY и Экспресс
                  </li>
                  <li class="client-results__slide-card-list-item">
                    ДРР в разрезе 2-х недель снизилось с 6.14 % до 0.99%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="client-results__slide">
            <div class="client-results__slide-cards">
              <div class="client-results__slide-description">
                <p class="client-results__slide-title">
                  Товары для дома и дачи
                </p>
                <p class="client-results__slide-text">
                  Крупный оптовый поставщик товаров для дома и строительства в
                  торговые сети DIY, Леруа Мерлен, Obi и другие.
                </p>
              </div>
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Задачи</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Увеличить продажи
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Скорректировать ассортимент
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить рекламные кампании
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить личный кабинет для увеличения эффективности
                    процесса продаж
                  </li>
                </ul>
              </div>
            </div>
            <div class="client-results__slide-cards">
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">На старте</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Начало работы – февраль
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 419
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка = 299 429 руб.
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Заказы = 236 шт.
                  </li>
                </ul>
              </div>

              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Результат</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Количество заказов увеличилось до 1167 шт., рост на 494%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка за май 2023 составила 1 431 964 руб., рост на 478%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    В 18 раз увеличилось количество показов товара
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 471
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Подключение модели FBY и Экспресс
                  </li>
                  <li class="client-results__slide-card-list-item">
                    ДРР в разрезе 2-х недель снизилось с 6.14 % до 0.99%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="client-results__slide">
            <div class="client-results__slide-cards">
              <div class="client-results__slide-description">
                <p class="client-results__slide-title">
                  Товары для дома и дачи
                </p>
                <p class="client-results__slide-text">
                  Крупный оптовый поставщик товаров для дома и строительства в
                  торговые сети DIY, Леруа Мерлен, Obi и другие.
                </p>
              </div>
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Задачи</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Увеличить продажи
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Скорректировать ассортимент
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить рекламные кампании
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Настроить личный кабинет для увеличения эффективности
                    процесса продаж
                  </li>
                </ul>
              </div>
            </div>
            <div class="client-results__slide-cards">
              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">На старте</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Начало работы – февраль
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 419
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка = 299 429 руб.
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Заказы = 236 шт.
                  </li>
                </ul>
              </div>

              <div class="client-results__slide-card">
                <p class="client-results__slide-card-title">Результат</p>
                <ul class="client-results__slide-card-list">
                  <li class="client-results__slide-card-list-item">
                    Количество заказов увеличилось до 1167 шт., рост на 494%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Выручка за май 2023 составила 1 431 964 руб., рост на 478%
                  </li>
                  <li class="client-results__slide-card-list-item">
                    В 18 раз увеличилось количество показов товара
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Количество SKU – 471
                  </li>
                  <li class="client-results__slide-card-list-item">
                    Подключение модели FBY и Экспресс
                  </li>
                  <li class="client-results__slide-card-list-item">
                    ДРР в разрезе 2-х недель снизилось с 6.14 % до 0.99%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
</script>

<style scoped>
.client-results {
  padding: 0 120px;
  --swiper-pagination-bullet-size: 12px;
  --swiper-pagination-bottom: 32px;
}
.client-results__title {
  color: #181818;
  text-align: center;
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.client-results__slider {
  position: relative;
}

.client-results__slider-arrow {
  border: none;
  width: 50px;
  height: 50px;
  background-color: #00caf5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  z-index: 3;
}

.swiper-button-disabled {
  background: #99e4f4;
}

.client-results__slider-left-arrow {
  left: 20px;
}
.client-results__slider-right-arrow {
  right: 20px;
}
.client-results__slider-left-arrow:hover {
  cursor: pointer;
  opacity: 0.85;
  transition: 0.2s;
}
.client-results__slider-right-arrow:hover {
  cursor: pointer;
  opacity: 0.85;
  transition: 0.2s;
}
.client-results__slider-pagination {
  display: flex;
  flex-direction: row;
  gap: 16px;
  position: absolute;
  right: 45%;
  bottom: 32px;
}
.client-results__slider-pagination-dot {
  width: 12px;
  height: 12px;
  background-color: rgba(24, 98, 174, 0.3);
  opacity: 0.5;
  border-radius: 50%;
}
.active-dot {
  background-color: #1862ae;
  opacity: 1;
}
.client-results__slide {
  display: grid;
  grid-template-columns: 413px 500px;
  justify-content: center;
  gap: 0 75px;
  border-radius: 24px;
  background: #e5f5ff;
  padding: 34px 110px 79px 102px;
}
.client-results__slide-title {
  font-family: "Noto Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  background: linear-gradient(90deg, #00acf0 9.59%, #f813ec 67.53%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
}
.client-results__slide-text {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin: 15px 0 0 0;
}
.client-results__slide-card {
  max-width: 500px;
}
.client-results__slide-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.client-results__slide-card-list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  padding-left: 30px;
  margin: 0;
}
.client-results__slide-card-title {
  margin: 0;
  color: #181818;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
  padding-left: 5px;
}

.client-results__slide-card-list-item {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.client-results__slide-card-list-item::marker {
  color: #00caf5;
}
@media (min-width: 681px) and (max-width: 1439px) {
  .client-results {
    padding: 0 16px;
    max-width: 900px;
    width: 100%;
  }
  .client-results__title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .client-results__slide {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 0;
    border-radius: 24px;
    background: #e5f5ff;
    padding: 23px 16px 143px;
  }
  .client-results__slide-title {
    font-size: 32px;
  }
  .client-results__slide-text {
    font-size: 18px;
    margin: 12px 0 0 0;
  }
  .client-results__slide-cards {
    gap: 0;
  }
  .client-results__slide-card-title {
    font-size: 17px;
    padding-left: 5px;
    padding-top: 8px;
  }

  .client-results__slide-card-list-item {
    font-size: 17px;
  }
  .client-results__slide-card-list {
    gap: 10px;
  }
  .client-results__slider-left-arrow {
    top: 91%;
    /* bottom: 27px; */
    left: 89px;
  }
  .client-results__slider-right-arrow {
    top: 91%;
    /* bottom: 27px; */
    right: 89px;
  }

  .active-arrow {
    background-color: #00caf5;
  }
  .client-results__slider-pagination {
    display: flex;
    flex-direction: row;
    gap: 16px;
    position: absolute;
    right: 110px;
    bottom: 104px;
  }
  .client-results__slider-pagination-dot {
    width: 12px;
    height: 12px;
    background-color: rgba(24, 98, 174, 0.3);
    opacity: 0.5;
    border-radius: 50%;
  }
  .active-dot {
    background-color: #1862ae;
    opacity: 1;
  }
}
@media (min-width: 320px) and (max-width: 680px) {
  .client-results {
    padding: 0 16px;
    max-width: 900px;
    width: 100%;
    --swiper-pagination-bottom: 104px;
  }
  .client-results__title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .client-results__slide {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    gap: 0;
    border-radius: 24px;
    background: #e5f5ff;
    padding: 23px 16px 143px;
  }
  .client-results__slide-title {
    font-size: 17px;
  }
  .client-results__slide-text {
    font-size: 15px;
    margin: 12px 0 0 0;
  }
  .client-results__slide-cards {
    gap: 0;
  }
  .client-results__slide-card-title {
    font-size: 15px;
    padding-left: 5px;
    padding-top: 8px;
  }

  .client-results__slide-card-list-item {
    font-size: 15px;
  }
  .client-results__slide-card-list {
    gap: 10px;
  }
  .client-results__slider-left-arrow {
    top: 91%;
    /* bottom: 27px; */
    left: 89px;
  }
  .client-results__slider-right-arrow {
    top: 91%;
    /* bottom: 27px; */
    right: 89px;
  }

  .active-arrow {
    background-color: #00caf5;
  }
  .client-results__slider-pagination {
    display: flex;
    flex-direction: row;
    gap: 16px;
    position: absolute;
    right: 110px;
    bottom: 104px;
  }
  .client-results__slider-pagination-dot {
    width: 12px;
    height: 12px;
    background-color: rgba(24, 98, 174, 0.3);
    opacity: 0.5;
    border-radius: 50%;
  }
  .active-dot {
    background-color: #1862ae;
    opacity: 1;
  }
}
</style>
