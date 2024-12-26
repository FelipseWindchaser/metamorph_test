<template>
  <div class="heading">
    <div class="container">
      <div class="heading__wrap heading__wrap--center">
        <div class="heading__title">{{ content.title }}</div>
        <div class="heading__text">
          {{ content.text }}
        </div>
      </div>
    </div>
  </div>
  <!-- .heading -->
</template>

<script setup lang="ts">
defineProps<{
  content: {
    title: string;
    text: string;
  };
}>();
</script>

<style scoped>
.heading {
  padding-top: 2.5rem;
  padding-bottom: 3.75rem;
  background-color: white;
}

.heading--middle {
  padding-top: 3.75rem;
  padding-bottom: 2.5rem;
  background-color: transparent;
}

.heading__wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  row-gap: 0.9375rem;
}

.heading__title {
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.875rem;
  text-transform: uppercase;
  font-family: var(--font-secondary);
  white-space: pre;
}

.heading__text {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25rem;
}

@media (min-width: 768px) {
  .heading {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  .heading--middle {
    padding-top: 2.5rem;
    padding-bottom: 1.875rem;
  }
  .heading__wrap {
    -webkit-column-gap: 2.5rem;
    -moz-column-gap: 2.5rem;
    column-gap: 2.5rem;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .heading__wrap--center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .heading__title {
    width: 18.125rem;
  }
  .heading__text {
    width: 20.625rem;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
}

@media (min-width: 1024px) {
  .heading__title {
    width: 27.5rem;
  }
  .heading__text {
    width: 25rem;
  }
}

@media (min-width: 1250px) {
  .heading {
    padding-top: 2.5rem;
    padding-bottom: 3.75rem;
  }
  .heading--middle {
    padding-top: 6.25rem;
    padding-bottom: 5rem;
  }
  .heading__title {
    width: 46.25rem;
    font-size: 2.25rem;
    line-height: 2.6875rem;
  }
  .heading__text {
    width: 25rem;
  }
}
</style>
