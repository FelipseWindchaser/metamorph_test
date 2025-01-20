<template>
  <Accordion
    :sectionTitle="title"
    :elements="elements"
    :defaultOpenedElementId="'fc_1'"
  />
</template>
<script setup lang="ts">
const title = "часто задаваемые вопросы";
const elements = [
  {
    id: "fc_1",
    title: "Преимущества интернет-сервиса для торговли «МойСклад»",
    content: "Можете уточнить у наших операторов.",
  },
  {
    id: "fc_2",
    title:
      "Масса возможностей для управления торговыми процессами через «МойСклад»",
    content: "Стоимость можете уточнить у наших операторов.",
  },
  {
    id: "fc_3",
    title: "Мобильное приложение «МойСклад» максимально удобно в использовании",
    content: "Стоимость можете уточнить у наших операторов.",
  },
];
</script>
