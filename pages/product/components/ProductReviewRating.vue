<template>
  <div class="container container--md">
    <div class="section__top">
      <div class="section__rating">
        <RatingStars rating="3.5" />
      </div>
    </div>
    <div class="section__header">
      <h2 class="section__title">recent reviews</h2>
      <a href="#" class="section__link">Browse all</a>
    </div>
    <!-- .section__header -->
    <div class="section__body">
      <swiper
        data-comments
        :observer="true"
        :observeParents="true"
        slidesPerView="auto"
        :spaceBetween="15"
        :speed="500"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }"
        :on="{}"
      >
        <swiper-slide>
          <div class="comment-item">
            <div class="comment-item__tag">
              {{ content.pinnedCommentContent.tag }}
            </div>
            <div class="comment-item__header">
              <div class="comment-item__author">
                {{ content.pinnedCommentContent.author }}
              </div>
              <div class="comment-item__date">
                {{ content.pinnedCommentContent.date }}
              </div>
            </div>
            <div class="comment-item__rating">
              <RatingStars :rating="`${content.pinnedCommentContent.rating}`" />
            </div>
            <div class="comment-item__content">
              <div class="comment-item__group">
                <div class="comment-item__title">
                  {{ content.pinnedCommentContent.title }}
                </div>
                <div class="comment-item__text">
                  {{ content.pinnedCommentContent.text }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide v-for="item in content.commentList">
          <div class="comment-item">
            <div class="comment-item__header">
              <div class="comment-item__author">{{ item.author }}</div>
              <div class="comment-item__date">{{ item.date }}</div>
            </div>
            <div class="comment-item__rating">
              <RatingStars :rating="`${item.rating}`" />
              <!-- <div class="rating" data-rating="3.5" data-readonly="true">
                  <div class="rating__body">
                    <div class="rating__stars">
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__active" data-rating-active>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__items">
                      <div class="rating__item" data-rating-item="5"></div>
                      <div class="rating__item" data-rating-item="4"></div>
                      <div class="rating__item" data-rating-item="3"></div>
                      <div class="rating__item" data-rating-item="2"></div>
                      <div class="rating__item" data-rating-item="1"></div>
                    </div>
                  </div>

                  <div class="rating__value" data-rating-value>3.5</div>

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div> -->
            </div>
            <div class="comment-item__content">
              <div class="comment-item__group">
                <div class="comment-item__title">{{ item.advantage }}</div>
                <div class="comment-item__text">
                  <p>
                    {{ item.advantageText }}
                  </p>
                </div>
              </div>
              <div class="comment-item__group">
                <div class="comment-item__title">{{ item.disadvantage }}</div>
                <div class="comment-item__text">
                  <p>
                    {{ item.disadvantageText }}
                  </p>
                </div>
              </div>
              <div class="comment-item__group">
                <div class="comment-item__title">{{ item.commentary }}</div>
                <div class="comment-item__text">
                  {{ item.commentaryText }}
                </div>
              </div>
            </div>
            <a href="#" class="comment-item__read">{{ item.linkText }}</a>
          </div>
        </swiper-slide>
      </swiper>
      <!-- <div class="swiper" data-comments>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="comment-item">
              <div class="comment-item__tag">
                {{ content.pinnedCommentContent.tag }}
              </div>
              <div class="comment-item__header">
                <div class="comment-item__author">
                  {{ content.pinnedCommentContent.author }}
                </div>
                <div class="comment-item__date">
                  {{ content.pinnedCommentContent.date }}
                </div>
              </div>
              <div class="comment-item__rating">
                <RatingStars
                  :rating="`${content.pinnedCommentContent.rating}`"
                />
              </div>
              <div class="comment-item__content">
                <div class="comment-item__group">
                  <div class="comment-item__title">
                    {{ content.pinnedCommentContent.title }}
                  </div>
                  <div class="comment-item__text">
                    {{ content.pinnedCommentContent.text }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide" v-for="item in content.commentList">
            <div class="comment-item">
              <div class="comment-item__header">
                <div class="comment-item__author">{{ item.author }}</div>
                <div class="comment-item__date">{{ item.date }}</div>
              </div>
              <div class="comment-item__rating">
                <RatingStars :rating="`${item.rating}`" />
                <div class="rating" data-rating="3.5" data-readonly="true">
                  <div class="rating__body">
                    <div class="rating__stars">
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__active" data-rating-active>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__items">
                      <div class="rating__item" data-rating-item="5"></div>
                      <div class="rating__item" data-rating-item="4"></div>
                      <div class="rating__item" data-rating-item="3"></div>
                      <div class="rating__item" data-rating-item="2"></div>
                      <div class="rating__item" data-rating-item="1"></div>
                    </div>
                  </div>

                  <div class="rating__value" data-rating-value>3.5</div>

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <div class="comment-item__content">
                <div class="comment-item__group">
                  <div class="comment-item__title">{{ item.advantage }}</div>
                  <div class="comment-item__text">
                    <p>
                      {{ item.advantageText }}
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">{{ item.disadvantage }}</div>
                  <div class="comment-item__text">
                    <p>
                      {{ item.disadvantageText }}
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">{{ item.commentary }}</div>
                  <div class="comment-item__text">
                    {{ item.commentaryText }}
                  </div>
                </div>
              </div>
              <a href="#" class="comment-item__read">{{ item.linkText }}</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="comment-item">
              <div class="comment-item__header">
                <div class="comment-item__author">Александр</div>
                <div class="comment-item__date">25 march 2024</div>
              </div>
              <div class="comment-item__rating">
                <div class="rating" data-rating="3.5" data-readonly="true">
                  <div class="rating__body">
                    <div class="rating__stars">
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__active" data-rating-active>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                      <div class="rating__star">
                        <svg
                          class="ico-svg"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <use
                            xlink:href="@img/sprites/sprite.svg#star"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          ></use>
                        </svg>
                      </div>
                    </div>
                    <div class="rating__items">
                      <div class="rating__item" data-rating-item="5"></div>
                      <div class="rating__item" data-rating-item="4"></div>
                      <div class="rating__item" data-rating-item="3"></div>
                      <div class="rating__item" data-rating-item="2"></div>
                      <div class="rating__item" data-rating-item="1"></div>
                    </div>
                  </div>

                  <div class="rating__value" data-rating-value>3.5</div>

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <div class="comment-item__content">
                <div class="comment-item__group">
                  <div class="comment-item__title">Advantage</div>
                  <div class="comment-item__text">
                    <p>
                      Atvel's website offers a seamless shopping experience with
                      easy navigation.
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">Disadvantage</div>
                  <div class="comment-item__text">
                    <p>
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free.
                    </p>
                  </div>
                </div>
                <div class="comment-item__group">
                  <div class="comment-item__title">Commentary</div>
                  <div class="comment-item__text">
                    Atvel's website offers a seamless shopping experience with
                    easy navigation, ensuring that you can find and purchase
                    your desired home goods hassle-free.
                  </div>
                </div>
              </div>
              <a href="#" class="comment-item__read">Read all</a>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "../../../src/composables/useApi";
import { useLocale } from "../../../src/composables/useLocale";
import { Swiper, SwiperSlide } from "swiper/vue";
const locale = useLocale();
const query = `?populate=*`;
const content = ref({
  pinnedCommentContent: {
    tag: "",
    author: "",
    date: "",
    rating: "",
    title: "",
    text: "",
  },
  commentList: [
    {
      author: "",
      date: "",
      rating: "",
      advantage: "",
      advantageText: "",
      disadvantage: "",
      disadvantageText: "",
      commentary: "",
      commentaryText: "",
      linkText: "",
    },
  ],
});

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/product-content${query}`);

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
