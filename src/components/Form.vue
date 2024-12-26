<template>
  <div v-if="text" class="main-form__field main-form__field--xl mt-10">
    <div class="d-flex align-center column-gap-10">
      <label class="switcher">
        <input type="checkbox" name="switcher" checked />
        <span
          class="switcher__label"
          data-switcher-checked="Да"
          data-switcher-base="Нет"
        >
          <span></span>
        </span>
      </label>
      <div class="label-text">{{ content.textLabel }}</div>
    </div>
  </div>
  <div v-else-if="file" class="main-form__field main-form__field--xl mt-10">
    <label class="file-field" data-file>
      <input
        type="file"
        name="file"
        class="file-field__input"
        data-file-input
      />
      <i class="file-field__media">
        <i class="file-field__close" data-file-reset></i>
        <i class="file-field__icon">
          <svg
            class="ico-svg"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#file"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </i>
      </i>
      <span class="file-field__name" data-file-placeholder="Прикрепить файл">{{
        content.textLabel
      }}</span>
    </label>
  </div>
  <div v-else-if="empty" class="main-form__field main-form__field--xl">
    <label class="field">
      <textarea name="message" placeholder="Message" data-dynamic></textarea>
    </label>
  </div>
  <div class="main-form__field main-form__field--xl mt-10">
    <div class="main-form__group">
      <div class="main-form__item">
        <label class="checkbox">
          <input type="checkbox" name="check" class="checkbox__input" checked />
          <span class="checkbox__label">
            {{ content.checkboxLabel }}
          </span>
        </label>
      </div>
      <div class="main-form__item">
        <button type="button" class="btn btn-red btn-md">
          <span>{{ content.textButton }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    textLabel?: string;
    checkboxLabel: string;
    textButton: string;
  };
  text?: boolean;
  file?: boolean;
  empty?: boolean;
}>();
</script>

<style scoped></style>
