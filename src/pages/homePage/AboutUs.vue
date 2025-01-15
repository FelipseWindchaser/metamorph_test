<template>
  <section class="about-us">
    <div class="about-us_text-container">
      <p class="about-us_title">КАК МЫ РАБОТАЕМ: ЭТАПЫ ФУЛФИЛМЕНТА</p>
    </div>
    <div class="about-us_cards-wrapper">
      <svg
        class="line-with-numbers_line"
        xmlns="http://www.w3.org/2000/svg"
        width="1202"
        height="2"
        viewBox="0 0 1202 2"
        fill="none"
      >
        <path
          d="M1 1L1201 0.999895"
          stroke="#CBCBCB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-dasharray="4 4"
        />
      </svg>
      <div class="about-us_cards about-us_odd-cards">
        <div class="about-us_card-container about-us_odd-card-container">
          <div class="about-us_card-text-container">
            <p class="about-us_card-title">Аудит и подготовка</p>
            <p class="about-us_card-description">
              Анализ текущих бизнес-процессов и подготовка к интеграции
            </p>
          </div>
          <div class="about-us_number-container">
            <p>1</p>
          </div>
        </div>
        <div class="about-us_card-container about-us_odd-card-container">
          <div class="about-us_card-text-container">
            <p class="about-us_card-title">Обработка и хранение</p>
            <p class="about-us_card-description">
              Приемка товаров, их хранение и управление запасами
            </p>
          </div>
          <div class="about-us_number-container">
            <p>3</p>
          </div>
        </div>
        <div class="about-us_card-container about-us_odd-card-container">
          <div class="about-us_card-text-container">
            <p class="about-us_card-title">Доставка и отслеживание</p>
            <p class="about-us_card-description">
              Организация доставки и отслеживание статуса заказов
            </p>
          </div>
          <div class="about-us_number-container">
            <p>5</p>
          </div>
        </div>
      </div>

      <div class="about-us_cards about-us_even-cards">
        <div class="about-us_card-container about-us_even-card-container">
          <div class="about-us_number-container">
            <p>2</p>
          </div>
          <div class="about-us_card-text-container">
            <p class="about-us_card-title">Интеграция и настройка</p>
            <p class="about-us_card-description">
              Внедрение систем управления складом и настройка процессов
            </p>
          </div>
        </div>
        <div class="about-us_card-container about-us_even-card-container">
          <div class="about-us_number-container">
            <p>4</p>
          </div>
          <div class="about-us_card-text-container">
            <p class="about-us_card-title">Сборка и упаковка</p>
            <p class="about-us_card-description">
              Комплектация заказов, ко-пакинг и подготовка к отправке
            </p>
          </div>
        </div>
        <div class="about-us_card-container about-us_even-card-container">
          <div class="about-us_number-container">
            <p>6</p>
          </div>
          <div class="about-us_card-text-container">
            <p class="about-us_card-title">Управление возвратами</p>
            <p class="about-us_card-description">
              Обработка возвратов и их управление
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about-us {
  width: 1440px;
  padding-bottom: 275px;
}
.about-us_text-container {
  padding-left: 120px;
}

.about-us_text-container .about-us_title {
  font-family: Jost;
  color: #181818;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 53.2px;
  width: 526px;
  margin: 0;
  padding-bottom: 40px;
}
.about-us_cards-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}
.about-us_cards {
  display: flex;
  gap: 140px;
}
.about-us_card-container {
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
/* .about-us_odd-card-container {
    padding-right: 140px;
  }
  .about-us_even-card-container {
    padding: 0 0 0 140px;
  } */
.about-us_card-text-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 18px;
  line-height: 130%;
  gap: 5px;
}
.about-us_card-title {
  margin: 0;
  font-weight: bold;
}
.about-us_card-description {
  margin: 0;
}
.about-us_numbers-wrapper {
  display: flex;
  flex-direction: row;
  padding: 16px 0 16px 120px;
}
.about-us_number-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 50px;
  height: 50px;
  background-color: #1862ae;
  color: white;
  border-radius: 50%;
  z-index: 5;
}
.about-us_odd-cards {
  padding-left: 91px;
  align-self: flex-start;
}
.about-us_even-cards {
  align-self: flex-end;
  padding-right: 115px;
  position: absolute;
  top: 70%;
  z-index: 5;
}
.line-with-numbers_line {
  width: 1440px;
  position: absolute;
  top: 84%;
  z-index: 0;
}

@media (min-width: 375px) and (max-width: 680px) {
}
</style>
