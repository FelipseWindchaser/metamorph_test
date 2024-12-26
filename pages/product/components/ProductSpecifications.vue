<template>
  <div class="product-specifications">
    <div v-for="item of specificationList" class="product-specifications__item">
      <div class="product-specifications__tile">{{ item.key }}</div>
      <div class="product-specifications__line"></div>
      <div class="product-specifications__value">{{ item.value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  specifications: {
    specification: string;
  }[];
}>();

const specificationList = ref<
  {
    key: string;
    value: string;
  }[]
>([]);

const getContent = () => {
  specificationList.value = [];

  for (const { specification } of props.specifications) {
    const [key, value] = specification.split(": ");

    if (value) {
      specificationList.value.push({ key, value });
    }
  }
};

getContent();

watch(
  () => props.specifications,
  () => getContent()
);
</script>

<style scoped></style>
