<template>
  <Header :homepage="true" :openPopup="openPopup" />
  <FormPopup
    :homepage="true"
    :isOpen="isPopupOpen"
    :closePopup="closePopup"
    :popupTitle="popupTitle"
  />
  <Intro :openPopup="openPopup" />
  <Fulfillment :openPopup="openPopup" />
  <AboutUs />
  <GetOffer :openPopup="openPopup" />
  <FulfillmentAdvantages />
  <Logistics :openPopup="openPopup" />
  <Marketplaces :openPopup="openPopup" />
  <BlueCaption />
  <Reviews />
  <Faq :homepage="true" />
  <Footer :homepage="true" />
</template>

<style scoped></style>
<script lang="ts" setup>
const isPopupOpen = ref(false);
const popupTitle = ref("Получить консультацию");

const openPopup = (title?: string) => {
  isPopupOpen.value = true;
  popupTitle.value = title || "Получить консультацию";
};
const closePopup = () => {
  isPopupOpen.value = false;
};
</script>
