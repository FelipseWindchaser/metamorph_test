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
    <div class="marketplaces-and-fulfillment_cards">
      <div class="marketplaces-and-fulfillment_card">
        <p class="marketplaces-and-fulfillment_card-number">1</p>
        <div class="marketplaces-and-fulfillment_card-content">
          <img
            class="marketplaces-and-fulfillment_card-icon"
            src="../../../static/img/met-images/hand-package-delivery.png"
            alt="hand-and-package-icon"
          />
          <p class="marketplaces-and-fulfillment_card-text">
            Приемка и хранение товаров
          </p>
        </div>
      </div>
      <div class="marketplaces-and-fulfillment_card">
        <p class="marketplaces-and-fulfillment_card-number">2</p>
        <div class="marketplaces-and-fulfillment_card-content">
          <img
            class="marketplaces-and-fulfillment_card-icon"
            src="../../../static/img/met-images/World, Globe, Basket.png"
            alt="globe-icon"
          />
          <p class="marketplaces-and-fulfillment_card-text">
            Подготовка к продаже
          </p>
        </div>
      </div>
      <div class="marketplaces-and-fulfillment_card">
        <p class="marketplaces-and-fulfillment_card-number">3</p>
        <div class="marketplaces-and-fulfillment_card-content">
          <img
            class="marketplaces-and-fulfillment_card-icon"
            src="../../../static/img/met-images/browser-cursor-click.png"
            alt="browser-icon"
          />
          <p class="marketplaces-and-fulfillment_card-text">
            SEO и рекламные кампании
          </p>
        </div>
      </div>
      <div class="marketplaces-and-fulfillment_card">
        <p class="marketplaces-and-fulfillment_card-number">4</p>
        <div class="marketplaces-and-fulfillment_card-content">
          <img
            class="marketplaces-and-fulfillment_card-icon"
            src="../../../static/img/met-images/message-review-star.png"
            alt="social-icon"
          />
          <p class="marketplaces-and-fulfillment_card-text">
            Рост продаж и положительные отзывы
          </p>
        </div>
      </div>
    </div>
    <button
      class="marketplaces-and-fulfillment_button gray-button"
      type="button"
    >
      Перейти
    </button>
  </section>
</template>
<style scoped>
.marketplaces-and-fulfillment {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1440px;
  height: 811px;
  background-image: url(../../../static/img/met-images/purple-background.png);
  background-repeat: no-repeat;
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
@media (min-width: 375px) and (max-width: 680px) {
}
</style>
