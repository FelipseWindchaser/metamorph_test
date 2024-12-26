<template>
  <div class="news-header">
    <div class="container">
      <div class="news-header__main">
        <div class="news-header__content">
          <div class="news-header__title">
            {{ content.headerContent.title }}
          </div>
          <div class="news-header__text">
            {{ content.headerContent.text }}
          </div>
        </div>
        <div class="news-header__media">
          <div class="news-header__trailer news-header__trailer--01">
            <swiper
              :modules="[Autoplay]"
              :observer="true"
              :loop="true"
              :initialSlide="2"
              :observeParents="true"
              slidesPerView="auto"
              :spaceBetween="10"
              :speed="6000"
              :autoplay="{
                delay: 0,
                reverseDirection: false,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                768: {
                  direction: 'vertical',
                  spaceBetween: 10,
                },
                1250: {
                  direction: 'vertical',
                  spaceBetween: 20,
                },
              }"
              :on="{}"
            >
              <swiper-slide v-for="item of items">
                <ItemShowcase :webp="item.webp" :img="item.img" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="news-header__trailer news-header__trailer--02">
            <swiper
              :modules="[Autoplay]"
              :observer="true"
              :loop="true"
              :initialSlide="2"
              :observeParents="true"
              slidesPerView="auto"
              :spaceBetween="10"
              :speed="8000"
              :autoplay="{
                delay: 0,
                reverseDirection: false,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                768: {
                  direction: 'vertical',
                  spaceBetween: 10,
                },
                1250: {
                  direction: 'vertical',
                  spaceBetween: 20,
                },
              }"
              :on="{}"
            >
              <swiper-slide v-for="item of items">
                <ItemShowcase :webp="item.webp" :img="item.img" />
              </swiper-slide>
            </swiper>
          </div>
          <div class="news-header__trailer news-header__trailer--03">
            <swiper
              :modules="[Autoplay]"
              :observer="true"
              :loop="true"
              :initialSlide="2"
              :observeParents="true"
              slidesPerView="auto"
              :spaceBetween="10"
              :speed="7000"
              :autoplay="{
                delay: 0,
                reverseDirection: false,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                768: {
                  direction: 'vertical',
                  spaceBetween: 10,
                },
                1250: {
                  direction: 'vertical',
                  spaceBetween: 20,
                },
              }"
              :on="{}"
            >
              <swiper-slide v-for="item of items">
                <ItemShowcase :webp="item.webp" :img="item.img" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- .news-header -->

  <div class="section section--white section--top">
    <div class="container">
      <PrettyHeading
        :content="content.prettyHeadingContent"
        :full="content.prettyHeadingContent.full"
      />

      <div class="news-primary">
        <div class="news-primary__main">
          <div class="news-primary__header">
            {{ content.newsPrimaryContent.header }}
          </div>
          <div class="news-primary__content">
            <ul class="news-primary__text">
              <li v-for="item in content.newsPrimaryListItems">
                {{ item.text }}
              </li>
            </ul>
            <NuxtLink
              :to="`/news/posts/${content.newsPrimaryContent.link}`"
              class="news-primary__link"
              >{{ content.newsPrimaryContent.linkText }}</NuxtLink
            >
          </div>
        </div>
        <div class="news-primary__media news-primary__media--sm">
          <Image
            :image="content.newsPrimaryVerticalImage"
            :altName="content.newsPrimaryImageAlt"
            :className="content.newsPrimaryImageClass"
          />
          <!-- <img src="@img/news_primary_image__sm.jpg" class="img-cover" alt="" /> -->
        </div>
        <div class="news-primary__media news-primary__media--md">
          <Image
            :image="content.newsPrimaryHorizontalImage"
            :altName="content.newsPrimaryImageAlt"
            :className="content.newsPrimaryImageClass"
          />
          <!-- <img src="@img/news_primary_image__md.jpg" class="img-cover" alt="" /> -->
        </div>
      </div>
      <!-- .news-primary -->

      <div class="news-block">
        <div class="news-block__main">
          <div class="news-block__grid">
            <div v-for="{ attributes: post } in posts" class="news-item">
              <NuxtLink
                :to="`/news/posts/${post.link}`"
                class="news-item__media"
              >
                <Image
                  :image="post.previewImage"
                  :altName="post.previewImageAlt"
                  :className="post.previewImageClass"
                />
                <!-- <img
                  src="@img/content/news_item_image.jpg"
                  class="img-cover"
                  alt=""
                /> -->
              </NuxtLink>
              <div class="news-item__title">
                <NuxtLink :to="`/news/posts/${post.link}`">
                  {{ post.previewTitle }}
                </NuxtLink>
              </div>
              <div class="news-item__text">
                {{ post.previewText }}
              </div>
              <div class="news-item__footer">
                <NuxtLink
                  :to="`/news/posts/${post.link}`"
                  class="news-item__link"
                >
                  {{ post.previewLink }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="news-block__footer">
          <button type="button" class="btn btn-border">
            <span>{{ content.buttonText.text }}</span>
          </button>
        </div>
      </div>
      <!-- .news-block -->
    </div>
  </div>
  <div class="main">
    <SubscriptionForm
      :content="content.subscriptionContent"
      :isPost="content.subscriptionContent.isPost"
    />
  </div>
</template>

<script setup lang="ts">
import { useApi } from "../../src/composables/useApi";
import { useLocale } from "../../src/composables/useLocale";
import SubscriptionForm from "./components/SubscriptionForm.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import ItemShowcase from "./components/NewsShowcase/items.vue";

const locale = useLocale();
const { find } = useStrapi();
const posts = ref<any[]>([]);
const query = `?populate=*`;

const items = [
  {
    webp: "@img/news-header/news_header_image__01.jpg",
    img: "@img/news-header/news_header_image__01.jpg",
  },
  {
    webp: "@img/content/showcase_image__02.webp",
    img: "@img/content/showcase_image__02.jpg",
  },
  {
    webp: "@img/content/showcase_image__03.webp",
    img: "@img/content/showcase_image__03.jpg",
  },
  {
    webp: "@img/content/showcase_image__04.webp",
    img: "@img/content/showcase_image__04.jpg",
  },
  {
    webp: "@img/content/showcase_image__05.webp",
    img: "@img/content/showcase_image__05.jpg",
  },
  {
    webp: "@img/content/showcase_image__06.webp",
    img: "@img/content/showcase_image__06.jpg",
  },
  {
    webp: "@img/content/showcase_image__07.webp",
    img: "@img/content/showcase_image__07.jpg",
  },
];

const content = ref({
  headerContent: {
    title: "",
    text: "",
  },
  prettyHeadingContent: {
    tag: "",
    title: "",
    full: true,
  },
  subscriptionContent: {
    title: "",
    subtitle: "",
    button: "",
    text: "",
    isPost: false,
  },
  newsPrimaryContent: {
    header: "",
    link: "",
    linkText: "",
  },
  newsPrimaryListItems: [
    {
      text: "",
    },
  ],
  buttonText: {
    text: "",
  },
  newsPrimaryHorizontalImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  newsPrimaryVerticalImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  newsPrimaryImageAlt: "",
  newsPrimaryImageClass: "",

  previewImage: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: "",
          },
          small: {
            url: "",
          },
          source: {
            url: "",
          },
        },
      },
    },
  },
  previewImageAlt: "",
  previewImageClass: "",
  breadcrumbContent: {
    link: "",
    linkText: "",
    span: "",
  },
});

const getNews = async () => {
  const data = await find<{
    link: string;
    previewText: string;
    previewTitle: string;
    previewLink: string;
  }>("news2", {
    populate: "*",
    locale: locale.value,
  })
    // @ts-ignore
    .then((x) => x.data)
    .catch((error) => console.log(error));

  if (data) {
    console.log("1", data);

    posts.value = data.filter(
      (x) => x.attributes.link !== content.value.newsPrimaryContent.link
    );
  }
};

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/news-page${query}`);

  if (data.value) {
    content.value = data.value.data.attributes;

    console.log(data.value.data.attributes);
  }

  if (error.value) {
    console.log(error);
  }
};

await getContent();
getNews();

watch(locale, async () => {
  await getContent();
  getNews();
});
</script>

<style scoped></style>
