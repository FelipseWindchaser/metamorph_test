<template>
  <Heading :content="content.headingContent" />

  <div class="category-header">
    <div class="category-header__body">
      <div class="container">
        <div class="category-header__wrap">
          <div class="category-header__main">
            <div class="category-header__title">
              {{ content.categoryHeaderContent.title }}
            </div>
            <div class="category-header__lead">
              {{ content.categoryHeaderContent.lead }}
            </div>
          </div>
          <div class="category-header__content">
            <div class="category-header__text">
              {{ content.categoryHeaderContent.text }}
            </div>
            <div class="category-header__text">
              {{ content.categoryHeaderContent.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="category-header__media category-header__media--sm">
      <Image
        :image="content.categoryHeaderVerticalImage"
        :altName="content.categoryHeaderImageAlt"
        :className="content.categoryHeaderImageClass"
      />
      <img src="@img/category_heading_sm.jpg" class="img-cover" alt="" />
    </div>
    <div class="category-header__media category-header__media--md">
      <Image
        :image="content.categoryHeaderHorizontalImage"
        :altName="content.categoryHeaderImageAlt"
        :className="content.categoryHeaderImageClass"
      />
      <img src="@img/category_heading_md.jpg" class="img-cover" alt="" />
    </div>
  </div>

  <div class="section section--top">
    <div class="container">
      <div class="category-group">
        <a href="#" class="category-item-xl">
          <Image
            :image="content.itemCategoryPreviewImage"
            :altName="content.itemCategoryPreviewAlt"
            :className="content.itemCategoryPreviewClass"
          />
        </a>
        <ItemCategory
          :content="content.itemCategoryContentReverse"
          :reverse="content.itemCategoryContentReverse.reverse"
          :white="content.itemCategoryContentReverse.white"
          :list="content.categoryListItemsReverse"
          :full="content.itemCategoryContentReverse.full"
          :image="content.itemCategoryReverseImage"
          :altName="content.itemCategoryReverseAlt"
          :className="content.itemCategoryReverseClass"
        />
        <ItemCategory
          :content="content.itemsCategoryContent"
          :reverse="content.itemsCategoryContent.reverse"
          :white="content.itemsCategoryContent.white"
          :list="content.categoryListItemsReverse"
          :full="content.itemCategoryContentReverse.full"
          :image="content.itemCategoryImage"
          :altName="content.itemCategoryAlt"
          :className="content.itemCategoryClass"
        />
      </div>
    </div>
  </div>
  <Faq
    :content="content.sectionContent"
    :list="content.faqContent"
    :partnership="content.partnership"
    :warranty="content.warranty"
  />
  <!-- .faq -->
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
  categoryHeaderContent: {
    title: "",
    lead: ``,
    text: ``,
  },
  itemsCategoryContent: {
    tag: "",
    title: "",
    text: ``,
    button: "",
    white: true,
    reverse: false,
    full: true,
  },
  itemCategoryContentReverse: {
    tag: "",
    title: "",
    text: ``,
    button: "",
    white: true,
    reverse: true,
    full: true,
  },
  categoryListItemsReverse: [
    {
      text: ``,
    },
  ],
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
  partnership: false,
  warranty: false,
  itemCategoryPreviewImage: {
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
  itemCategoryImage: {
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
  categoryHeaderHorizontalImage: {
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
  categoryHeaderVerticalImage: {
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
  itemCategoryPreviewAlt: "",
  itemCategoryPreviewClass: "",
  introImageAlt: "",
  introImageClass: "",
  itemCategoryAlt: "",
  itemCategoryClass: "",
  itemCategoryReverseAlt: "",
  itemCategoryReverseClass: "",
  categoryHeaderImageAlt: "",
  categoryHeaderImageClass: "",
});

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/category${query}`);

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
