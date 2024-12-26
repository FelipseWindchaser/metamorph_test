<template>
  <Heading :content="content.headingContent" />
  <!-- .heading -->
  <Intro
    :content="content.introContent"
    :list="content.introContent.list"
    :listItems="content.introListItems"
    :image="content.introImage"
    :altName="content.introImageAlt"
    :className="content.introImageClass"
  />

  <Spoiler
    :listItems="content.spoilerListItems"
    :image="content.spoilerImage"
    :altName="content.spoilerImageAlt"
    :className="content.spoilerImageClass"
  />

  <Faq
    :content="content.sectionContent"
    :list="content.faqContent"
    :partnership="content.partnership"
  />

  <div class="section section--white section--top">
    <div class="container">
      <PrettyHeading :content="content.prettyHeadingContent" />

      <!-- .pretty-heading -->
      <form>
        <div class="main-form">
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="name" placeholder="Full name" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="email" placeholder="Email" />
            </label>
          </div>
          <div class="main-form__field main-form__field--xl">
            <label class="field">
              <input type="text" name="city" placeholder="City" />
            </label>
          </div>
          <Form
            :content="content.formContent"
            :text="content.formContent.text"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Spoiler from "./components/Spoiler.vue";
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
    list: true,
  },
  introListItems: [
    {
      text: "",
    },
  ],
  spoilerListItems: [
    {
      title: "",
      text: "",
    },
  ],
  open: true,
  prettyHeadingContent: {
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
  partnership: true,

  formContent: {
    textLabel: "",
    checkboxLabel: "",
    textButton: "",
    text: true,
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
  spoilerImage: {
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
  spoilerImageAlt: "",
  spoilerImageClass: "",
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/partnership${query}`);

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
