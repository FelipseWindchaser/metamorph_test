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

  <ItemCategory
    :content="content.itemCategoryContentReverse"
    :reverse="content.itemCategoryContentReverse.reverse"
    :white="content.itemCategoryContentReverse.white"
    :list="content.categoryListItems"
    :image="content.itemCategoryReverseImage"
    :altName="content.itemCategoryReverseAlt"
    :className="content.itemCategoryReverseClass"
  />

  <div class="section section--top-md">
    <div class="container">
      <div class="section__tag">{{ content.sectionContent.tag }}</div>
      <div class="section__header section__header--sm">
        <h2 class="section__title">{{ content.sectionContent.title }}</h2>
      </div>
      <div class="section-intro">
        <div class="section-intro__text">
          {{ content.sectionContent.text }}
        </div>
      </div>

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
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="model" placeholder="Название модели" />
            </label>
          </div>
          <div class="main-form__field">
            <label class="field">
              <input type="text" name="sn" placeholder="Серийный номер" />
            </label>
          </div>
          <div class="main-form__field main-form__field--xl">
            <label class="field">
              <input type="text" name="market" placeholder="Где был куплен" />
            </label>
          </div>
          <Form
            :content="content.formContent"
            :empty="content.formContent.empty"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const checkboxLabel = "I agree to the Terms";
const submitBtnText = "Send";
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
  itemCategoryContentReverse: {
    title: "",
    text: ``,
    white: true,
    reverse: true,
  },
  categoryListItems: [
    {
      text: "",
    },
  ],
  sectionContent: {
    tag: "",
    title: "",
    text: "",
  },

  formContent: {
    checkboxLabel: "",
    textButton: "",
    empty: true,
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
  itemCategoryReverseImage: {
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
  itemCategoryReverseAlt: "",
  itemCategoryReverseClass: "",
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/warranty${query}`);

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
