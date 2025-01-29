<template>
  <FormPopup
    :homepage="false"
    :isOpen="isPopupOpen"
    :closePopup="closePopup"
    :popupTitle="popupTitle"
  />
  <Header :page="'msklad-erp'" :openPopup="openPopup" />
  <IntroMs :openPopup="openPopup" />
  <Presentation :openPopup="openPopup" />
  <Benefits :openPopup="openPopup" />
  <Advantages :openPopup="openPopup" />
  <Capabilities :openPopup="openPopup" />
  <Pricing :openPopup="openPopup" />
  <IntroductionStages :openPopup="openPopup" />
  <AboutUsMs />
  <FaqMs />
  <Footer :homepage="false" />
</template>
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

<style scoped></style>
