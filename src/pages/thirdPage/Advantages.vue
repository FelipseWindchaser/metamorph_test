<template>
  <section class="advantages">
    <h3 class="advantages_title section-title">Преимущества «МойСклад»</h3>
    <div class="advantages_tag-container">
      <p class="advantages_tag-text">Почему клиенты выбирают «МойСклад»?</p>
    </div>
    <div class="advantages_cards">
      <div class="advantages_card">
        <p class="advantages_card-number">01</p>
        <p class="advantages_card-text">
          Нет необходимости вести полный бухгалтерский учет
        </p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">02</p>
        <p class="advantages_card-text">Легкость в обучении и управлении</p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">03</p>
        <p class="advantages_card-text">Онлайн-касса и мобильная версия</p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">04</p>
        <p class="advantages_card-text">
          Не требует администратора или программиста
        </p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">05</p>
        <p class="advantages_card-text">
          Облачная касса для курьерской доставки
        </p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">06</p>
        <p class="advantages_card-text">
          Гибкость создания шаблонов документов
        </p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">07</p>
        <p class="advantages_card-text">Мобильное приложение для склада</p>
      </div>
      <div class="advantages_card">
        <p class="advantages_card-number">08</p>
        <p class="advantages_card-text">
          API для интеграции с существующими системами
        </p>
      </div>
      <div class="advantages_card advantages_card_pc">
        <p class="advantages_card-title">Узнать больше о преимуществах</p>
        <button class="advantages-button" type="button">Узнать больше</button>
      </div>
    </div>
    <div class="advantages_card advantages_card_mob">
      <p class="advantages_card-title">Узнать больше о преимуществах</p>
      <button class="advantages-button" type="button">Узнать больше</button>
    </div>
  </section>
</template>
<style scoped>
/* 1200px */
.advantages {
  width: 1200px;
  padding-bottom: 110px;
}
.advantages_title {
  color: #000;
  font-family: "Noto Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 47.6px */
  text-transform: uppercase;
  padding-bottom: 22px;
}
.advantages_tag-container {
  border-radius: 50px;
  border: 1.5px solid #64cdff;
  width: 452px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}
.advantages_tag-text {
  margin: 0;
  color: #64cdff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.advantages_cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.advantages_card {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #1864e0;
  width: 387px;
  height: 184px;
  flex-shrink: 0;
  padding: 19px 44px 0 34px;
  gap: 4px;
}
.advantages_card_mob {
  display: none;
}
.advantages_card-number {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}
.advantages_card-title {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
  margin: 0;
  padding-bottom: 15px;
}
.advantages_card-text {
  margin: 0;
  color: #fff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.advantages-button {
  display: flex;
  width: 218px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #64cdff;
  border: none;
  color: var(--white, #fff);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
@media (min-width: 375px) and (max-width: 680px) {
  .advantages {
    width: 375px;
    padding: 0 16px 60px;
  }
  .advantages_tag-container {
    width: 343px;
    height: 59px;
    margin-bottom: 24px;
  }
  .advantages_tag-text {
    font-size: 15px;
    width: 290px;
  }
  .advantages_cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 12px;
  }
  .advantages_card {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background: #1864e0;
    width: 167px;
    height: 175px;
    flex-shrink: 0;
    padding: 10px 8px 0 15px;
    gap: 6px;
  }

  .advantages_card_pc {
    display: none;
  }
  .advantages_card_mob {
    display: flex;
    width: 343px;
    height: 170px;
    flex-shrink: 0;
    margin-top: 34px;
    padding: 22px 19px 0 15px;
  }
  .advantages_card-number {
    font-size: 40px;
  }
  .advantages_card-title {
    font-size: 20px;
  }
  .advantages_card-text {
    font-size: 15px;
  }
  .advantages-button {
    display: flex;
    width: 314px;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 16px;
    background: #64cdff;
    border: none;
    color: var(--white, #fff);
    text-align: center;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
  }
}
</style>
