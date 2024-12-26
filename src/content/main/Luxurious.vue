<template>
  <div class="section">
    <div class="container">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">Explore</h2>
        <a href="#" class="section__link">Browse all</a>
      </div>
      <div class="section__body">
        <div class="items-grid">
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <picture>
                  <source
                    srcset="@img/content/item_image.webp"
                    type="image/webp"
                  />
                  <img
                    src="@img/content/item_image.png"
                    class="img-cover"
                    alt=""
                  />
                </picture>
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
              <picture>
                <source
                  srcset="@img/content/item_hover.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <picture>
                  <source
                    srcset="@img/content/item_image.webp"
                    type="image/webp"
                  />
                  <img
                    src="@img/content/item_image.png"
                    class="img-cover"
                    alt=""
                  />
                </picture>
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
              <picture>
                <source
                  srcset="@img/content/item_hover.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <picture>
                  <source
                    srcset="@img/content/item_image.webp"
                    type="image/webp"
                  />
                  <img
                    src="@img/content/item_image.png"
                    class="img-cover"
                    alt=""
                  />
                </picture>
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
              <picture>
                <source
                  srcset="@img/content/item_hover.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <!-- .item -->
          <div class="item">
            <div class="item__action">Рассрочка</div>
            <div class="item__media">
              <div class="item__image">
                <picture>
                  <source
                    srcset="@img/content/item_image.webp"
                    type="image/webp"
                  />
                  <img
                    src="@img/content/item_image.png"
                    class="img-cover"
                    alt=""
                  />
                </picture>
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
              <picture>
                <source
                  srcset="@img/content/item_hover.webp"
                  type="image/webp"
                />
                <img
                  src="@img/content/item_hover.jpg"
                  class="img-cover"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <!-- .item -->
        </div>
        <!-- .items-grid -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
