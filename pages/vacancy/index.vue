<template>
  <!-- <div class="heading">
    <div class="container">
      <div class="heading__wrap heading__wrap--center">
        <div class="heading__title">Join our team</div>
        <div class="heading__text">
          Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.
        </div>
      </div>
    </div>
  </div> -->
  <Heading :content="content.headingContent" />
  <!-- .heading -->
  <Intro
    :content="content.introContent"
    :list="content.introContent.list"
    :image="content.introImage"
    :altName="content.introImageAlt"
    :className="content.introImageClass"
  />
  <!-- <div class="intro">
    <div class="intro__main">
      <div class="container">
        <div class="intro__header">
          <div class="intro__title">
            Experience a Friendly Interface for Effortless
          </div>
          <div class="intro__lead">
            Atvel's website offers a seamless shopping experience with easy
            navigation, ensuring that you can find and purchase your desired
            home goods hassle-free. Our user-friendly interface is designed to
            make your shopping journey enjoyable and efficient.
          </div>
        </div>
      </div>
    </div>

    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>

  </div> -->

  <div class="section section--top">
    <div class="container">
      <PrettyHeading
        :content="content.prettyHeadingContent"
        :vacancy="content.prettyHeadingContent.vacancy"
      />

      <!-- .pretty-heading -->

      <ul class="steps">
        <li class="steps__item" v-for="item in content.stepsListItems">
          <div class="steps__media">
            <div class="steps__icon">
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#phone"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </div>
          </div>
          <div class="steps__title">{{ item.title }}</div>
          <div class="steps__text">{{ item.text }}</div>
          <div class="steps__num">{{ item.num }}</div>
        </li>
      </ul>
      <!-- .steps -->
    </div>
  </div>
  <Faq
    :content="content.sectionContent"
    :list="content.faqContent"
    :vacancy="content.vacancy"
  />

  <div class="section pb-0">
    <div class="container">
      <div class="vacancy">
        <div class="vacancy__content">
          <div class="vacancy__header">{{ content.vacancyContent.header }}</div>
          <div class="vacancy__button">
            <a href="#" class="btn btn-red">
              <span>{{ content.vacancyContent.button }}</span>
            </a>
          </div>
        </div>
        <div class="vacancy__media">
          <Image
            :image="content.vacancyImage"
            :altName="content.vacancyImageAlt"
            :className="content.vacancyImageClass"
          />
          <!-- <img src="@img/vacancy_image.png" class="img-fluid" alt="" /> -->
        </div>
      </div>
    </div>
  </div>

  <div class="section section--top">
    <div class="container">
      <PrettyHeading :content="content.prettyHeadingVacancyContent" />
      <form>
        <div class="main-form">
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="name" placeholder="First name" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="name" placeholder="Last name" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="email" placeholder="Email" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="sn" placeholder="Phone" />
            </label>
          </div>
          <div class="main-form__field main-form__field--xl">
            <label class="field">
              <textarea
                name="message"
                placeholder="Message"
                data-dynamic
              ></textarea>
            </label>
          </div>
          <Form
            :content="content.formContent"
            :file="content.formContent.file"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "../../src/composables/useApi";
import { useLocale } from "../../src/composables/useLocale";

const locale = useLocale();

const content = ref({
  headingContent: {
    title: "",
    text: "",
  },
  introContent: {
    title: "",
    lead: "",
    text: "",
    list: false,
  },
  prettyHeadingContent: {
    tag: "",
    title: "",
    vacancy: true,
  },
  prettyHeadingVacancyContent: {
    tag: "",
    title: "",
  },
  sectionContent: {
    tag: "",
    title: "",
  },
  faqContent: [
    {
      title: "",
      text: ``,
    },
  ],
  vacancy: true,
  stepsListItems: [
    {
      title: "",
      text: "",
      num: "",
    },
  ],
  vacancyContent: {
    header: "",
    button: "",
  },
  formContent: {
    textLabel: "",
    checkboxLabel: "",
    textButton: "",
    file: true,
  },
  introImage: {
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
  introImageAlt: "",
  introImageClass: "",

  vacancyImage: {
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
  vacancyImageAlt: "",
  vacancyImageClass: "",
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/vacancy${query}`);

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
