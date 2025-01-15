<template>
  <section class="reviews">
    <h3 class="reviews_title">отзывы и кейсы</h3>
    <div class="reviews_slider-wrapper">
      <div class="reviews_slider-arrows-wrapper">
        <svg
          class="reviews_slider_left-arrow"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 18H28.5"
            stroke="inherit"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 25.5L7.5 18"
            stroke="inherit"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 10.5L7.5 18"
            stroke="inherit"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="reviews_slider">
        <div class="reviews_slide">
          <div class="reviews_slide-header">
            <img
              class="reviews_slide-photo"
              src="../../../static/img/met-images/Artem.png"
              alt="user-icon"
            />
            <p class="reviews_slide-title">Артем Федоров</p>
          </div>
          <p class="reviews_slide-description">
            Компания сумела качественно оказать не только услугу по продвижению,
            но и взяла на себя ряд сопутствующих услуг, такие как оформление и
            оптимизация карточек, а также настройка и запуск рекламы на
            маркетплейсах.
          </p>
        </div>
        <div class="reviews_slide">
          <div class="reviews_slide-header">
            <img
              class="reviews_slide-photo"
              src="../../../static/img/met-images/Ekaterina.png"
              alt="user-icon"
            />
            <p class="reviews_slide-title">Екатерина Кривцун</p>
          </div>
          <p class="reviews_slide-description">
            Компания сумела качественно оказать не только услугу по продвижению,
            но и взяла на себя ряд сопутствующих услуг, такие как оформление и
            оптимизация карточек, а также настройка и запуск рекламы на
            маркетплейсах.
          </p>
        </div>
        <div class="reviews_slide">
          <div class="reviews_slide-header">
            <img
              class="reviews_slide-photo"
              src="../../../static/img/met-images/Olga.png"
              alt="user-icon"
            />
            <p class="reviews_slide-title">Ольга Заворотная</p>
          </div>
          <p class="reviews_slide-description">
            Компания сумела качественно оказать не только услугу по продвижению,
            но и взяла на себя ряд сопутствующих услуг, такие как оформление и
            оптимизация карточек, а также настройка и запуск рекламы на
            маркетплейсах.
          </p>
        </div>
      </div>
      <div class="reviews_slider-arrows-wrapper">
        <svg
          class="reviews_slider_right-arrow active-arrow"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 18H7.5"
            stroke="inherit"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 25.5L28.5 18"
            stroke="inherit"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 10.5L28.5 18"
            stroke="inherit"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <button class="reviews_button orange-button" type="button">
      оставить отзыв
    </button>
  </section>
</template>
<style scoped>
.reviews {
  display: flex;
  flex-direction: column;
  width: 1440px;
}
.reviews_button {
  width: 336px;
  height: 60px;
  margin: 24px 0 0 120px;
}
.reviews_title {
  color: var(--main, #181818);
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  width: 1200px;
  align-self: center;
  padding-bottom: 40px;
}
.reviews_slider-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.reviews_slider {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  gap: 20px;
}
.reviews_slide {
  display: flex;
  flex-direction: column;
  width: 387px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #eaf2fa;
  padding: 19px 24px 19px 19px;
  gap: 14px;
}
.reviews_slide-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}
.reviews_slide-title {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.reviews_slide-description {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  margin: 0;
}
.reviews_slider-arrows-wrapper {
  border: 1px solid #cbcbcb;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reviews_slider_left-arrow {
  stroke: #cbcbcb;
}
.reviews_slider_right-arrow {
  stroke: #cbcbcb;
}
.active-arrow {
  stroke: #181818;
}
@media (min-width: 375px) and (max-width: 680px) {
}
</style>
