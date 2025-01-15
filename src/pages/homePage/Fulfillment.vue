<template>
  <section class="fulfillment">
    <h3 class="fulfillment_title section-title">
      КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ <br />ФУЛФИЛМЕНТА
    </h3>
    <div class="fulfillment_container">
      <div class="fulfillment_card bg_blue">
        <div class="fulfillment_card-wrapper">
          <img
            src="../../../static/img/met-images/priemka.svg"
            alt="priemka_icon"
          />
          <p class="fulfillment_card-title">Приемка</p>
        </div>
        <p class="fulfillment_text">
          Прием и проверка товаров на складе. Полный контроль качества и учет
          при поступлении
        </p>
      </div>
      <div class="fulfillment_card">
        <div class="fulfillment_card-wrapper">
          <img
            src="../../../static/img/met-images/upakovka.svg"
            alt="upakovka_icon"
          />
          <p class="fulfillment_card-title">Упаковка</p>
        </div>

        <p class="fulfillment_text">
          Надежная упаковка товаров с учетом всех особенностей продукции.
          Профессиональная защита во время транспортировки
        </p>
      </div>
      <div class="fulfillment_card bg_blue">
        <div class="fulfillment_card-wrapper">
          <img
            src="../../../static/img/met-images/hranenie.svg"
            alt="hranenie_icon"
          />
          <p class="fulfillment_card-title">Хранение</p>
        </div>

        <p class="fulfillment_text">
          Организация хранения на складе. Поддержание условий, необходимых для
          конкретного вида товаров
        </p>
      </div>
      <div class="fulfillment_card">
        <div class="fulfillment_card-wrapper">
          <img
            src="../../../static/img/met-images/dostavka.svg"
            alt="dostavka_icon"
          />
          <p class="fulfillment_card-title">Забор <br />и доставка</p>
        </div>

        <p class="fulfillment_text">
          Быстрая доставка товаров от склада до конечного клиента. Развитая
          система логистики и управления курьерами
        </p>
      </div>
      <div class="fulfillment_card bg_blue">
        <div class="fulfillment_card-wrapper">
          <img src="../../../static/img/met-images/znak.svg" alt="znak_icon" />
          <p class="fulfillment_card-title">Честный знак</p>
        </div>

        <p class="fulfillment_text">
          Работа с маркировкой товаров, соответствующей требованиям
          законодательства. Обеспечение легитимности и отслеживаемости продукции
        </p>
      </div>
      <div class="fulfillment_card">
        <div class="fulfillment_card-wrapper">
          <img
            src="../../../static/img/met-images/cursor-click.svg"
            alt="cursor_icon"
          />
          <p class="fulfillment_card-title">
            Узнать больше <br />о наших услугах
          </p>
        </div>

        <button type="button" class="fulfillment_button orange-button">
          СВЯЖИТЕСЬ С НАМИ
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fulfillment {
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 1440px;
  /* align-items: flex-start; */
}
.fulfillment_title {
  font-family: Jost;
  padding-left: 120px;
}
.fulfillment_container {
  display: flex;
  flex-direction: column;
}
.fulfillment_card {
  padding: 26px 120px;
  display: flex;
  align-items: center;
  gap: 125px;
}
.fulfillment_card-wrapper {
  display: flex;
  align-items: center;
  min-width: 350px;
}
.fulfillment_card-title {
  margin: 0;
  padding-left: 30px;
  font-size: 28px;
  line-height: 120%;
  font-weight: bold;
}
.fulfillment_text {
  margin: 0;
  font-size: 18px;
  line-height: 130%;
  font-weight: 400;
  /* width: 664px; */
}
.fulfillment_button {
  padding: 17px 73px;
  font-size: 18px;
}
@media (min-width: 375px) and (max-width: 680px) {
  .fulfillment {
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 375px;
    /* align-items: flex-start; */
  }
  .fulfillment_title {
    padding: 0 16px;
  }
  .fulfillment_card {
    padding: 20px 16px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .fulfillment_card-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .fulfillment_text {
    margin: 0;
    font-size: 15px;
    line-height: 130%;
    font-weight: 400;
    /* width: 664px; */
  }
  .fulfillment_card-title {
    margin: 0;
    padding-left: 12px;
    font-size: 17px;
    line-height: 120%;
    font-weight: bold;
  }
  .fulfillment_button {
    display: flex;
    width: 343px;
    height: 60px;
    padding: 22px 65px 20px 65px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
}
</style>
