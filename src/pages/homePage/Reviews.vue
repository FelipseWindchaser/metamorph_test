<template>
  <section class="reviews" id="reviews">
    <h3 class="reviews_title">отзывы и кейсы</h3>
    <div class="reviews_slider-wrapper">
      <div class="reviews_slider">
        <button class="reviews_slider-arrow-wrapper reviews_slider-left-arrow">
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
        </button>
        <swiper
          :observer="true"
          :observeParents="true"
          slidesPerView="auto"
          :spaceBetween="30"
          :speed="500"
          :modules="[Navigation]"
          :breakpoints="{
            1024: {
              spaceBetween: 10,
            },
            1220: {
              spaceBetween: 20,
            },
          }"
          :navigation="{
            prevEl: '.reviews_slider-left-arrow',
            nextEl: '.reviews_slider-right-arrow',
          }"
        >
          <swiper-slide>
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
                Компания сумела качественно оказать не только услугу по
                продвижению, но и взяла на себя ряд сопутствующих услуг, такие
                как оформление и оптимизация карточек, а также настройка и
                запуск рекламы на маркетплейсах.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
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
                Компания сумела качественно оказать не только услугу по
                продвижению, но и взяла на себя ряд сопутствующих услуг, такие
                как оформление и оптимизация карточек, а также настройка и
                запуск рекламы на маркетплейсах.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
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
                Компания сумела качественно оказать не только услугу по
                продвижению, но и взяла на себя ряд сопутствующих услуг, такие
                как оформление и оптимизация карточек, а также настройка и
                запуск рекламы на маркетплейсах.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide
            ><div class="reviews_slide">
              <div class="reviews_slide-header">
                <img
                  class="reviews_slide-photo"
                  src="../../../static/img/met-images/Olga.png"
                  alt="user-icon"
                />
                <p class="reviews_slide-title">Владимир Высоцкий</p>
              </div>
              <p class="reviews_slide-description">
                Компания сумела качественно оказать не только услугу по
                продвижению, но и взяла на себя ряд сопутствующих услуг, такие
                как оформление и оптимизация карточек, а также настройка и
                запуск рекламы на маркетплейсах.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
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
                Компания сумела качественно оказать не только услугу по
                продвижению, но и взяла на себя ряд сопутствующих услуг, такие
                как оформление и оптимизация карточек, а также настройка и
                запуск рекламы на маркетплейсах.
              </p>
            </div>
          </swiper-slide>
        </swiper>

        <button class="reviews_slider-arrow-wrapper reviews_slider-right-arrow">
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
        </button>
      </div>
    </div>
    <button class="reviews_button orange-button" type="button">
      оставить отзыв
    </button>
  </section>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
</script>
<style scoped lang="scss">
.swiper-slide {
  width: auto;
}
.reviews {
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  position: relative;
}
.reviews_button {
  width: 336px;
  height: 60px;
  margin: 24px 0 0 120px;
}
.reviews_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
.reviews_title {
  color: var(--main, #181818);
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  max-width: 1200px;
  padding-bottom: 40px;
  padding-left: 120px;
}
.reviews_slider-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
  /* width: 100%; */
}
.swiper {
  width: 100%;
  max-width: 1200px;
}
.reviews_slider {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  max-width: 1320px;
  padding: 0 60px;
  width: 100%;
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
/* .reviews_slider-arrows-wrapper {
  border: 1px solid #cbcbcb;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
} */

.reviews_slider-arrow-wrapper {
  border: 1px solid #cbcbcb;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  & :hover {
    opacity: 0.7;
  }
}
.reviews_slider-left-arrow {
  left: 10px;
}
.reviews_slider-right-arrow {
  right: 10px;
}
.reviews_slider_left-arrow {
  stroke: #181818;
}
.reviews_slider_right-arrow {
  stroke: #181818;
}

.swiper-button-disabled > .reviews_slider_left-arrow,
.swiper-button-disabled > .reviews_slider_right-arrow {
  stroke: #cbcbcb;
}

@media (min-width: 681px) and (max-width: 1220px) {
  .reviews_slider-arrow-wrapper {
    display: none;
  }

  .reviews_slider {
    padding: 0 16px;
  }
}
@media (min-width: 320px) and (max-width: 680px) {
  .reviews_slider-arrow-wrapper {
    display: none;
  }
  .reviews {
    display: flex;
    flex-direction: column;
    /* max-width: 375px; */
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .reviews_title {
    font-size: 24px;
    width: 100%;
    padding-bottom: 24px;
    padding-left: 16px;
  }
  .reviews_button {
    max-width: 336px;
    width: 100%;
    height: 60px;
    margin: 14px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reviews_slide {
    display: flex;
    flex-direction: column;
    width: 317px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #eaf2fa;
    padding: 19px 24px 19px 19px;
    gap: 14px;
  }
  .reviews_slider {
    gap: 14px;
    padding: 0;
  }
  .reviews_slide-title {
    font-size: 17px;
  }
  .reviews_slide-description {
    font-size: 15px;
  }
  .swiper {
    width: 100%;
  }
}
</style>
