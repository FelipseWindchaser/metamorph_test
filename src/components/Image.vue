<template>
  <picture class="picture">
    <source
      :srcset="`${baseUrl}${image.data.attributes.formats.small.url}`"
      media="(max-width: 500px)"
    />
    <source
      :srcset="`${baseUrl}${image.data.attributes.formats.medium.url}`"
      media="(max-width: 1000px)"
    />
    <img
      :src="`${baseUrl}${image.data.attributes.formats.source.url}`"
      :class="`${className}`"
      :alt="`${altName}`"
    />
  </picture>
</template>

<script setup lang="ts">
import { useLocale } from "@/src/composables/useLocale";

defineProps<{
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
          source: {
            url: string;
          };
        };
      };
    };
  };

  altName: string;
  className: string;
}>();

const config = useRuntimeConfig();

const baseUrl = config.public.baseURL;
</script>

<style scoped>
.picture {
  display: flex;
  height: 100%;
}
.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
</style>
