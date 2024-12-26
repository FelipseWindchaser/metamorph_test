<template>
  <Breadcrumb :content="content.breadcrumbContent" />
  <!-- <div class="breadcrumb-block">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <NuxtLink to="/news" class="breadcrumb__link"></NuxtLink>
          <a href="#" class="breadcrumb__link">Main</a>
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__active">Страница новости</span>
        </li>
      </ol>
    </div>
  </div> -->

  <div class="section section--white pt-0">
    <div class="container">
      <div class="post">
        <h1 class="post__header">{{ postContent.title }}</h1>
        <div v-html="postContent.post"></div>
        <!-- <div class="post__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div class="post__image">
            <div class="post__image--sm">
              <img
                src="@img/content/post_image_sm__01.jpg"
                class="img-cover"
                alt=""
              />
            </div>
            <div class="post__image--md">
              <img
                src="@img/content/post_image_md__01.jpg"
                class="img-cover"
                alt=""
              />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <div class="post__image">
            <div class="post__image--sm">
              <img
                src="@img/content/post_image_sm__02.jpg"
                class="img-cover"
                alt=""
              />
            </div>
            <div class="post__image--md">
              <img
                src="@img/content/post_image_md__02.jpg"
                class="img-cover"
                alt=""
              />
            </div>
          </div>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div> -->
      </div>
    </div>
  </div>
  <div class="section section--md">
    <SubscriptionForm :content="content.subscriptionContent" :isPost="true" />
    <!-- <div class="container">
      <div class="post-footer">
        <div class="post__label">Share this post</div>
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
        <h2 class="subscribe__title">Stay Connected with Atvel</h2>
        <div class="subscribe__subtitle">
          Subscribe to our newsletter or follow us on social media for real-time
          updates.
        </div>
        <div class="subscribe__main">
          <form>
            <div class="subscribe__form">
              <div class="subscribe__field">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div class="subscribe__button">
                <button type="submit" class="btn btn-red">
                  <span>Sign up</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="subscribe__text">
          By clicking Sign Up, you agree to our Terms and Conditions.
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useApi } from "../../../src/composables/useApi";
import { useLocale } from "../../../src/composables/useLocale";
import SubscriptionForm from "../components/SubscriptionForm.vue";

const locale = useLocale();
const route = useRoute();
const { findOne } = useStrapi();
const query = `?populate=*`;

const postContent = ref({
  post: "",
  title: "",
});

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
    label: "",
    title: "",
    subtitle: "",
    button: "",
    text: "",
    isPost: true,
  },
  newsPrimaryContent: {
    header: "",
  },
  newsPrimaryListItems: [
    {
      text: "",
    },
  ],
  mainLinkText: "",
  currentPageText: "",
  breadcrumbContent: {
    link: "",
    linkText: "",
    span: "",
  },
});

const getPost = async () => {
  const data = await findOne("/news2", {
    filters: {
      link: {
        $eq: route.params.id,
      },
    },
    populate: "*",
    locale: locale.value,
  })
    // @ts-ignore
    .then((x) => x.data[0])
    .catch((error) => console.log(error));
  if (data) {
    postContent.value = data.attributes;
    console.log(data.attributes);
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
getPost();
watch(locale, async () => {
  await getContent();
  getPost();
});
</script>

<style scoped></style>
