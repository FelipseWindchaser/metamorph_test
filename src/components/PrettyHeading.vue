<template>
  <div :class="`pretty-heading ${vacancy ? ' pretty-heading--md' : ''} `">
    <div class="pretty-heading__tag">
      {{ content.tag }}
    </div>
    <h2 class="pretty-heading__title">
      {{ content.title }}
    </h2>
    <div v-if="full" class="pretty-heading__text">
      {{ content.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    tag: string;
    title: string;
    text?: string;
  };
  vacancy?: boolean;
  full?: boolean;
}>();
</script>

<style scoped>
.pretty-heading {
  max-width: 27.5rem;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}

.pretty-heading__tag {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 0.9375rem;
  padding-bottom: 0.625rem;
  border-bottom: 1px solid var(--red);
}

.pretty-heading__title {
  margin: 0;
}

.pretty-heading__text {
  margin: 0 auto;
  max-width: 58.75rem;
  color: var(--gray);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 1.25rem;
}

@media (min-width: 1250px) {
  .pretty-heading {
    max-width: 55.625rem;
    margin-bottom: 3.75rem;
  }
  .pretty-heading--md {
    max-width: 63.125rem;
  }
  .pretty-heading--xl {
    max-width: inherit;
  }
  .pretty-heading__tag {
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: 0.9375rem;
    padding-bottom: 1.25rem;
  }
  .pretty-heading__text {
    margin-top: 1.875rem;
  }
}
</style>
