<template>
  <div class="breadcrumb-block">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <NuxtLink :to="`${content.link}`" class="breadcrumb__link">
            {{ content.linkText }}
          </NuxtLink>
          <!-- <a href="#" class="breadcrumb__link">{{ content.link }}</a> -->
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__active">{{ content.span }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    link: string;
    linkText: string;
    span: string;
  };
}>();
</script>

<style scoped></style>
