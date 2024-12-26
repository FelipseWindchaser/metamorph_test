<template>
  <div class="section">
    <div class="container">
      <div class="hint-block mb-0">
        <swiper
          data-hint
          :observer="true"
          :observeParents="true"
          slidesPerView="auto"
          :spaceBetween="10"
          :speed="500"
          :breakpoints="{
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }"
          :on="{}"
        >
          <swiper-slide v-for="item in content.hintList">
            <div class="hint">
              <div class="hint__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#traced"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
              <div class="hint__title">
                {{ item.title }}
              </div>
              <div class="hint__text">
                {{ item.text }}
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- <div class="swiper" data-hint>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="hint">
                <div class="hint__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#traced"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </div>
                <div class="hint__title">
                  Discover a Wide Range of High-Quality Products
                </div>
                <div class="hint__text">
                  Explore our extensive collection of home goods, including
                  furniture, decor, bedding, kitchenware, and more. Each product
                  is meticulously crafted with attention to detail and
                  innovative design elements.
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="hint">
                <div class="hint__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#traced"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </div>
                <div class="hint__title">
                  Personalize Your Home with Customization Options
                </div>
                <div class="hint__text">
                  Make your home truly yours by taking advantage of our
                  customization options. From personalized designs to color
                  choices and sizing options, create a space that reflects your
                  unique style.
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="hint">
                <div class="hint__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#traced"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </div>
                <div class="hint__title">
                  Engage with a Community of Home Enthusiasts
                </div>
                <div class="hint__text">
                  Join our community of home enthusiasts and stay connected
                  through our blog posts, how-to guides, and lifestyle articles.
                  Get inspired and share your own experiences with Atvel home
                  goods.
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { useApi } from "../../composables/useApi";
import { useLocale } from "../../composables/useLocale";
const locale = useLocale();
const content = ref({
  hintList: [
    {
      title: "",
      text: "",
    },
  ],
});
const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/main-page${query}`);

  if (data.value) {
    content.value = data.value.data.attributes;

    console.log(data.value.data.attributes);
  }

  if (error.value) {
    console.log(error);
  }
};

await getContent();

watch(locale, async () => {
  await getContent();
});
</script>

<style scoped></style>
