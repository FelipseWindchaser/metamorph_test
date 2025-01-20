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
  <Marketplaces :openPopup="openPopup" />
  <BlueCaption />
  <Reviews />
  <Faq />
  <Footer :homepage="true" />
</template>

<style scoped></style>

<script lang="ts" setup>
const isPopupOpen = ref(false);
const popupTitle = ref("Получить консультацию");
const isAnswerOpen = ref(false);

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
const openAnswer = (id: string) => {
  isAnswerOpen.value = true;
  // const cardId = id;
  console.log(id);
  const faqCard = document.querySelector(".faq_card");
  // console.log(faqCard);
  if (faqCard) {
    faqCard.classList.remove("hidden-answer");
  }
};
</script>
