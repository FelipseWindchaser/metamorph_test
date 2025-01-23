<template>
  <section class="intro">
    <div class="intro_text-container">
      <div>
        <h1 class="intro_title">ПОМОЖЕМ ВАМ <br />НА МАРКЕТПЛЕЙСАХ</h1>
        <p class="intro_subtitle">Фулфилмент в Ереване</p>
      </div>

      <div class="intro_text-background">
        <div class="intro_text-cloud">
          <p class="intro_card-title intro_text">
            Берем на себя операционку и маркетинг. <br />С вас только товары и
            цены
          </p>
          <div class="intro_text-cards">
            <div class="intro_text-card">
              <img
                src="../../../static/img/met-images/User,Profile.svg"
                alt="personal_manager_icon"
              />
              <p class="intro_text-title intro_text">Личный менеджер 24/7</p>
              <p class="intro_text">полное сопровождение магазина</p>
            </div>
            <div class="intro_text-card">
              <img
                src="../../../static/img/met-images/delivery-truck-time-3.svg"
                alt="delivery_truck_icon"
              />
              <p class="intro_text-title intro_text">Экспресс-доставка</p>
              <p class="intro_text">на маркетплейсы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro_image-container">
      <div class="intro_image-wrapper">
        <picture>
          <source
            class="intro_image"
            media="(max-width: 1280px)"
            srcset="../../../static/img/met-images/intro_mob.png"
            alt="intro_image"
          />
          <img
            class="intro_image"
            src="../../../static/img/met-images/intro.png"
            alt="intro_image"
          />
        </picture>
      </div>

      <button
        @click="() => openPopup('Получить предложение')"
        type="button"
        class="intro_button orange-button"
      >
        <div class="button-content">
          <p class="button-text">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</p>
          <img
            src="../../../static/img/met-images/Arrow.svg"
            alt="arrow-icon"
          />
        </div>
      </button>
    </div>
  </section>
</template>
<style scoped>
.intro {
  padding: 70px 120px 110px;
  flex-direction: row;
  gap: 32px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.intro_text-container {
  width: 100%;
}
.intro_title {
  font-family: Jost;
  font-size: 50px;
  font-weight: bold;
  line-height: 140%;
}
.intro_subtitle {
  font-family: Jost;
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  line-height: 140%;
  padding: 6px 0 14px;

  width: 570px;
}

.intro_text-cloud {
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 62px 0 23px 32px;
}
.intro_text-background {
  background: url(../../../static/img/met-images/text-cloud.png) white 50% /
    cover no-repeat;
  height: 283px;
  width: 558px;
}

.intro_text-cards {
  display: flex;
  flex-direction: row;
  gap: 75px;
}
.intro_text-card {
  width: 224px;
}
.intro_card-title {
  width: 375px;
}
.intro_text {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  color: white;
}
.intro_text-title {
  font-weight: bold;
}
.intro_image-container {
  max-height: 509px;
  position: relative;
}
.intro_image {
  height: 100%;
}
.intro_button {
  font-size: 18px;
  font-weight: bold;
  padding: 17px 27px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.intro_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
@media (min-width: 681px) and (max-width: 1280px) {
  .intro {
    padding: 70px 120px 110px;
    flex-direction: column;
    gap: 32px;
    max-width: 1200px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .intro_button {
    font-size: 18px;
    font-weight: bold;
    position: static;
    margin-top: 16px;
    padding: 17px 30px 18px 30px;
    justify-content: center;
    align-items: center;
  }
  .intro_text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .intro_title {
    font-family: Jost;
    font-size: 50px;
    font-weight: bold;
    line-height: 140%;
  }
  .intro_text-background {
    background: url(../../../static/img/met-images/text-cloud.png) white 50% /
      cover no-repeat;
    height: 283px;
    width: 558px;
  }
}
@media (min-width: 320px) and (max-width: 680px) {
  .intro {
    padding: 19px 16px 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 18px;
  }
  .intro_text-container {
    max-width: 570px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .intro_title {
    font-family: Jost;
    font-family: Jost;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    text-transform: uppercase;
    width: 100%;
  }
  .intro_subtitle {
    font-family: Jost;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    padding: 6px 0;
    width: 100%;
  }

  /* .intro_text-background {
    background: url(../../../static/img/met-images/text_cloud_mob.png) white 50% /
      contain no-repeat;
    width: 100%;
    height: 427px;
    height: 100%;
  } */
  .intro_text-background {
    margin: 50px 0 20px;
    display: flex;
    flex-direction: column;
    border: none;
    max-width: 343px;
    width: 100%;
    height: 100%;
    position: relative;
    background: linear-gradient(to right, #2381e2, #1a69ba);
    border-radius: 20px;
    gap: 15px;
  }
  .intro_text-background::before {
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
  .intro_image {
    width: 100%;
  }
  .intro_text-cloud {
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 23px 53px 25px 32px;
  }
  .intro_card-title {
    width: 100%;
  }
  .intro_text-cards {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .intro_button {
    font-size: 18px;
    font-weight: bold;
    position: static;
    margin-top: 16px;
    padding: 17px 30px 18px 30px;
    justify-content: center;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
defineProps<{
  openPopup: (title?: string) => void;
}>();
</script>
