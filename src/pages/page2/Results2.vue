<template>
  <section class="results">
    <h3 class="results__title">
      Какой результат вы получите,<br />
      если обратитесь за продвижением к нам?
    </h3>
    <div class="results__quote">
      <img
        class="results__quote-image"
        src="../../../static/img/page2-images/quote2_opt.jpg"
      />
    </div>
    <div class="results__cards">
      <div class="results__card">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">Увеличение конверсии</p>
          <p class="results__card-text">
            Оптимизация карточек товаров и их описаний для повышения уровня
            конверсии, превращая больше посетителей в покупателей.
          </p>
        </div>
      </div>
      <div class="results__card">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">Рост узнаваемости бренда</p>
          <p class="results__card-text">
            Формирование узнаваемого бренда с помощью комплексных маркетинговых
            стратегий, что помогает выделиться среди конкурентов.
          </p>
        </div>
      </div>
      <div class="results__card">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">Повышение лояльности клиентов</p>
          <p class="results__card-text">
            Внедрение программ лояльности и бонусов для клиентов, что
            способствует удержанию клиентов и увеличению их удовлетворенности.
          </p>
        </div>
      </div>
      <div class="results__card">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">Оптимизация логистических процессов</p>
          <p class="results__card-text">
            Совместная работа с логистическими партнерами для оптимизации
            доставки, снижения времени доставки и повышения удовлетворенности
            клиентов.
          </p>
        </div>
      </div>
      <div class="results__card">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">Аналитика и адаптация</p>
          <p class="results__card-text">
            Постоянный мониторинг и анализ поведения пользователей на сайте для
            внедрения изменений и адаптации стратегий под актуальные тенденции и
            предпочтения покупателей.
          </p>
        </div>
      </div>
      <div class="results__card">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">Увеличение среднего чека</p>
          <p class="results__card-text">
            Кросс-продажи и апсейл товаров, а также привлечение внимания к
            новинкам и популярным продуктам, что помогает увеличить средний чек
            покупок.
          </p>
        </div>
      </div>
      <div class="results__card results__card-wide">
        <CheckSvg />
        <div class="results__card-text-content">
          <p class="results__card-title">
            Расширение присутствия на новых маркетплейсах
          </p>
          <p class="results__card-text">
            Внедрение ваших товаров на дополнительные платформы и маркетплейсы
            для увеличения охвата аудитории и роста продаж.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.results {
  padding: 40px 120px 110px;
}
.results__title {
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
.results__quote {
  padding: 30px 0 0;
  display: flex;
  justify-content: center;
}

.results__quote-image {
  width: 60%;
}
.results__cards {
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center; */
  /* flex-wrap: wrap; */
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
.results__card {
  display: flex;
  flex-direction: row;
  gap: 6px;
}
.results__card-text-content {
  width: 100%;
}
.results__card-title {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  padding-top: 11px;
}
.results__card-text {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
  padding-top: 10px;
}
@media (min-width: 681px) and (max-width: 1280px) {
  .results {
    max-width: 600px;
    padding: 0 16px 70px;
  }
  .results__title {
    font-size: 24px;
    margin: 0;
  }
  .results__quote {
    padding: 26px 0 0;
    display: flex;
    justify-content: center;
  }

  .results__quote-image {
    width: 100%;
  }
  .results__cards {
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* flex-wrap: wrap; */
    margin-top: 42px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }
  .results__card {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .results__card-title {
    font-size: 17px;
    padding-top: 0;
  }
  .results__card-text {
    font-size: 15px;
  }
  .results__card-wide {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
}
@media (min-width: 320px) and (max-width: 680px) {
  .results {
    padding: 0 16px 70px;
  }
  .results__title {
    font-size: 24px;
    margin: 0;
  }
  .results__quote {
    padding: 26px 0 0;
    display: flex;
    justify-content: center;
  }

  .results__quote-image {
    width: 100%;
  }
  .results__cards {
    /* display: flex; */
    /* flex-direction: row; */
    /* justify-content: center; */
    /* flex-wrap: wrap; */
    margin-top: 42px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px 10px;
  }
  .results__card {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 120px;
    width: 100%;
  }
  .results__card-title {
    font-size: 17px;
    padding-top: 0;
  }
  .results__card-text {
    font-size: 15px;
  }
  .results__card-wide {
    grid-column-start: 1;
    grid-column-end: span 2;
  }
}
</style>
