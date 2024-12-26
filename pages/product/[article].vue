<template>
  <div class="breadcrumb-block">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Main</a>
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__active">Product</span>
        </li>
      </ol>
    </div>
  </div>

  <div class="section section--white">
    <div class="container">
      <ProductHeader :title="product.title" :content="content" />

      <div class="product">
        <ProductMedia :content="product.imageList.data" />
        <ProductMain :product="product" :content="content" />
      </div>

      <div class="tabs" data-tabs>
        <div class="tabs__header">
          <!-- <div class="swiper" data-tabs-navigation>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <button class="tabs__btn active" data-tabs-nav="tab1">
                  <span>{{ content.description }}</span>
                </button>
              </div>
              <div class="swiper-slide">
                <button class="tabs__btn" data-tabs-nav="tab2">
                  <span>{{ content.specification }}</span>
                </button>
              </div>
              <div class="swiper-slide">
                <button class="tabs__btn" data-tabs-nav="tab3">
                  <span>{{ content.review }}</span>
                </button>
              </div>
              <div class="swiper-slide">
                <button class="tabs__btn" data-tabs-nav="tab4">
                  <span>{{ content.certificates }}</span>
                </button>
              </div>
            </div>
          </div> -->
          <swiper
            data-tabs-navigation
            :observer="true"
            :observeParents="true"
            slidesPerView="auto"
            :spaceBetween="30"
            :speed="500"
            :breakpoints="{
              1024: {
                spaceBetween: 10,
              },
              1250: {
                spaceBetween: 30,
              },
            }"
            :on="{}"
          >
            <swiper-slide>
              <ProductTabs
                tabName="tab1"
                :text="content.description"
                :isActive="true"
              />
            </swiper-slide>
            <swiper-slide>
              <ProductTabs tabName="tab2" :text="content.specification" />
            </swiper-slide>
            <swiper-slide>
              <ProductTabs tabName="tab3" :text="content.review" />
            </swiper-slide>
            <swiper-slide>
              <ProductTabs tabName="tab4" :text="content.certificates" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="tabs__content active" data-tabs-target="tab1">
          <!-- .tabs__content -->
          <div class="product-content">
            <div v-html="product.description"></div>
            <div class="product-content__download">
              <a href="#" class="btn-download">
                <i class="btn-download__icon">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#doc"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                </i>
                <span class="btn-download__text">Download a manual</span>
              </a>
            </div>
          </div>
          <!-- .product-content -->
        </div>
        <div class="tabs__content" data-tabs-target="tab2">
          <ProductSpecifications :specifications="product.specifications" />
          <!-- <div class="product-specifications">
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>

            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
          </div> -->
        </div>
        <!-- .tabs__content -->
        <!-- <div class="tabs__content" data-tabs-target="tab3">
          <ProductReview :title="product.title" />
        </div> -->
        <!-- .tabs__content -->
        <div class="tabs__content" data-tabs-target="tab4">
          <ProductDocs />
        </div>
        <!-- .tabs__content -->
      </div>
      <!-- .tabs -->
    </div>
  </div>
  <!-- .section -->

  <div class="section section--white">
    <ProductReviewRating />
  </div>
  <!-- .section -->

  <div class="section section--white">
    <ProductRecommendation />
  </div>
  <!-- .section -->
</template>

<script setup lang="ts">
import Sliders from "../../static/js/components/sliders.js";
import ProductHeader from "./components/ProductHeader.vue";
import ProductMedia from "./components/ProductMedia.vue";
import ProductMain from "./components/ProductMain.vue";
import ProductSpecifications from "./components/ProductSpecifications.vue";
import ProductDocs from "./components/ProductDocs.vue";
import ProductRecommendation from "./components/ProductRecommendation.vue";
import ProductReviewRating from "./components/ProductReviewRating.vue";
import ProductReview from "./components/ProductReview.vue";
import { useLocale } from "../../src/composables/useLocale";
import { Swiper, SwiperSlide } from "swiper/vue";
import ProductTabs from "../../pages/product/components/ProductTabs.vue";
const route = useRoute();

onMounted(async () => {
  if (import.meta.client) {
    Sliders();
  }
});

const { findOne, find } = useStrapi();

const locale = useLocale();

const product = ref({
  title: "",
  isNew: false,
  isActive: false,
  price: 0,
  discount: 0,
  description: "",
  image: "",
  specialty: "",
  specifications: [
    {
      specification: "",
    },
  ],
  preview: "",
  imageList: {
    data: [],
  },
  marketplaceLinks: [
    {
      link: "",
      marketplace: "",
    },
  ],
});

const reviews = ref<any[]>([]);

const content = ref({
  description: "",
  review: "",
  addToFavorites: "",
  notification: "",
  comparison: "",
  new: "",
  inStock: "",
  outStock: "",
  addToCart: "",
  marketplaceLinks: "",
  specification: "",
  certificates: "",
});

const getProduct = async () => {
  const data = await findOne("products", {
    filters: {
      link: {
        $eq: route.params.article,
      },
    },
    populate: "*",
    locale: locale.value,
  })
    // @ts-ignore
    .then((x) => x.data[0])
    .catch((error) => console.log(error));

  if (data) {
    product.value = data.attributes;

    console.log(data.attributes);
  }
};

const getReview = async () => {
  const data = await find("reviews", {
    filters: {
      link: {
        $eq: route.params.article,
      },
    },
    populate: "*",
    locale: locale.value,
  })
    // @ts-ignore
    .then((x) => x.data[0])
    .catch((error) => console.log(error));

  if (data) {
    // @ts-ignore
    reviews.value = data.attributes;

    console.log(data.attributes);
  }
};

const getContent = async () => {
  await getProduct();

  const { data: data } = await find(`product-content`, {
    populate: "*",
    locale: locale.value,
  });

  if (data) {
    // @ts-ignore
    content.value = data.attributes;
  }
};

await getContent();

watch(locale, async () => {
  await getContent();
});
</script>

<style lang="scss"></style>
