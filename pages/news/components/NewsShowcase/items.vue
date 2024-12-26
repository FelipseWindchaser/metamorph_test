<template>
  <div class="news-header__image">
    <picture>
      <source :srcset="getImageUrl(webp)" type="image/webp" />
      <img :src="getImageUrl(img)" class="img-cover" :alt="imgAlt || ''" />
    </picture>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  webp: string;
  img: string;
  imgAlt?: string;
}>();

const getImageUrl = (url: string) => {
  return url.replace("@", `_nuxt/static/`);
};
</script>

<style scoped></style>
