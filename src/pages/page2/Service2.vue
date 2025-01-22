<template>
  <section class="service">
    <h3 class="service__title">Услуги по сопровождению на маркетплейсах</h3>
    <Cards2 />
    <picture class="service__arrow"
      ><source
        class="service__arrow-img"
        media="(max-width: 680px)"
        srcset="
          ../../../static/img/page2-images/unoptimized/bottom-arrow_mob.svg
        "
        alt="service__arrow-img"
      />
      <img
        class="service__arrow-img"
        src="../../../static/img/page2-images/service/bottom-arrow.svg"
      />
    </picture>
    <button
      @click="() => openPopup('Запросить услугу')"
      class="service__button"
    >
      запросить услугу
    </button>
    <div class="getoffer">
      <h4 class="getoffer__title">получить предложение</h4>
      <button
        @click="() => openPopup('Получить прайс-лист')"
        class="getoffer__button"
      >
        получить прайс-лист
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  openPopup: (title?: string) => void;
}>();
</script>

<style scoped>
.service {
  padding: 112px 0 0;
}

.service__title {
  width: 650px;
  margin: 0 auto 40px;
  color: #181818;
  text-align: center;
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
}

.service__arrow {
  width: 405px;
  height: 82px;
  background-color: #e5f5ff;
  margin: auto;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service__button {
  width: 386px;
  height: 72px;
  margin: 22px auto 110px;
  border-radius: 16px;
  background: #00caf5;
  border-color: transparent;

  color: #fff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;
}

.service__button:hover {
  opacity: 0.85;
  transition: 0.2s;
}

.getoffer {
  background: url(../../../static/img/page2-images/service/get-offer.jpg)
    no-repeat;
  background-size: cover;
}

.getoffer__title {
  color: #fff;
  font-family: Jost;
  font-size: 64px;
  font-weight: 700;
  line-height: 140%; /* 89.6px */
  text-transform: uppercase;
  padding: 100px 120px 62px;
  width: 533px;
}

.getoffer__button {
  display: flex;
  width: 386px;
  height: 72px;
  padding: 11px 61px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-color: transparent;
  border-radius: 16px;
  background: #00caf5;
  margin-left: 120px;
  margin-bottom: 140px;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
@media (min-width: 320px) and (max-width: 680px) {
  .service__title {
    width: 100%;
    font-size: 24px;
  }
  .service {
    padding: 60px 0 0;
  }
  .service__arrow {
    width: 100%;
    margin-top: -25px;
  }
  .service__button {
    width: 342px;
    height: 60px;
    margin: 22px auto 70px;
    border-radius: 16px;
    background: #00caf5;
    border-color: transparent;
    color: #fff;
    font-family: "Noto Sans";
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
  .getoffer {
    background: url(../../../static/img/page2-images/unoptimized/get-offer_mob.jpg)
      no-repeat;
    background-size: cover;
    height: 563px;
    padding: 0 16px;
  }
  .getoffer__title {
    color: #fff;
    font-family: Jost;
    font-size: 30px;
    font-weight: 700;
    line-height: 135%; /* 89.6px */
    text-transform: uppercase;
    padding: 50px 0 26px;
    width: 100%;
  }
  .getoffer__button {
    /* display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-color: transparent;
    border-radius: 16px;
    background: #00caf5; */
    /* margin-left: 120px;
    margin-bottom: 140px; */
    /* cursor: pointer;
    color: #fff;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase; */

    width: 100%;
    height: 60px;
    padding: 0;
    margin: 0;
  }
}
</style>
