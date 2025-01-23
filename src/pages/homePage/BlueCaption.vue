<template>
  <section class="blue-caption">
    <div class="blue-caption_rectangle">
      <p class="blue-caption_text">
        Наши услуги фулфилмента обеспечивают бесперебойную работу ваших поставок
        на маркетплейсах, но для увеличения продаж важен правильный маркетинг.
      </p>
      <p class="blue-caption_text">
        Мы предлагаем комплексный подход: от точной доставки до эффективных
        маркетинговых кампаний на Wildberries и Ozon.
      </p>
      <p class="blue-caption_text">
        Обеспечьте ваш бизнес всем необходимым для успеха на маркетплейсах — от
        качественного хранения до выхода в топ.
      </p>
    </div>
  </section>
</template>
<style scoped>
.blue-caption {
  max-width: 1200px;
  /* height: 234px; */
}

.blue-caption_rectangle {
  margin: 50px 0 110px;
  display: flex;
  flex-direction: column;
  border: none;
  max-width: 1200px;
  position: relative;
  background: linear-gradient(to right, #2381e2, #1a69ba);
  border-radius: 20px;
  padding: 28px 42px 19px 29px;
  gap: 15px;
}
.blue-caption_rectangle::before {
  width: 0;
  height: 0;
  content: "";
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-top-width: 46px;
  border-bottom-width: 0px;
  border-right: 23px solid #2382e3;
  position: absolute;
  top: -37px;
  left: 15px;
  rotate: 19deg;
  z-index: -1;
}
.blue-caption_text {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 23.4px */
  margin: 0;
}
@media (min-width: 320px) and (max-width: 1280px) {
  .blue-caption_rectangle {
    margin: 50px 16px 110px;
    display: flex;
    flex-direction: column;
    border: none;
    position: relative;
    background: linear-gradient(to right, #2381e2, #1a69ba);
    border-radius: 20px;
    padding: 28px 42px 19px 29px;
    gap: 15px;
  }
  .blue-caption_rectangle::before {
    width: 0;
    height: 0;
    content: "";
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-top-width: 46px;
    border-bottom-width: 0px;
    border-right: 23px solid #2382e3;
    position: absolute;
    top: -37px;
    left: 15px;
    rotate: 19deg;
    z-index: -1;
  }
  /* .blue-caption {
    margin: 20px auto 70px;
    width: 343px;
    height: 100%;

    padding: 67px 18px 40px 22px;
    gap: 10px;
  } */
  .blue-caption_text {
    font-size: 15px;
  }
}
</style>
