<template>
  <Accordion
    :secondPage="true"
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
    title: "Какие документы нужны на товар?",
    content:
      "Стандартный комплект документов, что соответствует законодательству для продажи вашей категории товаров.",
  },
  {
    id: "fc_2",
    title: "Могу ли я работать с вами удаленно?",
    content: "После подписания договора можете работать удаленно.",
  },
  {
    id: "fc_3",
    title:
      "Я хочу продаваться на маркетплейсе, вы можете забрать на себя контент, доставку, упаковку и маркетинговое сопровождение?",
    content:
      "Наша компания предоставляет полный комплекс услуг: сопровождение контента, складское обслуживание, упаковку, доставку и все необходимое для успешного бизнеса на маркетплейсах.",
  },
  // {
  //   id: "fc_4",
  //   title: "Как быстро товар появится в продаже?",
  //   content: "Стоимость можете уточнить у наших операторов.",
  // },
  {
    id: "fc_4",
    title: "Какую схему работы вы мне посоветуете: FBS или FBO?",
    content: "Мы работаем как по схеме FBO, так и по схеме FBS.",
  },
];
</script>
