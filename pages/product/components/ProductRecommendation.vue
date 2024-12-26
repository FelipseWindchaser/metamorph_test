<template>
  <div class="container container--md">
    <div class="section__tag">Luxurious</div>
    <div class="section__header">
      <h2 class="section__title">Explore</h2>
    </div>
    <!-- .section__header -->
    <div class="section__body">
      <swiper
        data-compilation
        :modules="[Navigation]"
        :observer="true"
        :loop="true"
        :observeParents="true"
        :slidesPerView="1"
        :spaceBetween="20"
        :speed="500"
        :navigation="{
          nextEl: '[data-compilation-next]',
          prevEl: '[data-compilation-prev]',
        }"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
        }"
        :on="{}"
      >
        <swiper-slide> </swiper-slide>
        <swiper-slide> </swiper-slide>
        <swiper-slide> </swiper-slide>
        <swiper-slide> </swiper-slide>
      </swiper>
      <div class="swiper" data-compilation>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in content.productList">
            <div class="item h-100">
              <div class="item__action">{{ item.action }}</div>
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
                  <RatingStars :rating="`${item.rating}`" />
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
                  <a href="#">{{ item.linkText }}</a>
                </div>
                <!-- .item__title -->
                <div class="item__tag">{{ item.tag }}</div>
                <!-- .item__tag -->
                <div class="item__price">
                  <span class="color-red">
                    {{ item.currency }}
                  </span>
                  {{ item.price }}
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
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item -->
          </div>
          <div class="swiper-slide">
            <div class="item h-100">
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
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item -->
          </div>
          <div class="swiper-slide">
            <div class="item h-100">
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
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item -->
          </div>
          <div class="swiper-slide">
            <div class="item h-100">
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
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item -->
          </div>
          <div class="swiper-slide">
            <div class="item h-100">
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
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item -->
          </div>
          <div class="swiper-slide">
            <div class="item h-100">
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
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <!-- .item -->
          </div>
        </div>
      </div>
    </div>
    <div class="section__nav">
      <button type="button" class="btn-nav" data-compilation-prev>
        <i>
          <svg
            class="ico-svg"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#arrow_left"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </i>
      </button>
      <button type="button" class="btn-nav" data-compilation-next>
        <i>
          <svg
            class="ico-svg"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use
              xlink:href="@img/sprites/sprite.svg#arrow_right"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            ></use>
          </svg>
        </i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useApi } from "../../../src/composables/useApi";
import { useLocale } from "../../../src/composables/useLocale";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
const locale = useLocale();
const query = `?populate=*`;

const content = ref({
  productList: [
    {
      action: "",
      linkText: "",
      tag: "",
      currency: "",
      price: "",
      imageAlt: "",
      imageClass: "",
      hoverImageAlt: "",
      hoverImageClass: "",
      rating: "",
    },
  ],
  imageList: [],
  hoverImageList: [],
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
