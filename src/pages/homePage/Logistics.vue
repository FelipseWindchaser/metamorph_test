<template>
  <section class="logistics">
    <h3 class="logistics_title">
      Ваши товары — в надежных руках: комплексный фулфилмент <br />и поставки из
      Китая и Армении
    </h3>
    <div class="logistics_wrapper">
      <div class="logistics_content-container">
        <div class="logistics_text-container">
          <p class="logistics_subtitle">
            Поставки из Китая в Армению с полным циклом логистики
          </p>
          <p class="logistics_description">
            Оптимизируйте свои поставки из Китая в Армению с нашей помощью.
            Полный цикл услуг: консолидация грузов, таможенное оформление,
            сортировка и хранение на нашем складе.
          </p>
        </div>
        <div class="logistics_image-container">
          <img
            class="logistics_image"
            src="../../../static/img/met-images/Mask group2.png"
            alt="packages_image"
          />
          <button class="logistics_button orange-button" type="button">
            <div class="button-content">
              <p class="button-text">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</p>
              <img
                class="logistics_arrow-icon"
                src="../../../static/img/met-images/Arrow.svg"
                alt="arrow-icon"
              />
            </div>
          </button>
        </div>
      </div>
      <div class="logistics_content-container">
        <div class="logistics_text-container">
          <p class="logistics_subtitle">
            Поставки из Армении в Россию с партнерскими складами
          </p>
          <p class="logistics_description">
            Расширяйте рынок сбыта с минимальными затратами. Полный цикл от
            доставки до обработки заказов и управления возвратами на нашем
            партнерском складе.
          </p>
        </div>
        <div class="logistics_image-container">
          <img
            class="logistics_image"
            src="../../../static/img/met-images/Mask group3.png"
            alt="containers_image"
          />
          <button class="logistics_button orange-button" type="button">
            <div class="button-content">
              <p class="button-text">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</p>
              <img
                class="logistics_arrow-icon"
                src="../../../static/img/met-images/Arrow.svg"
                alt="arrow-icon"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.logistics {
  display: flex;
  width: 1200px;
  padding-bottom: 110px;
}
.logistics_title {
  color: var(--main, #181818);
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
  padding-bottom: 40px;
  width: 835px;
}
.logistics_subtitle {
  color: var(--dark-blue, #1862ae);
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 28.6px */
  margin: 0;
}
.logistics_description {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  margin: 0;
}
.logistics_text-container {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.logistics_content-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.logistics_wrapper {
  display: flex;
  gap: 20px;
  flex-direction: row;
}
.logistics_image-container {
  width: 589.5px;
  height: 303px;
  flex-shrink: 0;
  position: relative;
}
.logistics_image {
  width: 100%;
}
.logistics_button {
  width: 336px;
  display: flex;
  justify-content: center;
  padding: 17px 27px;
  position: absolute;
  bottom: 0;
  right: 0;
}
@media (min-width: 375px) and (max-width: 680px) {
}
</style>
