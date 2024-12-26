<template>
  <div
    :class="`section
    ${partnership ? ' section--top-custom-sm' : ''} 
    ${warranty ? ' section--top' : ''}
    `"
  >
    <div class="container">
      <div class="section__tag">
        {{ content.tag }}
      </div>
      <div class="section__header">
        <h2 class="section__title">
          {{ content.title }}
        </h2>
      </div>
      <div class="section__body">
        <div v-for="item of list" class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              {{ item.title }}
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    tag: string;
    title: string;
  };
  list: {
    title: string;
    text: string;
  }[];
  partnership?: boolean;
  warranty?: boolean;
}>();
</script>

<style scoped>
.faq {
  opacity: 0.2;
  border-bottom: 1px solid var(--black);
  -webkit-transition: opacity var(--transition-time);
  transition: opacity var(--transition-time);
}

.faq__header {
  cursor: pointer;
  -webkit-column-gap: 1.25rem;
  -moz-column-gap: 1.25rem;
  column-gap: 1.25rem;
  padding: 0.9375rem 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.faq__title {
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  font-family: var(--font-secondary);
}

.faq__control {
  width: 18px;
  height: 18px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative;
}

.faq__control:after,
.faq__control:before {
  z-index: 1;
  top: calc(50% - 1px);
  left: calc(50% - 6px);
  content: "";
  width: 12px;
  height: 2px;
  display: block;
  border-radius: 2px;
  position: absolute;
  background-color: var(--black);
}

.faq__control:after {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transition: var(--transition-time);
  transition: var(--transition-time);
}

.faq__content {
  padding-right: 1.875rem;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.faq__content p {
  margin: 0 0 1.25rem 0;
}

.faq__content p:last-child {
  margin-bottom: 0;
}

.faq__wrap {
  padding-bottom: 0.9375rem;
}

.faq.open {
  opacity: 1;
  -webkit-transition: opacity var(--transition-time);
  transition: opacity var(--transition-time);
}

.faq.open .faq__control:after,
.faq.open .faq__control:before {
  background-color: var(--red);
}

.faq.open .faq__control:after {
  -webkit-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: var(--transition-time);
  transition: var(--transition-time);
}

@media (min-width: 768px) {
  .faq__header {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .faq__wrap {
    padding-bottom: 0.75rem;
  }
  .faq__control {
    width: 1rem;
    height: 1rem;
  }
}

@media (min-width: 1250px) {
  .faq__header {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
  .faq__title {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
  .faq__wrap {
    padding-bottom: 1.25rem;
  }
  .faq__content {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .faq__control {
    width: 1rem;
    height: 1rem;
  }
}
</style>
