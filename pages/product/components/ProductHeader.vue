<template>
  <div class="product-header">
    <h1 class="product-header__title">{{ title }}</h1>
    <div class="product-header__info">
      <div class="product-header__rating">
        <RatingStars rating="3.5" />
      </div>
      <a href="#" class="product-header__comments">15 {{ content.review }}</a>
    </div>
    <div class="product-header__control">
      <button type="button" class="btn-control">
        <i class="btn-control__icon">
          <i>
            <svg
              class="ico-svg"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlink:href="@img/sprites/sprite.svg#favorite"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </i>
        </i>
        <span class="btn-control__text">{{
          content.addToFavorites
        }}</span></button
      ><!-- .btn-control -->
      <button type="button" class="btn-control">
        <i class="btn-control__icon">
          <i>
            <svg
              class="ico-svg"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlink:href="@img/sprites/sprite.svg#compare"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </i>
        </i>
        <span class="btn-control__text">{{ content.comparison }}</span></button
      ><!-- .btn-control -->
      <button
        type="button"
        data-src="#callback"
        class="btn-control"
        data-fancybox
      >
        <i class="btn-control__icon">
          <i>
            <svg
              class="ico-svg"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use
                xlink:href="@img/sprites/sprite.svg#bell"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              ></use>
            </svg>
          </i>
        </i>
        <span class="btn-control__text">{{
          content.notification
        }}</span></button
      ><!-- .btn-control -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  content: {
    review: string;
    addToFavorites: string;
    notification: string;
    comparison: string;
  };
}>();
</script>

<style scoped></style>
