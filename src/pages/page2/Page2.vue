<template>
  <FormPopup
    :homepage="false"
    :isOpen="isPopupOpen"
    :closePopup="closePopup"
    :popupTitle="popupTitle"
  />
  <Header :page="'marketplaces'" :openPopup="openPopup" />
  <Intro2 :openPopup="openPopup" />
  <Service2 :openPopup="openPopup" />
  <Advantages2 />
  <Maintenance2 />
  <NextStage2 />
  <Documentation2 :openPopup="openPopup" />
  <Results2 />
  <!-- <ClientResults2 />  нет контента -->
  <Faq2 :secondPage="true" />
  <Footer :homepage="false" :secondPage="true" />
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
