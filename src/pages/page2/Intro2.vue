<template>
  <section class="intro">
    <div class="intro__textblock">
      <h2 class="intro__title">Комплексное продвижение на маркетплейсах</h2>
      <p class="intro__text">
        Разработка стратегии продвижения, SEO-оптимизация, запуск рекламных
        кампаний для повышения видимости и конверсии
      </p>
      <button @click="() => openPopup('Оставить заявку')" class="intro__button">
        ОСТАВИТЬ ЗАЯВКУ
        <img src="../../../static/img/page2-images/Arrow-right.svg" />
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
.intro {
  background: url(../../../static/img/page2-images/Page2-intro.jpg) lightgray
    50% / cover no-repeat;
  max-height: 703px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-style: normal;
}

.intro__textblock {
  margin: auto;
  padding-top: 152px;
  padding-bottom: 195px;
}

.intro__title {
  font-family: Jost;
  font-size: 54px;
  font-weight: 700;
  line-height: 140%;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.intro__text {
  font-size: 24px;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
  margin: 0 auto;
  width: 750px;
}

.intro__button {
  color: #181818;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  display: inline-flex;
  height: 72px;
  padding: 24px 71px 23px 83px;
  flex-shrink: 0;
  align-items: center;
  margin-top: 44px;
  gap: 10px;
  border-radius: 16px;
  background: #fff;
  border: 0px;

  cursor: pointer;
}

.intro__button:hover {
  opacity: 0.85;
  transition: 0.2s;
}
@media (min-width: 320px) and (max-width: 680px) {
  .intro {
    background: url(../../../static/img/page2-images/unoptimized/page2_intro_mob.jpg)
      lightgray 50% / cover no-repeat;
    max-height: 638px;
  }
  .intro__textblock {
    padding-bottom: 155px;
  }
  .intro__title {
    font-size: 30px;
    margin-bottom: 12px;
  }

  .intro__text {
    font-size: 17px;
    width: 100%;
    padding: 0 25px;
  }

  .intro__button {
    height: 60px;
    padding: 18px 52px 17px 83px;
    margin-top: 40px;
  }

  .intro__button:hover {
    opacity: 0.85;
    transition: 0.2s;
  }
}
</style>
