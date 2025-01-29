<template>
  <section class="fulfillment" id="fulfillment">
    <div class="fulfillment_title-container">
      <h3 class="fulfillment_title section-title">
        КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ ФУЛФИЛМЕНТА
      </h3>
    </div>

    <div class="fulfillment_container">
      <div class="fulfillment_card bg_blue">
        <div class="wide">
          <div class="fulfillment_card-wrapper-container">
            <div class="fulfillment_card-wrapper">
              <img
                src="../../../static/img/met-images/priemka.svg"
                alt="priemka_icon"
              />
              <p class="fulfillment_card-title">Приемка</p>
            </div>
            <p class="fulfillment_text">
              Прием и проверка товаров на складе. Полный контроль качества и
              учет при поступлении
            </p>
          </div>
        </div>
      </div>
      <div class="fulfillment_card">
        <div class="wide">
          <div class="fulfillment_card-wrapper-container">
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
        </div>
      </div>
      <div class="fulfillment_card bg_blue">
        <div class="wide">
          <div class="fulfillment_card-wrapper-container">
            <div class="fulfillment_card-wrapper">
              <img
                src="../../../static/img/met-images/hranenie.svg"
                alt="hranenie_icon"
              />
              <p class="fulfillment_card-title">Хранение</p>
            </div>

            <p class="fulfillment_text">
              Организация хранения на складе. Поддержание условий, необходимых
              для конкретного вида товаров
            </p>
          </div>
        </div>
      </div>
      <div class="fulfillment_card">
        <div class="wide">
          <div class="fulfillment_card-wrapper-container">
            <div class="fulfillment_card-wrapper">
              <img
                src="../../../static/img/met-images/dostavka.svg"
                alt="dostavka_icon"
              />
              <p class="fulfillment_card-title">Забор и доставка</p>
            </div>

            <p class="fulfillment_text">
              Быстрая доставка товаров от склада до конечного клиента. Развитая
              система логистики и управления курьерами
            </p>
          </div>
        </div>
      </div>
      <div class="fulfillment_card bg_blue">
        <div class="wide">
          <div class="fulfillment_card-wrapper-container">
            <div class="fulfillment_card-wrapper">
              <img
                src="../../../static/img/met-images/znak.svg"
                alt="znak_icon"
              />
              <p class="fulfillment_card-title">Честный знак</p>
            </div>

            <p class="fulfillment_text">
              Работа с маркировкой товаров, соответствующей требованиям
              законодательства. Обеспечение легитимности и отслеживаемости
              продукции
            </p>
          </div>
        </div>
      </div>
      <div class="fulfillment_card">
        <div class="wide">
          <div
            class="fulfillment_card-wrapper-container fulfillment_card-wrapper-container_short"
          >
            <div class="fulfillment_card-wrapper">
              <img
                src="../../../static/img/met-images/cursor-click.svg"
                alt="cursor_icon"
              />
              <p class="fulfillment_card-title learn-more-title">
                Узнать больше о наших услугах
              </p>
            </div>

            <button
              @click="() => openPopup('Свяжитесь с нами')"
              type="button"
              class="fulfillment_button orange-button"
            >
              СВЯЖИТЕСЬ С НАМИ
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  openPopup: (title?: string) => void;
}>();
</script>
<style scoped>
.fulfillment {
  padding-bottom: 110px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* width: 1440px; */
  width: 100%;
  /* align-items: flex-start; */
}
.fulfillment_title-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.fulfillment_title {
  font-family: Jost;
}
.fulfillment_container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.fulfillment_card {
  padding: 26px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 125px;
}
.fulfillment_card-wrapper-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1130px;
}

.fulfillment_card-wrapper {
  display: flex;
  align-items: center;
  max-width: 350px;
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
  max-width: 664px;
  /* width: 664px; */
}
.fulfillment_button {
  padding: 17px 73px;
  font-size: 18px;
}
.fulfillment_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
.fulfillment_card-wrapper-container_short {
  justify-content: flex-start;
  gap: 125px;
  /* gap: 185px; */
}
.wide {
  max-width: 1200px;
  width: 100%;
}
@media (min-width: 451px) and (max-width: 1280px) {
  .fulfillment_card-wrapper-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    max-width: 630px;
  }
  .fulfillment_card-wrapper-container_short {
    flex-direction: column;
    gap: 30px;
  }

  .fulfillment_card-wrapper {
    padding: 0 16px;
    max-width: 400px;
  }
  .fulfillment-title {
    padding: 0 16px;
  }
  .fulfillment_card {
    padding: 26px 16px;
  }
}
@media (min-width: 320px) and (max-width: 451px) {
  .fulfillment {
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 375px;
    width: 100%;
    /* align-items: flex-start; */
  }
  .fulfillment_title {
    font-size: 24px;
    padding: 0 16px;
  }
  .fulfillment_card {
    padding: 20px 16px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .fulfillment_card-wrapper-container_short {
    gap: 39px;
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
    /* width: 343px; */
    width: 100%;
    height: 60px;
    padding: 22px 65px 20px 65px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .fulfillment_card-wrapper-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1130px;
  }
}
</style>
