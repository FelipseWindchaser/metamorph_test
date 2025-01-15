<template>
  <section class="faq">
    <h3 class="faq_title">Популярные вопросы <br />наших клиентов</h3>
    <div class="faq_card">
      <div class="faq_card_text-container">
        <p class="faq_card-question">
          Какая стоимость за использование фулфилмента на маркетплейсах?
        </p>
        <p class="faq_card-answer">
          Стоимость можете уточнить у наших операторов.
        </p>
      </div>

      <img
        class="faq_card-icon rotated-icon"
        src="../../static/img/met-images/faq-plus.svg"
        alt="plus-icon"
      />
    </div>
    <div class="faq_card">
      <div class="faq_card_text-container">
        <p class="faq_card-question">Где находится Ваш склад?</p>
        <p class="faq_card-answer hidden-answer"></p>
      </div>

      <img
        class="faq_card-icon"
        src="../../static/img/met-images/faq-plus.svg"
        alt="plus-icon"
      />
    </div>
    <div class="faq_card">
      <div class="faq_card_text-container">
        <p class="faq_card-question">
          Какие документы необходимы для поставки на маркетплейсы?
        </p>
        <p class="faq_card-answer hidden-answer"></p>
      </div>

      <img
        class="faq_card-icon"
        src="../../static/img/met-images/faq-plus.svg"
        alt="plus-icon"
      />
    </div>
    <div class="faq_card">
      <div class="faq_card_text-container">
        <p class="faq_card-question">С какими маркетплейсами сотрудничаете?</p>
        <p class="faq_card-answer hidden-answer"></p>
      </div>

      <img
        class="faq_card-icon"
        src="../../static/img/met-images/faq-plus.svg"
        alt="plus-icon"
      />
    </div>
    <div class="faq_card">
      <div class="faq_card_text-container">
        <p class="faq_card-question">
          Как использовать финансирование от компании?
        </p>
        <p class="faq_card-answer hidden-answer"></p>
      </div>

      <img
        class="faq_card-icon"
        src="../../static/img/met-images/faq-plus.svg"
        alt="plus-icon"
      />
    </div>
    <div class="faq_card">
      <div class="faq_card_text-container">
        <p class="faq_card-question">Какие условия хранения товара?</p>
        <p class="faq_card-answer hidden-answer"></p>
      </div>

      <img
        class="faq_card-icon"
        src="../../static/img/met-images/faq-plus.svg"
        alt="plus-icon"
      />
    </div>
  </section>
</template>
<style scoped>
.faq {
  margin: 110px auto;
  width: 1200px;
}
.faq_card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #d9d9d9;
  padding: 18px 0;
}
.rotated-icon {
  transform: rotate(45deg);
}

.faq_title {
  color: var(--main, #181818);
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
  padding-bottom: 22px;
}
.faq_card_text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.faq_card-question {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}
.faq_card-answer {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.hidden-answer {
  display: none;
}
@media (min-width: 375px) and (max-width: 680px) {
  .faq {
    margin: 60px auto;
    width: 375px;
    padding: 0 16px;
  }
  .faq_card {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: flex-start;
    border-bottom: 1px solid #d9d9d9;
    padding: 18px 0;
  }
  .rotated-icon {
    transform: rotate(45deg);
  }

  .faq_title {
    font-size: 20px;
    padding-bottom: 6px;
  }
  .faq_card_text-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .faq_card-question {
    font-size: 17px;
  }
  .faq_card-answer {
    color: var(--main, #181818);
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
}
/* 1200px */
</style>
