<template>
  <section class="presentation" id="presentation">
    <h3 class="presentation_title section-title">
      Почему «МойСклад» — идеальное решение для вашего бизнеса?
    </h3>
    <div class="presentation_tag-container">
      <p class="presentation_tag-text">Подходит для любого типа торговли</p>
    </div>
    <div class="presentation_container">
      <div class="presentation_card bg_blue">
        <div class="presentation_card-wrapper">
          <img
            class="presentation_icon"
            src="../../../static/img/met-images/retail_g1.svg"
            alt="retail_icon"
          />
          <p class="presentation_card-title_mob">Розничная торговля</p>
        </div>
        <div class="presentation_card_text-content">
          <p class="presentation_card-title">Розничная торговля</p>
          <p class="presentation_text">
            Управляйте любым количеством торговых точек в режиме онлайн
          </p>
        </div>
      </div>

      <div class="presentation_card bg_blue">
        <div class="presentation_card-wrapper">
          <img
            class="presentation_icon"
            src="../../../static/img/met-images/wholesale_g2.svg"
            alt="wholesale-trade_icon"
          />
          <p class="presentation_card-title_mob">Оптовая торговля</p>
        </div>
        <div class="presentation_card_text-content">
          <p class="presentation_card-title">Оптовая торговля</p>
          <p class="presentation_text">
            Контролируйте работу оптовой компании и сети дистрибьюторов
          </p>
        </div>
      </div>

      <div class="presentation_card">
        <div class="presentation_card-wrapper">
          <img
            class="presentation_icon"
            src="../../../static/img/met-images/online_g3.svg"
            alt="online-trade_icon"
          />
          <p class="presentation_card-title_mob">Онлайн-торговля</p>
        </div>
        <div class="presentation_card_text-content">
          <p class="presentation_card-title">Онлайн-торговля</p>
          <p class="presentation_text">
            Управляйте заказами, закупками и доставкой курьерами
          </p>
        </div>
      </div>
      <div class="presentation_card">
        <div class="presentation_card-wrapper">
          <img
            class="presentation_icon"
            src="../../../static/img/met-images/production_g4.svg"
            alt="production_icon"
          />
          <p class="presentation_card-title_mob">Производство</p>
        </div>
        <div class="presentation_card_text-content">
          <p class="presentation_card-title">Производство</p>
          <p class="presentation_text">
            Ведите учет производства для малого и среднего бизнеса
          </p>
        </div>
      </div>
    </div>
    <div class="presentation_learn-more bg_blue">
      <div class="presentation_learn-more_wrapper">
        <img
          class="presentation_icon"
          src="../../../static/img/met-images/shopping_oog5.svg"
          alt="shopping_icon"
        />
        <p class="presentation_learn-more_text">
          Узнать больше о возможностях «МойСклад»
        </p>
      </div>
      <button
        @click="() => openPopup('Узнать больше')"
        class="learn-more_button"
        type="button"
      >
        Узнать больше
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  openPopup: (title?: string) => void;
}>();
</script>
<style scoped>
/* 1200px */
.presentation {
  max-width: 1440px;
  padding: 100px 120px 110px;
}
.presentation_title {
  font-size: 34px;
  line-height: 140%; /* 47.6px */
  text-transform: uppercase;
  padding-bottom: 22px;
}
.presentation_tag-container {
  border-radius: 50px;
  border: 1.5px solid #64cdff;
  width: 404px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
}
.presentation_tag-text {
  margin: 0;
  color: #64cdff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.presentation_container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 1440px;
  align-self: center;
}
.presentation_card {
  /* height: 163px; */

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333;
}
.presentation_card {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 26px 0 25px;
  gap: 16px;
}
.presentation_card_text-content {
  padding-top: 14px;
}
.presentation_card-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.presentation_card-title {
  padding-bottom: 18px;
  margin: 0;
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 33.6px */
}
.presentation_card-title_mob {
  display: none;
}
.presentation_text {
  margin: 0;
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  width: 413px;
}
.presentation_learn-more {
  display: flex;
  flex-direction: row;
  width: 1440px;
  align-self: center;
  padding: 30px 120px;
  justify-content: space-between;
}
.presentation_learn-more_wrapper {
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
}
.presentation_learn-more_text {
  margin: 0;
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 33.6px */
}
.learn-more_button {
  width: 336px;
  height: 60px;
  border: none;
  border-radius: 16px;
  background: #64cdff;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.learn-more_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
@media (min-width: 320px) and (max-width: 680px) {
  .presentation {
    width: 375px;
    padding: 50px 16px 60px;
  }
  .presentation_title {
    font-size: 20px;
  }
  .presentation_tag-container {
    width: 344px;
    height: 40px;
  }
  .presentation_tag-text {
    font-size: 15px;
  }
  .presentation_container {
    display: flex;
    flex-direction: column;
    max-width: 375px;
  }
  .presentation_container :nth-child(1) {
    order: 1;
  }
  .presentation_container :nth-child(2) {
    order: 3;
  }
  .presentation_container :nth-child(3) {
    order: 2;
  }
  .presentation_container :nth-child(4) {
    order: 4;
  }

  .presentation_card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 16px 18px;
    gap: 12px;
    max-width: 375px;
  }
  .presentation_card_text-content {
    padding-top: 14px;
  }
  .presentation_card-wrapper {
    display: flex;
  }
  .presentation_card-title {
    display: none;
  }
  .presentation_card-title_mob {
    display: block;
    margin: 0;
    color: var(--main, #181818);
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 33.6px */
    padding-left: 12px;
  }
  .presentation_text {
    margin: 0;
    color: var(--main, #181818);
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 23.4px */
    max-width: 343px;
  }
  .presentation_card_text-content {
    padding: 0;
  }
  .presentation_learn-more {
    display: flex;
    flex-direction: column;
    width: 375px;
    align-self: center;
    padding: 16px 16px;
    justify-content: space-between;
  }
  .presentation_icon {
    width: 50px;
    height: 50px;
  }
  .presentation_learn-more_text {
    font-size: 17px;
    line-height: 120%; /* 20.4px */
  }
  .presentation_learn-more_wrapper {
    gap: 12px;
    padding-bottom: 17px;
  }
  .learn-more_button {
    width: 342px;
    height: 50px;
    border: none;
    border-radius: 16px;
    background: #64cdff;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
}
</style>
