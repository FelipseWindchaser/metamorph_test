<template>
  <div class="card card_blue">
    <div class="card__textblock">
      <img
        class="card__number"
        src="../../../static/img/page2-images/service/card-number-1.svg"
      />
      <p class="card__title">
        Прием и проверка товаров на складе. <br />
        Полный контроль качества и учет при поступлении
      </p>
    </div>
    <div class="card__items">
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/chart-analytics-search.svg"
        />
        <p class="card-item__title">Аудит магазина</p>
        <p class="card-item__text">
          Проанализируем текущие позиции и возможности вашего магазина на
          маркетплейсе и расскажем, как и что можно улучшить для увеличения
          продаж и повышения рейтинга
        </p>
      </div>
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/shopping-bag-cursor-hand.svg"
        />
        <p class="card-item__title">Онбординг</p>
        <p class="card-item__text">
          Поможем запустить продажи на маркетплейсах, загрузим карточки товаров
          и приведем первых клиентов
        </p>
      </div>
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/pen-edit.svg"
        />
        <p class="card-item__title">Создание контента</p>
        <p class="card-item__text">
          Организуем брендинг, поможем с витринами, подготовим презентации и
          эффективные лендинг-страницы
        </p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card__textblock">
      <img
        class="card__number"
        src="../../../static/img/page2-images/service/card-number-2.svg"
      />
      <p class="card__title">
        Надежная упаковка товаров с учетом всех особенностей продукции.
        <br />Профессиональная защита во время транспортировки
      </p>
    </div>
    <div class="card__items">
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/document-text-feather.svg"
        />
        <p class="card-item__title">SEO-оптимизация</p>
        <p class="card-item__text">
          Разработаем эффективный контент (текст, фото, видео), проведем
          SEO-оптимизацию и выведем ваши карточки в топовые позиции поиска
        </p>
      </div>
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/target.svg"
        />
        <p class="card-item__title">Маркетинг</p>
        <p class="card-item__text">
          Подключим для развития магазина не только SEO, но и маркетинговые
          инструменты. Запустим кампании, проконтролируем рекламный бюджет и
          увеличим выручку
        </p>
      </div>
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/user-document.svg"
        />
        <p class="card-item__title">Ведение “под ключ”</p>
        <p class="card-item__text">
          Полностью возьмем на себя контроль над личным кабинетом на
          маркетплейсе, позволяя вам сконцентрироваться на оперативной отгрузке
          товаров
        </p>
      </div>
    </div>
  </div>

  <div class="card card_blue">
    <div class="card__textblock">
      <img
        class="card__number"
        src="../../../static/img/page2-images/service/card-number-3.svg"
      />
      <p class="card__title">
        Организация хранения на складе. Поддержание условий, <br />необходимых
        для конкретного вида товаров
      </p>
    </div>
    <div class="card__items">
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/accounting-calculator-circle.svg"
        />
        <p class="card-item__title">Технические интеграции</p>
        <p class="card-item__text">
          Предложим удобные системы по учету бухгалтерии или складских процессов
          для облегчения ведения бизнеса на маркетплейсе
        </p>
      </div>
      <div class="card-item">
        <img
          class="card-item__icon"
          src="../../../static/img/page2-images/service/rocket.svg"
        />
        <p class="card-item__title">Запуск торговой марки</p>
        <p class="card-item__text">
          Поддержим в запуске СТМ как на стадии поиска поставщиков, так и в
          момент выхода на маркетплейсы со своей продукцией
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 50px 120px;
  color: #181818;
  font-family: "Noto Sans";
  font-style: normal;
}

.card_blue {
  background: #e5f5ff;
}

.card__textblock {
  display: inline-flex;
  gap: 18px;
  align-items: center;
  padding-bottom: 44px;
}

.card__number {
  width: 82px;
  height: 88px;
  object-fit: contain;
  object-position: left;
}

.card__title {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%; /* 1.4625rem */
}

.card-item {
  width: 100%;
  border-radius: 24px;
  border: 1px solid rgba(24, 98, 174, 0.3);
}

.card__items {
  display: inline-flex;
  gap: 20px;
}

.card-item__icon {
  padding: 19px 20px 10px;
}

.card-item__title {
  padding: 0 38px 10px 29px;
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
}

.card-item__text {
  padding: 0 38px 29px 29px;
  margin: 0;

  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
}
@media (min-width: 320px) and (max-width: 1280px) {
  .card {
    max-width: 600px;
    padding: 25px 16px;
    color: #181818;
    font-family: "Noto Sans";
    font-style: normal;
    flex-direction: column;
    align-self: center;
  }
  .card__title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 19.5px */
    margin: 0;
  }
  .card__textblock {
    display: inline-flex;
    gap: 10px;
    align-items: flex-start;
    padding-bottom: 31px;
  }
  .card__items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .card-item__icon {
    padding: 0;
    margin: 18px 0 12px 17px;
    width: 50px;
    height: 50px;
  }
  .card-item__title {
    padding: 0 7px 10px 17px;
    margin: 0;

    font-size: 17px;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
  }

  .card-item__text {
    padding: 0 7px 25px 17px;
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    line-height: 130%;
  }
  .card__number {
    width: 60px;
    height: 60px;
    font-size: 80px;
    object-fit: contain;
    object-position: left;
    margin-top: 5px;
  }
}
</style>
