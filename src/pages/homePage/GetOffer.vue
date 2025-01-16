<template>
  <section class="get-offer">
    <div class="get-offer_text-container">
      <h2 class="get-offer_title">ПОЛУЧИТЕ ПРЕДЛОЖЕНИЕ</h2>
      <button
        @click="() => openPopup('Получить прайс-лист')"
        type="button"
        class="get-offer_button"
      >
        ПОЛУЧИТЬ ПРАЙС-ЛИСТ
      </button>
    </div>

    <div class="get-offer_image-container">
      <picture>
        <source
          srcset="../../../static/img/met-images/offer_mob.png"
          alt="offer_image"
          media="(max-width: 680px)"
        />
        <img src="../../../static/img/met-images/offer.png" alt="offer_image" />
      </picture>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  openPopup: (title?: string) => void;
}>();
</script>
<style scoped>
.get-offer {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 75px;
  width: 1440px;
  height: 556px;
  background: linear-gradient(112deg, #2381e3 29.32%, #1862ae 75.85%);
}
.get-offer_title {
  font-family: Jost;
  color: white;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 75.6px */
  text-transform: uppercase;
}
.get-offer_text-container {
  width: 474px;
  display: flex;
  flex-direction: column;
  /* padding-top: 124px; */
  gap: 85px;
}
.get-offer_button {
  width: 386px;
  height: 80px;
  color: #181818;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 16px;
  padding: 0;
  border: none;
}
.get-offer_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
@media (min-width: 320px) and (max-width: 680px) {
  .get-offer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
    width: 375px;
    height: 100%;
    padding: 33px 16px;
  }
  .get-offer_text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* padding-top: 124px; */
    gap: 28px;
  }
  .get-offer_title {
    font-family: Jost;
    color: white;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 135%; /* 75.6px */
    text-transform: uppercase;
  }
  .get-offer_button {
    width: 100%;
    height: 60px;
    color: #181818;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    border-radius: 16px;
    padding: 0;
    border: none;
    justify-content: center;
    align-items: center;
  }
}
</style>
