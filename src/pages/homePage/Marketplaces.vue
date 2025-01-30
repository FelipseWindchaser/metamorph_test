<template>
  <section class="marketplaces-and-fulfillment">
    <div class="marketplaces-and-fulfillment_text-container">
      <h2 class="marketplaces-and-fulfillment_title">
        От грамотного фулфилмента к успешному продвижению на маркетплейсах
      </h2>
      <p class="marketplaces-and-fulfillment_subtitle">
        Надежный фулфилмент — это только начало
      </p>
    </div>
    <div>
      <div class="marketplaces-and-fulfillment_cards">
        <div class="marketplaces-and-fulfillment_card">
          <p class="marketplaces-and-fulfillment_card-number">1</p>
          <div class="marketplaces-and-fulfillment_card-content">
            <img
              class="marketplaces-and-fulfillment_card-icon"
              src="../../../static/img/met-images/hand-package-delivery.png"
              alt="hand-and-package-icon"
            />
            <p
              class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_pc"
            >
              Приемка и хранение товаров
            </p>
          </div>
          <p
            class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_mob"
          >
            Приемка и хранение товаров
          </p>
        </div>
        <div class="marketplaces-and-fulfillment_card">
          <p class="marketplaces-and-fulfillment_card-number">2</p>
          <div class="marketplaces-and-fulfillment_card-content">
            <img
              class="marketplaces-and-fulfillment_card-icon"
              src="../../../static/img/met-images/World, Globe, Basket.png"
              alt="globe-icon"
            />
            <p
              class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_pc"
            >
              Подготовка к продаже
            </p>
          </div>
          <p
            class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_mob"
          >
            Подготовка к продаже
          </p>
        </div>
        <div class="marketplaces-and-fulfillment_card">
          <p class="marketplaces-and-fulfillment_card-number">3</p>
          <div class="marketplaces-and-fulfillment_card-content">
            <img
              class="marketplaces-and-fulfillment_card-icon"
              src="../../../static/img/met-images/browser-cursor-click.png"
              alt="browser-icon"
            />
            <p
              class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_pc"
            >
              SEO и рекламные кампании
            </p>
          </div>
          <p
            class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_mob"
          >
            SEO и рекламные кампании
          </p>
        </div>
        <div class="marketplaces-and-fulfillment_card">
          <p class="marketplaces-and-fulfillment_card-number">4</p>
          <div class="marketplaces-and-fulfillment_card-content">
            <img
              class="marketplaces-and-fulfillment_card-icon"
              src="../../../static/img/met-images/message-review-star.png"
              alt="social-icon"
            />
            <p
              class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_pc"
            >
              Рост продаж и положительные отзывы
            </p>
          </div>
          <p
            class="marketplaces-and-fulfillment_card-text marketplaces-and-fulfillment_card-text_mob"
          >
            Рост продаж и положительные отзывы
          </p>
        </div>
      </div>
    </div>
    <div></div>
    <a class="ms-link" href="https://metamorph.group/mp-marketing/">
      <button class="marketplaces-and-fulfillment_button" type="button">
        Перейти
      </button>
    </a>
  </section>
</template>
<script setup lang="ts">
// defineProps<{
//   openPopup: (title?: string) => void;
// }>();
</script>
<style scoped>
.marketplaces-and-fulfillment {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 1440px; */
  width: 100%;
  height: 811px;
  /* background-image: url(../../../static/img/met-images/purple-background.png); */
  /* background-repeat: no-repeat; */
  background: url(../../../static/img/met-images/purple-background.png)
    lightgray 50% / cover no-repeat;
}
.marketplaces-and-fulfillment_text-container {
  width: 990px;
  display: flex;
  flex-direction: column;
  gap: 23px;
  align-items: center;
  margin-bottom: 75px;
}
.marketplaces-and-fulfillment_cards {
  width: 831px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 44px;
  margin-bottom: 55px;
}
.marketplaces-and-fulfillment_title {
  color: #fff;
  text-align: center;
  font-family: Jost;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 64.8px */
  text-transform: uppercase;
}
.marketplaces-and-fulfillment_subtitle {
  color: #fff;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  margin: 0;
}
.marketplaces-and-fulfillment_card {
  display: flex;
  align-items: center;
  position: relative;
  height: 105px;
  z-index: 10;
}
.marketplaces-and-fulfillment_card-number {
  color: rgba(255, 255, 255, 0.3);
  font-family: Audiowide;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%; /* 76.8px */
  margin: 0;
  position: absolute;
  z-index: -1;
}
.marketplaces-and-fulfillment_card-content {
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  gap: 20px;
}
.marketplaces-and-fulfillment_card-text {
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  margin: 0;
}
.marketplaces-and-fulfillment_button {
  width: 386px;
  height: 80px;
  color: #181818;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 16px;
  padding: 0;
  border: none;
  justify-content: center;
  align-items: center;
}
.marketplaces-and-fulfillment_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
.marketplaces-and-fulfillment_card-text_mob {
  display: none;
}
.ms-link {
  max-width: 343px;
  width: 100%;
  text-decoration: none;
}
@media (min-width: 320px) and (max-width: 1280px) {
  .marketplaces-and-fulfillment {
    /* width: 375px; */
    width: 100%;
    height: 100%;
    /* background-image: url(../../../static/img/met-images/purple-background_mob.png); */
    background: url(../../../static/img/met-images/purple-background_mob.png)
      lightgray 50% / cover no-repeat;
    padding: 27px 16px 33px;
  }
  .marketplaces-and-fulfillment_text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    margin-bottom: 34px;
  }
  .marketplaces-and-fulfillment_title {
    font-size: 24px;
  }
  .marketplaces-and-fulfillment_subtitle {
    font-size: 17px;
    text-align: center;
    padding: 0 40px;
  }
  .marketplaces-and-fulfillment_cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 41px 9px;
    margin-bottom: 31px;
  }
  .marketplaces-and-fulfillment_button {
    width: 100%;
    height: 60px;
    display: flex;
    margin-top: 30px;
  }
  .marketplaces-and-fulfillment_card-number {
    font-size: 60px;
  }
  .marketplaces-and-fulfillment_card-content {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
    gap: 20px;
  }
  .marketplaces-and-fulfillment_card-text {
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 31.2px */
    margin: 0;
  }
  .marketplaces-and-fulfillment_card-icon {
    width: 50px;
    height: 50px;
  }
  .marketplaces-and-fulfillment_card {
    display: flex;
    flex-direction: column;
    align-items: normal;
    position: relative;
    height: 105px;
    z-index: 10;
    gap: 15px;
  }
  .marketplaces-and-fulfillment_card-text_pc {
    display: none;
  }
  .marketplaces-and-fulfillment_card-text_mob {
    display: flex;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 22.1px */
  }
}
</style>
