<template>
  <div class="product__media">
    <div class="product__gallery">
      <swiper
        :modules="[Navigation, Pagination, Thumbs]"
        :spaceBetween="20"
        :slidesPerView="1"
        :observer="true"
        :observeParents="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :navigation="{
          nextEl: '.product__nav--next',
          prevEl: '.product__nav--prev',
        }"
      >
        <swiper-slide v-for="item of content">
          <a
            :href="`${baseUrl}${item.attributes.url}`"
            class="product__image"
            data-fancybox="gallery"
          >
            <img
              :src="`${baseUrl}${item.attributes.url}`"
              class="img-cover"
              alt=""
            />
          </a>
        </swiper-slide>
      </swiper>
    </div>
    <div class="product__control">
      <div class="product__thumbs">
        <swiper
          :modules="[Navigation, Pagination, Thumbs]"
          :spaceBetween="5"
          :slidesPerView="'auto'"
          :freeMode="true"
          :observer="true"
          :observeParents="true"
          :direction="'horizontal'"
          :watchSlidesProgress="true"
          @swiper="setThumbsSwiper"
          :breakpoints="{
            1250: {
              spaceBetween: 10,
              direction: 'horizontal',
            },
            1400: {
              spaceBetween: 16,
              direction: 'vertical',
            },
          }"
        >
          <swiper-slide v-for="(item, index) of content">
            <div
              :class="`product__thumb${index === selectedImg ? ' active' : ''}`"
              :data-thumb="index"
              :on-click="() => selectSlide(index)"
            >
              <img
                :src="`${baseUrl}${item.attributes.formats.thumbnail.url}`"
                class="img-cover"
                alt=""
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- .product__thumbs -->
      <button
        type="button"
        class="product__nav product__nav--prev"
        data-gallery-prev
      >
        <i>
          <svg
            class="ico-svg"
            viewBox="0 0 15 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#nav_arrow_left"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </i></button
      ><!-- .product__nav -->
      <button
        type="button"
        class="product__nav product__nav--next"
        data-gallery-next
      >
        <i>
          <svg
            class="ico-svg"
            viewBox="0 0 15 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#nav_arrow_right"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </i></button
      ><!-- .product__nav -->
    </div>
    <!-- .product__navigation -->
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

const config = useRuntimeConfig();

const baseUrl = config.public.baseURL;

defineProps<{
  content: {
    attributes: {
      alternativeText: string;
      url: string;
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  }[];
}>();

const selectedImg = ref(0);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper;
};

const selectSlide = (selectItem: number) => {
  console.log(selectItem);
  selectedImg.value = selectItem;
};
</script>

<style scoped></style>
