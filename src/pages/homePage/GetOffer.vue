<template>
  <section class="get-offer">
    <div>
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
    </div>

    <div class="get-offer_image-container">
      <picture>
        <source
          srcset="../../../static/img/met-images/get-offer_320.png"
          alt="offer_image"
          media="(max-width: 374px)"
        />
        <source
          srcset="../../../static/img/met-images/offer_mob.png"
          alt="offer_image"
          media="(max-width: 700px)"
        />

        <img
          class="get-offer_image"
          src="../../../static/img/met-images/offer.png"
          alt="offer_image"
        />
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
  /* width: 1440px; */
  width: 100%;
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
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  /* padding-top: 124px; */
  gap: 85px;
}
.get-offer_button {
  max-width: 386px;
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
.get-offer_image {
  width: 100%;
}
@media (min-width: 320px) and (max-width: 1280px) {
  .get-offer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 75px;
    width: 100%;
    height: 100%;
    padding: 33px 16px;
  }
  .get-offer_text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    max-width: 343px;
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
  .get-offer_image-container {
    max-width: 100%;
    height: auto;
  }
  .get-offer_image-mob {
    max-width: 100%;
    height: auto;
  }
}
</style>
