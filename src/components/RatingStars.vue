<template>
  <div class="rating" data-readonly="true">
    <div class="rating__body">
      <div class="rating__stars">
        <div v-for="star in ratingList" class="rating__star">
          <svg
            class="ico-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#star"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </div>
      </div>
      <div
        class="rating__active"
        :style="`width: ${ratingActiveWidth}%`"
        data-rating-active
      >
        <div class="rating__star">
          <svg
            class="ico-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#star"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </div>
        <div class="rating__star">
          <svg
            class="ico-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#star"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </div>
        <div class="rating__star">
          <svg
            class="ico-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#star"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </div>
        <div class="rating__star">
          <svg
            class="ico-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#star"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </div>
        <div class="rating__star">
          <svg
            class="ico-svg"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#star"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </div>
      </div>
      <div class="rating__items">
        <div
          v-for="star in ratingList"
          class="rating__item"
          :data-rating-item="star"
          @mouseenter="
            () => !props.readonly && serRatingActiveWidth(Number(star))
          "
          @mouseleave="() => !props.readonly && serRatingActiveWidth()"
          @click="() => !props.readonly && (rating = star)"
        ></div>
      </div>
    </div>

    <div class="rating__value">{{ rating }}</div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    rating?: string;
    readonly?: boolean;
  }>(),
  {
    readonly: true,
  }
);

const ratingList = [5, 4, 3, 2, 1];

const rating = ref(Number(props.rating) || 1);

const ratingActiveWidth = ref(0);

serRatingActiveWidth();

function serRatingActiveWidth(index = rating.value) {
  ratingActiveWidth.value = index / 0.05;
}
</script>

<style scoped></style>
