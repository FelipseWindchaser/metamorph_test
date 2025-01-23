<template>
  <FormPopup
    :homepage="true"
    :isOpen="isPopupOpen"
    :closePopup="closePopup"
    :popupTitle="popupTitle"
  />
  <Header :homepage="true" :openPopup="openPopup" />
  <Intro :openPopup="openPopup" />
  <Fulfillment :openPopup="openPopup" />
  <AboutUs />
  <GetOffer :openPopup="openPopup" />
  <FulfillmentAdvantages />
  <Logistics :openPopup="openPopup" />
  <Marketplaces />
  <BlueCaption />
  <!-- <Reviews /> -->
  <!-- раскомментировать когда появится контент -->
  <Faq />
  <Footer :homepage="true" />
</template>

<style scoped></style>

<script lang="ts" setup>
const isPopupOpen = ref(false);
const popupTitle = ref("Получить консультацию");

const openPopup = (title?: string) => {
  isPopupOpen.value = true;
  popupTitle.value = title || "Получить консультацию";

  const body = document.querySelector("body");
  if (body) {
    body.classList.add("scroll-off");
  }
};

const closePopup = () => {
  isPopupOpen.value = false;
  const body = document.querySelector("body");
  if (body) {
    body.classList.remove("scroll-off");
  }
};
</script>
