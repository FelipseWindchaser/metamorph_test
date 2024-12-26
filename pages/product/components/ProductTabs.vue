<template>
  <button :class="['tabs__btn', isActive && 'active']" :data-tabs-nav="tabName">
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  tabName: string;
  text: string;
  isActive?: boolean;
}>();
</script>

<style scoped></style>
