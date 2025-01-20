<template>
  <section class="faq" id="faq">
    <h3 class="faq_title">{{ sectionTitle }}</h3>
    <AccordionElement
      v-for="element in elements"
      :id="element.id"
      :title="element.title"
      :content="element.content"
      :handleClick="handleClick"
      :isOpen="computedOpenedElement === element.id"
    >
    </AccordionElement>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  sectionTitle: string;
  elements: {
    id: string;
    title: string;
    content: string;
  }[];
  defaultOpenedElementId?: string;
}>();

const openedElement = ref(props.defaultOpenedElementId);
const computedOpenedElement = computed(() => {
  return openedElement.value;
});

const handleClick = (id: string) => {
  openedElement.value = openedElement.value === id ? undefined : id;
  console.log(id, openedElement.value);
};
</script>
<style scoped>
.faq {
  margin: 110px auto;
  width: 1200px;
}
.faq > :last-child {
  border: none;
}
.faq_title {
  color: var(--main, #181818);
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
  padding-bottom: 22px;
}
@media (min-width: 320px) and (max-width: 680px) {
  .faq {
    margin: 60px auto;
    width: 375px;
    padding: 0 16px;
  }

  .faq_title {
    font-size: 20px;
    padding-bottom: 6px;
  }
}
</style>
