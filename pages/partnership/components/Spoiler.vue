<template>
  <div class="section section--top">
    <div class="container">
      <div class="info-block">
        <div class="info-block__media">
          <Image :image="image" :altName="altName" :className="className" />
          <!-- <img src="@img/info_block_image.jpg" class="img-cover" alt="" /> -->
        </div>
        <ul class="info-block__content" data-spoilers>
          <li
            :class="`spoiler ${index === 0 ? ' open' : ''}`"
            data-spoiler
            v-for="(item, index) in listItems"
          >
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">{{ item.title }}</div>
              <div class="spoiler__control">
                <svg
                  class="ico-svg"
                  viewBox="0 0 34 35"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#spoiler_arrow"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
            </div>
            <div
              class="spoiler__content"
              data-spoiler-content
              :style="index === 0 && `display: block`"
            >
              <div class="spoiler__wrap">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  listItems: {
    title: string;
    text: string;
  }[];
  open?: boolean;
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
          source: {
            url: string;
          };
        };
      };
    };
  };
  altName: string;
  className: string;
}>();
</script>

<style scoped>
.info-block {
  background: white;
  border-radius: 0.625rem;
  padding: 1.25rem 0.625rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
}

.info-block__media {
  display: block;
  overflow: hidden;
  border-radius: 0.625rem;
}
.info-block__content {
  list-style: none;
}

@media (min-width: 768px) {
  .info-block {
    padding: 0.625rem;
    flex-direction: row-reverse;
    align-items: center;
    column-gap: 1.25rem;
    justify-content: space-between;
  }
  .info-block__media {
    width: 20.625rem;
    height: 15.625rem;
    flex-shrink: 0;
  }
}

@media (min-width: 1024px) {
  .info-block {
    padding: 1.25rem;
    column-gap: 2.5rem;
  }
  .info-block__media {
    width: 25rem;
    height: 20rem;
  }
}

@media (min-width: 1250px) {
  .info-block {
    column-gap: 5rem;
  }
  .info-block__media {
    width: 35.5625rem;
    height: 26.0625rem;
  }
}

@media (min-width: 1400px) {
  .info-block {
    padding: 1.25rem 1.25rem 1.25rem 2.5rem;
    column-gap: 13.25rem;
  }
}
</style>
