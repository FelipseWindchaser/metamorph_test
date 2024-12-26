<template>
  <a href="#" class="showcase-item">
    <picture>
      <source :srcset="getImageUrl(webp)" type="image/webp" />
      <img :src="getImageUrl(img)" class="img-cover" :alt="imgAlt || ''" />
    </picture>
    <span class="showcase-item__title">{{ title }}</span>
  </a>
</template>

<script setup lang="ts">
const props = defineProps<{
  webp: string;
  img: string;
  imgAlt?: string;
  title: string;
}>();

const getImageUrl = (url: string) => {
  return url.replace("@", `_nuxt/static/`);
};
</script>

<style scoped></style>
