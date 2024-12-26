<template>
  <div class="section section--first">
    <div class="container">
      <div class="primary">
        <div class="primary__offer">
          <div class="primary-offer">
            <img src="@img/primary_offer_image.jpg" class="img-cover" alt="" />
            <div class="primary-offer__content">
              <div class="primary-offer__text">
                {{ content.primary_offer__text }}
              </div>
              <div class="primary-offer__lead">
                {{ content.primary_offer__lead }}
              </div>
            </div>
          </div>
          <!-- .primary-offer -->
          <div class="primary__content primary__content--md">
            <a href="#" class="btn-shop">
              <span>{{ content.btn_shop__text }}</span>
            </a>
            <div class="primary__text">
              {{ content.primary__text }}
            </div>
          </div>
        </div>
        <!-- .primary__offer -->
        <div class="primary__showcase">
          <swiper
            :modules="[Pagination, Autoplay]"
            :spaceBetween="30"
            :slidesPerView="1"
            :observer="true"
            :observeParents="true"
            :loop="true"
            :speed="500"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              el: '[data-primary-pagination]',
              clickable: true,
            }"
          >
            <swiper-slide v-for="{ attributes: product } of products">
              <div class="primary-item">
                <div class="primary-item__content">
                  <div class="primary-item__title">
                    <NuxtLink :to="`/product/${product.link}`">{{
                      product.title
                    }}</NuxtLink>
                  </div>
                  <div class="primary-item__price">
                    <div class="primary-item__price-new">
                      <span class="color-red">$</span>
                      {{
                        `${Math.ceil(
                          product.price -
                            (product.discount / 100) * product.price
                        )}`
                      }}
                    </div>
                    <div class="primary-item__price-old">
                      $ {{ product.price }}
                    </div>
                  </div>
                </div>
                <div class="primary-item__media">
                  <img
                    :src="`${baseUrl}${product.image.data.attributes.url}`"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="primary-item">
                <div class="primary-item__content">
                  <div class="primary-item__title">
                    <a href="#"
                      >Atvel <br />робот-пылесос SmartGyro R80 Base Black</a
                    >
                  </div>
                  <div class="primary-item__price">
                    <div class="primary-item__price-new">
                      <span class="color-red">$</span>
                      590
                    </div>
                    <div class="primary-item__price-old">$ 720</div>
                  </div>
                </div>
                <div class="primary-item__media">
                  <img
                    src="@img/content/primary_product_item.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </swiper-slide>
            <div class="primary__pagination" data-primary-pagination></div>
          </swiper>
        </div>
        <!-- .primary__showcase -->
        <div class="primary__content primary__content--sm">
          <a href="#" class="btn-shop">
            <span>{{ content.btn_shop__text }}</span>
          </a>
          <div class="primary__text">
            {{ content.primary__text }}
          </div>
        </div>
        <!-- .primary__content -->
      </div>
      <!-- .primary -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

const config = useRuntimeConfig();

const baseUrl = config.public.baseURL;

const props = defineProps<{
  content: any;
  products: any[];
}>();

console.log(props.products);

watch(
  () => props.products,
  () => {
    console.log(props.products);
  }
);
</script>

<style scoped></style>
