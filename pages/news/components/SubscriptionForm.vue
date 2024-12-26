<template>
  <div class="container">
    <div v-if="isPost" class="post-footer">
      <div class="post__label">{{ content.label }}</div>
      <div class="post__share">
        <button type="button" class="btn-social btn-social--md">
          <i>
            <svg
              class="ico-svg"
              viewBox="0 0 16 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlink:href="@img/sprites/sprite.svg#fb"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </i>
        </button>
        <button type="button" class="btn-social btn-social--md">
          <i>
            <svg
              class="ico-svg"
              viewBox="0 0 16 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlink:href="@img/sprites/sprite.svg#inst"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </i>
        </button>
        <button type="button" class="btn-social btn-social--md">
          <i>
            <svg
              class="ico-svg"
              viewBox="0 0 16 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlink:href="@img/sprites/sprite.svg#whatsapp"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </i>
        </button>
      </div>
    </div>
    <div class="subscribe">
      <h2 class="subscribe__title">{{ content.title }}</h2>
      <div class="subscribe__subtitle">
        {{ content.subtitle }}
      </div>
      <div class="subscribe__main">
        <form>
          <div class="subscribe__form">
            <div class="subscribe__field">
              <input type="text" name="email" placeholder="Enter your email" />
            </div>
            <div class="subscribe__button">
              <button type="submit" class="btn btn-red">
                <span>{{ content.button }}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="subscribe__text">
        {{ content.text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    label?: string;
    title: string;
    subtitle: string;
    button: string;
    text?: string;
  };
  listItems?: {
    text: string;
  }[];
  isPost?: boolean;
}>();
</script>

<style lang="scss" scoped></style>
