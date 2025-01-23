<template>
  <section class="next-stage">
    <h3 class="next-stage__title">Знаем как выйти на следующий этап</h3>
    <div class="next-stage__grid-cards">
      <div class="next-stage__card">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">01</p>
        </div>
        <p class="next-stage__card-title">
          С чего начать торговлю на маркетплейсах?
        </p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">Выбор товаров на продажу</li>
          <li class="next-stage__card-list-item">Подбор поставщиков</li>
          <li class="next-stage__card-list-item">
            Выбор подходящих маркетплейсов
          </li>
          <li class="next-stage__card-list-item">Расчет юнит-экономики</li>
        </ul>
      </div>
      <div class="next-stage__card">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">02</p>
        </div>
        <p class="next-stage__card-title">
          Создание магазина и наполнение витрины
        </p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">
            Регистрация, составление каталога товаров
          </li>
          <li class="next-stage__card-list-item">
            Настройка склада и остатков
          </li>
          <li class="next-stage__card-list-item">Настройка витрины</li>
        </ul>
      </div>
      <div class="next-stage__card">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">03</p>
        </div>
        <p class="next-stage__card-title">Работа в Личном кабинете</p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">
            Настройка работы в Личном кабинете продавца на всех маркетплейсах
          </li>
          <li class="next-stage__card-list-item">
            Помощь с товарным ассортиментом
          </li>
          <li class="next-stage__card-list-item">Анализ ниши и конкурентов</li>
          <li class="next-stage__card-list-item">
            Детальная дорожная карта по дальнейшему развитию магазина
          </li>
        </ul>
      </div>
      <div class="next-stage__card">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">04</p>
        </div>
        <p class="next-stage__card-title">Продвижение магазина и товаров</p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">
            Продвижение магазина и товаров
          </li>
          <li class="next-stage__card-list-item">
            Выбор рекламных инструментов
          </li>
          <li class="next-stage__card-list-item">Оптимизация контента</li>
        </ul>
      </div>
    </div>
    <div class="next-stage__grid-2-cards">
      <div class="next-stage__card">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">05</p>
        </div>
        <p class="next-stage__card-title">
          Работа с контентом товарной матрицы
        </p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">
            Создание, проработка и редактирование контента
          </li>
          <li class="next-stage__card-list-item">
            Работа с описанием и характеристиками карточек товара
          </li>
          <li class="next-stage__card-list-item">Создание инфографики</li>
          <li class="next-stage__card-list-item">SEO-оптимизация</li>
        </ul>
      </div>
      <div class="next-stage__card">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">06</p>
        </div>
        <p class="next-stage__card-title">
          Масштабирование и развитие магазина
        </p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">Расширение ассортимента</li>
          <li class="next-stage__card-list-item">
            Автоматизация бизнес-процессов
          </li>
          <li class="next-stage__card-list-item">
            Выход на другие маркетплейсы
          </li>
        </ul>
      </div>
      <div class="next-stage__card next-stage__card-wide">
        <div class="next-stage__card-number-wrapper">
          <p class="next-stage__card-number">07</p>
        </div>
        <p class="next-stage__card-title">Аналитика и аудит магазина</p>
        <ul class="next-stage__card-list">
          <li class="next-stage__card-list-item">
            ABC-анализ магазина и текущего ассортимента
          </li>
          <li class="next-stage__card-list-item">
            Актуализация карточек товара
          </li>
          <li class="next-stage__card-list-item">
            Определение эффективности рекламных инструментов
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// defineProps<{
//   openPopup: (title?: string) => void;
// }>();
</script>

<style scoped>
.next-stage {
  padding: 110px 120px;
}
.next-stage__title {
  color: #181818;
  text-align: center;
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 49.4px */
  text-transform: uppercase;
  margin-bottom: 40px;
}
.next-stage__grid-cards {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.next-stage__grid-2-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
}
.next-stage__card {
  border-radius: 24px;
  background: #e5f5ff;
  padding: 42px 20px 32px 38px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* overflow: hidden; */
}
.next-stage__card-title {
  /* max-width: 409px; */
  /* text-wrap: wrap;
  overflow-wrap: break-word; */
  padding-right: 100px;
  width: 100%;
  color: #181818;
  font-family: "Noto Sans";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin: 0;
}
.next-stage__card-number-wrapper {
  max-width: 103px;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  border-radius: 60px;
  background: linear-gradient(117deg, #00abef 20.08%, #f835e2 77.83%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.next-stage__card-number {
  color: #fff;
  margin: 0;
  font-family: "Noto Sans";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 46.8px */
}
.next-stage__card-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 30px;
  margin: 0;
}
.next-stage__card-list-item::marker {
  color: #00caf5;
}
.next-stage__card-list-item {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
@media (min-width: 320px) and (max-width: 1280px) {
  .next-stage {
    padding: 70px 16px;
    max-width: 800px;
  }
  .next-stage__title {
    font-size: 24px;
    margin-bottom: 14px;
  }
  .next-stage__grid-cards {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 10px;
  }
  .next-stage__grid-2-cards {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    gap: 12px 10px;
  }
  .next-stage__card {
    min-width: 117px;
    border-radius: 24px;
    background: #e5f5ff;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    overflow: hidden;
  }
  .next-stage__card-wide {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
  .next-stage__card-title {
    text-wrap: wrap;
    overflow-wrap: break-word;
    /* max-width: 409px; */
    padding: 0 0 0 6px;
    width: 100%;
    font-size: 17px;
  }
  .next-stage__card-number-wrapper {
    width: 49px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 60px;
    background: linear-gradient(117deg, #00abef 20.08%, #f835e2 77.83%);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
  }
  .next-stage__card-number {
    color: #fff;
    margin: 0;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 46.8px */
  }
  .next-stage__card-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-left: 24px;
    margin: 0;
  }
  .next-stage__card-list-item::marker {
    color: #00caf5;
  }
  .next-stage__card-list-item {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-wrap: wrap;
    overflow-wrap: break-word;
  }
}
</style>
