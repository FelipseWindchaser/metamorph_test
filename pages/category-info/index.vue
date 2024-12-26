<template>
  <Heading :content="content.headingContent" />
  <!-- .heading -->

  <div class="category-intro">
    <div class="category-intro__main">
      <div class="container">
        <div class="category-intro__header">
          {{ content.categoryIntro.header }}
        </div>
        <div class="category-intro__lead">
          {{ content.categoryIntro.lead }}
        </div>
        <div class="category-intro__content">
          <ul
            v-for="item of content.categoryIntroList"
            class="category-intro__item"
          >
            <li class="category-intro__num">{{ item.order }}</li>
            <li class="category-intro__text">{{ item.text }}</li>
          </ul>
          <!-- .category-intro__item -->
        </div>
      </div>
    </div>
    <!-- .category-intro__main -->
    <div class="category-intro__media">
      <img src="@img/intro_image.jpg" class="img-cover" alt="" />
    </div>
    <!-- .category-intro__item -->
  </div>
  <!-- .category-intro -->

  <div class="section section--top">
    <div class="container">
      <div class="info-block">
        <div class="info-block__media">
          <img src="@img/info_block_image.jpg" class="img-cover" alt="" />
        </div>
        <ul class="info-block__content" data-spoilers>
          <li
            v-for="item in content.spoilerList"
            :class="`spoiler ${item.id === 1 ? 'open' : ''}`"
            data-spoiler
          >
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">
                {{ item.title }}
              </div>
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
            <!-- .spoiler__header -->
            <div
              class="spoiler__content"
              data-spoiler-content
              style="display: block"
            >
              <div class="spoiler__wrap">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
            <!-- .spoiler__content -->
          </li>
          <!-- .spoiler -->
          <!-- <li class="spoiler" data-spoiler>
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">
                {{ item.title }}
              </div>
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
            <div class="spoiler__content" data-spoiler-content>
              <div class="spoiler__wrap">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
          </li> -->
          <!-- .spoiler -->
          <!-- <li class="spoiler" data-spoiler>
            <div class="spoiler__header" data-spoiler-control>
              <div class="spoiler__title">
                {{ item.title }}
              </div>
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
            <div class="spoiler__content" data-spoiler-content>
              <div class="spoiler__wrap">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
          </li> -->
          <!-- .spoiler -->
        </ul>
        <!-- .spoiler -->
      </div>
      <!-- .info-block -->
    </div>
  </div>

  <div class="section">
    <!--removed section--top from section -->
    <div class="container">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">Explore</h2>
        <!-- <a href="#" class="section__link">Browse all</a> -->
      </div>
      <div class="section__body">
        <div class="items-grid">
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <img
                  src="@img/content/item_image.png"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item__media -->
            <div class="item__content">
              <div class="item__rating">
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

                  <input
                    type="hidden"
                    name="rating"
                    value="3.5"
                    disabled
                    data-rating-input
                  />
                </div>
              </div>
              <!-- .item__rating -->
              <div class="item__control">
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#compare"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#favorite"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
                <button type="button" class="item__button">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#share"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i></button
                ><!-- .item__button -->
              </div>
              <!-- .item__control -->
              <div class="item__title">
                <a href="#">Atvel робот - пылесос SmartGyro R80 Base Black</a>
              </div>
              <!-- .item__title -->
              <div class="item__tag">Wooden</div>
              <!-- .item__tag -->
              <div class="item__price">
                <span class="color-red">$</span> 590
              </div>
              <!-- .item__price -->
            </div>
            <!-- .item__content -->
            <a href="#" class="item__link">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#arrow_link"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i> </a
            ><!-- .item__link -->
            <div class="item__hover">
              <img src="@img/content/item_hover.jpg" class="img-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="section section--top-md">
    <div class="container">
      <div class="hint-block">
        <div class="swiper" data-hint>
          <ul class="swiper-wrapper swiper_padding-none">
            <li class="swiper-slide" v-for="item in hintListItems">
              <div class="hint">
                <div class="hint__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#traced"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </div>
                <div class="hint__title">
                  {{ item.title }}
                </div>
                <div class="hint__text">
                  {{ item.text }}
                </div>
              </div>
              <!-- .hint -->
            </li>
            <!-- <li class="swiper-slide">
              <div class="hint">
                <div class="hint__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#traced"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </div>
                <div class="hint__title">
                  Personalize Your Home with Customization Options
                </div>
                <div class="hint__text">
                  Make your home truly yours by taking advantage of our
                  customization options. From personalized designs to color
                  choices and sizing options, create a space that reflects your
                  unique style.
                </div>
              </div>

            </li>
            <li class="swiper-slide">
              <div class="hint">
                <div class="hint__icon">
                  <svg
                    class="ico-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use
                      xlink:href="@img/sprites/sprite.svg#traced"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    ></use>
                  </svg>
                </div>
                <div class="hint__title">
                  Engage with a Community of Home Enthusiasts
                </div>
                <div class="hint__text">
                  Join our community of home enthusiasts and stay connected
                  through our blog posts, how-to guides, and lifestyle articles.
                  Get inspired and share your own experiences with Atvel home
                  goods.
                </div>
              </div>
            </li> -->
          </ul>
        </div>
      </div>
      <!-- .hint-block -->

      <div class="offer-board">
        <div class="offer-board__header">
          <div class="offer-board__track">
            <div class="offer-board__item">Lorem ipsum sit dolor</div>
            <div class="offer-board__item">Lorem ipsum sit dolor</div>
            <div class="offer-board__item">Lorem ipsum sit dolor</div>
            <div class="offer-board__item">Lorem ipsum sit dolor</div>
          </div>
        </div>
        <div class="offer-board__text">
          Atvel's products are equipped with advanced technology features that
          revolutionize the way you clean and enjoy your home. From robotic
          vacuum cleaners to cordless vacuum cleaners, our appliances are
          designed to make your life easier and more efficient.
        </div>
      </div>
    </div>
  </div>

  <div class="offer-block">
    <div class="container">
      <div class="offer-block__wrap">
        <div class="offer-block__main">
          <div class="offer-block__tag">Luxurious</div>
          <div class="offer-block__header">LOrem ipsum sit dolor</div>
          <div class="offer-block__lead">
            Travel offers a wide range of home goods that can be personalized to
            match your unique taste. Choose from personalized designs.
          </div>
          <div class="offer-block__content">
            <div class="offer-block__item">
              <div class="offer-block__value">50%</div>
              <div class="offer-block__text">
                Travel offers a wide range of home goods that can be
                personalized to match your unique taste.
              </div>
            </div>
            <div class="offer-block__item">
              <div class="offer-block__value">50%</div>
              <div class="offer-block__text">
                Travel offers a wide range of home goods that can be
                personalized to match your unique taste.
              </div>
            </div>
          </div>
        </div>
        <div class="offer-block__media">
          <img src="@img/offer_block_image.jpg" class="img-cover" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- .offer-block -->

  <div class="section section--custom">
    <div class="container">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">FAQ</h2>
      </div>
      <div class="section__body">
        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>
        <!-- .faq -->
        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>
        <!-- .faq -->
        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>
        <!-- .faq -->
        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>
        <!-- .faq -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const headingContent = {
//   title: "Experience the future \nof home appliances",
//   text: `Atvel's website offers a seamless shopping experience with easy
//           navigation, ensuring that you can find and purchase your desired home
//           goods hassle-free. Our user-friendly interface is designed to make
//           your shopping journey enjoyable and efficient.`,
// };
// const categoryIntroContent = {
//   header: "Experience the future of home appliances",
//   lead: `Atvel's website offers a seamless shopping experience with easy
//           navigation, ensuring that you can find and purchase your desired home
//           goods hassle-free. Our user-friendly interface is designed to make
//           your shopping journey enjoyable and efficient.`,
// };
// const categoryIntroListItems = [
//   {
//     order: "01",
//     text: `Atvel's website offers a seamless shopping experience with easy
//               navigation.`,
//   },
//   {
//     order: "02",
//     text: `Atvel's website offers a seamless shopping experience with easy
//               navigation.`,
//   },
//   {
//     order: "03",
//     text: `Atvel's website offers a seamless shopping experience with easy
//               navigation.`,
//   },
// ];
const spoilerList = {
  title: "Programmable Settings",
  text: `Customize your kitchen robot's functions to suit your needs
                  with programmable settings. Set timers, create schedules, and
                  automate tasks for a more convenient cooking experience.`,
};
const hintListItems = [
  {
    title: "Discover a Wide Range of High-Quality Products",
    text: `Explore our extensive collection of home goods, including
                  furniture, decor, bedding, kitchenware, and more. Each product
                  is meticulously crafted with attention to detail and
                  innovative design elements.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Make your home truly yours by taking advantage of our
                  customization options. From personalized designs to color
                  choices and sizing options, create a space that reflects your
                  unique style.`,
  },
  {
    title: " Engage with a Community of Home Enthusiasts",
    text: `Join our community of home enthusiasts and stay connected
                  through our blog posts, how-to guides, and lifestyle articles.
                  Get inspired and share your own experiences with Atvel home
                  goods.`,
  },
];
import { useApi } from "../../src/composables/useApi";
import { useLocale } from "../../src/composables/useLocale";
const locale = useLocale();
const query = `?populate=*`;
const content = ref({
  headingContent: {
    title: "",
    text: "",
  },
  categoryIntro: {
    header: "",
    lead: "",
  },
  categoryIntroList: [
    {
      order: "",
      text: "",
    },
  ],
  spoilerList: [
    {
      id: 0,
      title: "",
      text: "",
    },
  ],
});

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/category-info${query}`);

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

<style scoped>
.category-intro__item {
  list-style: none;
}
.info-block__content {
  list-style: none;
}
.swiper-wrapper {
  list-style: none;
}
</style>
