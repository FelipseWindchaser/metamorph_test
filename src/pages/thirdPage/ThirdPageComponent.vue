<template>
  <Header :homepage="false" :openPopup="openPopup" />
  <FormPopup
    :homepage="false"
    :isOpen="isPopupOpen"
    :closePopup="closePopup"
    :popupTitle="popupTitle"
  />
  <IntroMs :openPopup="openPopup" />
  <Presentation :openPopup="openPopup" />
  <Benefits :openPopup="openPopup" />
  <Advantages :openPopup="openPopup" />
  <Capabilities :openPopup="openPopup" />
  <Pricing :openPopup="openPopup" />
  <IntroductionStages :openPopup="openPopup" />
  <AboutUsMs />
  <Faq :homepage="false" />
  <Footer :homepage="false" />
</template>
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

<style scoped></style>
