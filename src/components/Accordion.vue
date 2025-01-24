<template>
  <section
    :class="['accordion', secondPage && 'accordion_blue-card']"
    id="accordion"
  >
    <h3 :class="['accordion_title', secondPage && 'accordion_title-centered']">
      {{ sectionTitle }}
    </h3>

    <AccordionElement
      v-for="element in elements"
      :id="element.id"
      :title="element.title"
      :content="element.content"
      :handleClick="handleClick"
      :secondPage="secondPage"
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
  secondPage?: boolean;
}>();

const openedElement = ref(props.defaultOpenedElementId);
const computedOpenedElement = computed(() => {
  return openedElement.value;
});

const handleClick = (id: string) => {
  openedElement.value = openedElement.value === id ? undefined : id;
};
</script>
<style scoped>
.accordion {
  margin: 110px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 1200px; */
  width: 100%;
}
.accordion > :last-child {
  border: none;
}
.accordion_blue-card > :nth-child(even) {
  background: #e5f5ff;
}
.accordion_title {
  color: var(--main, #181818);
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
  padding-bottom: 40px;
  max-width: 1200px;
  width: 100%;
}
.accordion_title-centered {
  text-align: center;
}

@media (min-width: 320px) and (max-width: 680px) {
  .accordion {
    margin: 60px auto;
    /* width: 375px; */
    padding: 0;
  }

  .accordion_title {
    font-size: 20px;
    padding-bottom: 24px;
    padding-left: 20px;
  }
}
</style>
