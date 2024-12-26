<template>
  <div class="product-name">{{ title }}</div>
  <div class="product-rating">
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
  <div class="product-comments">
    <div class="product-comments__content">
      <div class="comment">
        <div class="comment__date">03.02.2024 17:04</div>
        <div class="comment__author">Александр</div>
        <div class="comment__content">
          <div class="comment__item">
            <div class="comment__label">Рейтинг:</div>
            <div class="comment__value">
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
          </div>
          <div class="comment__item">
            <div class="comment__label">Преимущества:</div>
            <div class="comment__value">Text text text</div>
          </div>
          <div class="comment__item">
            <div class="comment__label">Недостатки:</div>
            <div class="comment__value">нет</div>
          </div>
          <div class="comment__item">
            <div class="comment__label">Комментарий:</div>
            <div class="comment__value">
              Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free. Our user-friendly interface is designed to
              make your shopping journey enjoyable and efficient.
            </div>
          </div>
          <div class="comment__item align-center">
            <div class="comment__label color-light">Полезен ли этот отзыв?</div>
            <div class="comment__value">
              <div class="estimation">
                <button
                  type="button"
                  class="estimation__button estimation__button--plus"
                >
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#like_plus"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                  <span>12</span>
                </button>
                <button
                  type="button"
                  class="estimation__button estimation__button--minus"
                >
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#like_minus"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                  <span>2</span>
                </button>
              </div>
              <!-- .estimation -->
            </div>
          </div>
        </div>
      </div>
      <!-- .comment -->
      <div class="comment">
        <div class="comment__date">03.02.2024 17:04</div>
        <div class="comment__author">Александр</div>
        <div class="comment__content">
          <div class="comment__item">
            <div class="comment__label">Рейтинг:</div>
            <div class="comment__value">
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
          </div>
          <div class="comment__item">
            <div class="comment__label">Преимущества:</div>
            <div class="comment__value">Text text text</div>
          </div>
          <div class="comment__item">
            <div class="comment__label">Недостатки:</div>
            <div class="comment__value">нет</div>
          </div>
          <div class="comment__item">
            <div class="comment__label">Комментарий:</div>
            <div class="comment__value">
              Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free. Our user-friendly interface is designed to
              make your shopping journey enjoyable and efficient.
            </div>
          </div>
          <div class="comment__item align-center">
            <div class="comment__label color-light">Полезен ли этот отзыв?</div>
            <div class="comment__value">
              <div class="estimation">
                <button
                  type="button"
                  class="estimation__button estimation__button--plus"
                >
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#like_plus"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                  <span>12</span>
                </button>
                <button
                  type="button"
                  class="estimation__button estimation__button--minus"
                >
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#like_minus"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                  <span>2</span>
                </button>
              </div>
              <!-- .estimation -->
            </div>
          </div>
        </div>
      </div>
      <!-- .comment -->
      <div class="comment">
        <div class="comment__date">03.02.2024 17:04</div>
        <div class="comment__author">Александр</div>
        <div class="comment__content">
          <div class="comment__item">
            <div class="comment__label">Рейтинг:</div>
            <div class="comment__value">
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
          </div>
          <div class="comment__item">
            <div class="comment__label">Преимущества:</div>
            <div class="comment__value">Text text text</div>
          </div>
          <div class="comment__item">
            <div class="comment__label">Недостатки:</div>
            <div class="comment__value">нет</div>
          </div>
          <div class="comment__item">
            <div class="comment__label">Комментарий:</div>
            <div class="comment__value">
              Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free. Our user-friendly interface is designed to
              make your shopping journey enjoyable and efficient.
            </div>
          </div>
          <div class="comment__item align-center">
            <div class="comment__label color-light">Полезен ли этот отзыв?</div>
            <div class="comment__value">
              <div class="estimation">
                <button
                  type="button"
                  class="estimation__button estimation__button--plus"
                >
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#like_plus"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                  <span>12</span>
                </button>
                <button
                  type="button"
                  class="estimation__button estimation__button--minus"
                >
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#like_minus"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                  <span>2</span>
                </button>
              </div>
              <!-- .estimation -->
            </div>
          </div>
        </div>
      </div>
      <!-- .comment -->
      <div class="product-comments__footer">
        <a href="#" class="product-comments__link">Show all</a>
      </div>
    </div>
    <!-- .product-comments__content -->
    <div class="product-comments__form">
      <div class="comment-form">
        <form>
          <div class="comment-form__info">
            <div class="comment-form__item">
              <label class="field field--sm" data-field>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autocomplete="off"
                  data-field-input
                />
              </label>
            </div>
            <div class="comment-form__item">
              <label class="field field--sm" data-field>
                <input
                  type="text"
                  name="name"
                  placeholder="Email"
                  autocomplete="off"
                  data-field-input
                />
              </label>
            </div>
          </div>
          <div class="comment-form__title">Description</div>
          <div class="comment-form__body">
            <div class="comment-form__item">
              <label class="field field--sm" data-field>
                <textarea
                  name="m1"
                  placeholder="Advantages"
                  data-dynamic
                  rows="5"
                ></textarea>
              </label>
            </div>
            <div class="comment-form__item">
              <label class="field field--sm" data-field>
                <textarea
                  name="m2"
                  placeholder="Disadvantages"
                  data-dynamic
                ></textarea>
              </label>
            </div>
            <div class="comment-form__item">
              <label class="field field--sm" data-field>
                <textarea
                  name="m3"
                  placeholder="Commentary"
                  data-dynamic
                ></textarea>
              </label>
            </div>
          </div>
          <div class="comment-form__send">
            <button type="submit" class="btn btn-red">
              <span>Add</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- .product-comments__form -->
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
