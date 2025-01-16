<template>
  <section class="intro">
    <h3 class="intro_title">
      Внедрим и настроим МойСклад под ключ меньше, чем за месяц!
    </h3>
    <div class="intro_description-wrapper">
      <div class="intro_description-content">
        <img
          src="../../../static/img/met-images/intro_stats-icon_p2.svg"
          alt="stats_icon"
        />
        <p class="intro_text">3 года внедряем систему МойСклад</p>
      </div>
      <div class="intro_description-content">
        <img
          src="../../../static/img/met-images/intro_profile-icon_p2.svg"
          alt="profile_icon"
        />
        <p class="intro_text">Демонстрируем готовые проекты</p>
      </div>
      <div class="intro_description-content">
        <img
          src="../../../static/img/met-images/intro_deadlines-icon_p2.svg"
          alt="deadlines_icon"
        />
        <p class="intro_text">Не срываем сроки внедрения и обучения</p>
      </div>
    </div>
    <div class="intro_buttons-container">
      <button class="intro_button" type="button">Получить консультацию</button>
      <button class="intro_button transparent-button" type="button">
        Попробовать бесплатно 14 дней
      </button>
    </div>
  </section>
</template>
<style scoped>
/* 1200px */
.intro {
  background-image: url(../../../static/img/met-images/intro_p2.png);
  background-repeat: no-repeat;
  max-width: 1440px;
  /* height: 643px; */
  padding: 61px 120px 89px 120px;
}
.intro_title {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 67.2px */
  width: 610px;
}
.intro_text {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  margin: 0;
}
.intro_description-wrapper {
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 38px 0 50px;
}
.intro_description-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.intro_buttons-container {
  display: flex;
  gap: 14px;
}
.intro_button {
  width: 300px;
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
.transparent-button {
  background: none;
  border: 1px solid #fff;
}
@media (min-width: 320px) and (max-width: 680px) {
  .intro {
    background-image: url(../../../static/img/met-images/intro_p3_mob.png);
    background-repeat: no-repeat;
    max-width: 375px;
    /* height: 742px; */
    padding: 21px 16px 278px;
  }
  .intro_title {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 39.2px */
    /* width: 343px; */
    width: 100%;
  }
  .intro_description-wrapper {
    /* width: 343px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 22px 0 30px;
  }
  .intro_text {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 25.2px */
    margin: 0;
  }
  .intro_buttons-container {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .intro_button {
    /* width: 343px; */
    width: 100%;
    height: 50px;
  }
}
</style>
