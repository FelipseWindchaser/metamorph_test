<template>
  <section class="about-us">
    <div class="about-us_text-container">
      <h4 class="about-us_title">
        Уже 3 года мы помогаем клиентам автоматизировать бизнес через внедрение
        МойСклад и CRM-систем
      </h4>
      <div class="about-us_cards">
        <div class="about-us_card">
          <p class="about-us_card-title">13</p>
          <p class="about-us_card-description">
            Число ниш, в которые мы внедрили МойСклад
          </p>
        </div>
        <div class="about-us_card">
          <p class="about-us_card-title">86</p>
          <p class="about-us_card-description">
            Довольных клиентов, пользующихся МойСклад
          </p>
        </div>
        <div class="about-us_card">
          <p class="about-us_card-title">950+</p>
          <p class="about-us_card-description">
            Часов личного времени мы освободили нашим клиентам
          </p>
        </div>
        <div class="about-us_card">
          <p class="about-us_card-title">10</p>
          <p class="about-us_card-description">
            Часов выделяем в месяц для тех. поддержки проекта
          </p>
        </div>
      </div>
    </div>
    <div class="about-us_image-container">
      <picture>
        <source
          class="stocks-image"
          srcset="../../../static/img/met-images/about-us_stocks_mob.png"
          alt="stocks_mob_image"
          media="(max-width: 680px)"
        />
        <img
          class="stocks-image"
          src="../../../static/img/met-images/about-us_stocks.png"
          alt="stocks_image"
        />
      </picture>
    </div>
  </section>
</template>
<style scoped>
.about-us {
  width: 1200px;
  padding: 76px 42px 88px 47px;
  display: flex;
  flex-direction: row;
  background-image: url(../../../static/img/met-images/about-us_gradient.png);
  background-repeat: no-repeat;
  /* margin-top: 130px; */
}
.about-us_title {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
}
.about-us_cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px 71px;
  padding-top: 34px;
}
.about-us_card {
  width: 235px;
}
.about-us_card-title {
  margin: 0;
  color: #fff;
  font-family: "Noto Sans";
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 91px */
}
.about-us_card-description {
  margin: 0;
  color: #fff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
}
.stocks-image {
  border-radius: 25px;
}
@media (min-width: 320px) and (max-width: 680px) {
  .about-us {
    width: 342px;
    padding: 26px 19px 27px 25px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    background-image: url(../../../static/img/met-images/about-us_gradient_mob.png);
    background-repeat: no-repeat;

    /* margin-top: 130px; */
  }
  .about-us_title {
    color: #fff;
    font-family: "Noto Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 36.4px */
    width: 100%;
  }
  .about-us_text-container {
    width: 100%;
  }
  .about-us_card-title {
    font-size: 50px;
  }
  .about-us_card-description {
    font-size: 15px;
  }
  .about-us_card {
    width: 142px;
  }
  .about-us_cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 14px;
    padding: 23px 0 26px;
  }
}
/* 1200px */
</style>
