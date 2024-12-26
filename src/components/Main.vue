<template>
  <FirstSection :content="content.FirstSection" :products="products" />
  <Showcase />
  <TopChapter />
  <MainSwiper />
  <Luxurious />
  <Discovery />
</template>

<script setup lang="ts">
const props = defineProps<{
  content: any;
  products: any[];
}>();
</script>

<style scoped></style>
