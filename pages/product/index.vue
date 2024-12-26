<template>
  <div class="breadcrumb-block">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">Main</a>
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__active">Product</span>
        </li>
      </ol>
    </div>
  </div>

  <div class="section section--white">
    <div class="container">
      <div class="product-header">
        <h1 class="product-header__title">Product name</h1>
        <div class="product-header__info">
          <div class="product-header__rating">
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
          <a href="#" class="product-header__comments">15 reviews</a>
        </div>
        <div class="product-header__control">
          <button type="button" class="btn-control">
            <i class="btn-control__icon">
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
              </i>
            </i>
            <span class="btn-control__text">В избранное</span></button
          ><!-- .btn-control -->
          <button type="button" class="btn-control">
            <i class="btn-control__icon">
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
              </i>
            </i>
            <span class="btn-control__text">К сравнению</span></button
          ><!-- .btn-control -->
          <button
            type="button"
            data-src="#callback"
            class="btn-control"
            data-fancybox
          >
            <i class="btn-control__icon">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#bell"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i>
            </i>
            <span class="btn-control__text">оповестить</span></button
          ><!-- .btn-control -->
        </div>
      </div>
      <!-- .product-header -->

      <div class="product">
        <div class="product__media">
          <div class="product__gallery">
            <div class="swiper" data-gallery>
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a
                    href="@img/content/product_image.jpg"
                    class="product__image"
                    data-fancybox="gallery"
                  >
                    <img
                      src="@img/content/product_image.jpg"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="@img/content/product_image.jpg"
                    class="product__image"
                    data-fancybox="gallery"
                  >
                    <img
                      src="@img/content/product_image.jpg"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="@img/content/product_image.jpg"
                    class="product__image"
                    data-fancybox="gallery"
                  >
                    <img
                      src="@img/content/product_image.jpg"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="@img/content/product_image.jpg"
                    class="product__image"
                    data-fancybox="gallery"
                  >
                    <img
                      src="@img/content/product_image.jpg"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                </div>
                <div class="swiper-slide">
                  <a
                    href="@img/content/product_image.jpg"
                    class="product__image"
                    data-fancybox="gallery"
                  >
                    <img
                      src="@img/content/product_image.jpg"
                      class="img-cover"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- .product__gallery -->
          <div class="product__control">
            <div class="product__thumbs">
              <div class="swiper" data-thumbs>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="product__thumb active" data-thumb="1">
                      <img
                        src="@img/content/product_thumb.jpg"
                        class="img-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product__thumb" data-thumb="2">
                      <img
                        src="@img/content/product_thumb.jpg"
                        class="img-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product__thumb" data-thumb="3">
                      <img
                        src="@img/content/product_thumb.jpg"
                        class="img-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product__thumb" data-thumb="4">
                      <img
                        src="@img/content/product_thumb.jpg"
                        class="img-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="product__thumb" data-thumb="5">
                      <img
                        src="@img/content/product_thumb.jpg"
                        class="img-cover"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <a
                      href="https://youtu.be/7MbyTJs3SAo?si=WRPWb0ukaNvP-Dau"
                      class="product__video"
                      data-fancybox="video"
                    >
                      <img
                        src="@img/content/product_video.jpg"
                        class="img-cover"
                        alt=""
                      /> </a
                    ><!-- .product__video -->
                  </div>
                </div>
              </div>
            </div>
            <!-- .product__thumbs -->
            <button
              type="button"
              class="product__nav product__nav--prev"
              data-gallery-prev
            >
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 15 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#nav_arrow_left"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i></button
            ><!-- .product__nav -->
            <button
              type="button"
              class="product__nav product__nav--next"
              data-gallery-next
            >
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 15 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#nav_arrow_right"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i></button
            ><!-- .product__nav -->
          </div>
          <!-- .product__navigation -->
        </div>
        <!-- .product__media -->
        <div class="product__main">
          <div class="product__section">
            <div class="product__info">
              <div class="product__tags">
                <div class="product__tag product__tag--new">
                  <span>Новинка</span>
                </div>
              </div>
              <div class="product__availability valid">В наличии</div>
            </div>
            <div class="product-price">
              <div class="product-price__base">
                <div class="product-price__old">$1555</div>
              </div>
              <div class="product-price__row">
                <div class="product-price__current">$1335</div>
                <div class="product-price__discount">30%</div>
              </div>
            </div>
            <!-- .product-price -->
            <div class="product__order">
              <button type="button" class="btn btn-red btn-md w-100">
                <span>В корзину</span>
              </button>
            </div>
            <!-- .product__order -->
            <div class="product__lead">
              Обновленная модель с предварительным отключением автоподогрева
            </div>
            <!-- .product__lead -->
          </div>
          <!-- .product__section -->

          <div class="product__section">
            <div class="product__title">Характеристики:</div>
            <div class="product__text">
              <ul>
                <li>Количество программ: 10</li>
                <li>Ёмкость чаши: 3 л</li>
                <li>Мощность: 1300 Вт</li>
                <li>Съемные части можно мыть в посудомоечной машине</li>
                <li>
                  Система рециркуляции воздуха для равномерного приготовления.
                </li>
              </ul>
            </div>
          </div>
          <!-- .product__section -->
          <div class="product__section product__section--markets">
            <div class="product__title">Купите в маркетплейсах:</div>
            <div class="product__markets">
              <a href="#" class="btn-market btn-market--wildberries">
                <i>
                  <img src="@img/wildberries.svg" class="ico-svg" alt="" />
                </i>
              </a>
              <a href="#" class="btn-market btn-market--ozon">
                <i>
                  <img src="@img/ozon.svg" class="ico-svg" alt="" />
                </i>
              </a>
            </div>
          </div>
          <!-- .product__section -->
        </div>
        <!-- .product__main -->
      </div>
      <!-- .product -->

      <div class="tabs" data-tabs>
        <div class="tabs__header">
          <div class="swiper" data-tabs-navigation>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <button class="tabs__btn active" data-tabs-nav="tab1">
                  <span>Описание</span>
                </button>
              </div>
              <div class="swiper-slide">
                <button class="tabs__btn" data-tabs-nav="tab2">
                  <span>Характеристики</span>
                </button>
              </div>
              <div class="swiper-slide">
                <button class="tabs__btn" data-tabs-nav="tab3">
                  <span>Отзывы</span>
                </button>
              </div>
              <div class="swiper-slide">
                <button class="tabs__btn" data-tabs-nav="tab4">
                  <span>Сертификаты</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="tabs__content active" data-tabs-target="tab1">
          <!-- .tabs__content -->
          <div class="product-content">
            <div class="product-content__group">
              <div class="product-content__text">
                <p>
                  Atvel's website offers a seamless shopping experience with
                  easy navigation, ensuring that you can find and purchase your
                  desired home goods hassle-free. Our user-friendly interface is
                  designed to make your shopping journey enjoyable and
                  efficient.
                </p>
                <p>
                  Atvel's website offers a seamless shopping experience with
                  easy navigation, ensuring that you can find and purchase your
                  desired home goods hassle-free. Our user-friendly interface is
                  designed to make your shopping journey enjoyable and
                  efficient.
                </p>
                <p>Atvel's website offers a seamless shopping experience</p>
                <p>
                  Our user-friendly interface is designed to make your shopping
                  journey enjoyable and efficient.
                </p>
                <p>
                  Atvel's website offers a seamless shopping experience with
                  easy navigation, ensuring that you can find and purchase your
                  desired home goods hassle-free. Our user-friendly interface is
                  designed to make your shopping journey enjoyable and
                  efficient.
                </p>
              </div>
              <div class="product-content__media">
                <img
                  src="@img/content/product_content_image.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <div class="product-content__group">
              <div class="product-content__text">
                <p>
                  Atvel's website offers a seamless shopping experience with
                  easy navigation, ensuring that you can find and purchase your
                  desired home goods hassle-free. Our user-friendly interface is
                  designed to make your shopping journey enjoyable and
                  efficient.
                </p>
                <p>
                  Atvel's website offers a seamless shopping experience with
                  easy navigation, ensuring that you can find and purchase your
                  desired home goods hassle-free. Our user-friendly interface is
                  designed to make your shopping journey enjoyable and
                  efficient.
                </p>
                <p>Atvel's website offers a seamless shopping experience</p>
                <p>
                  Our user-friendly interface is designed to make your shopping
                  journey enjoyable and efficient.
                </p>
                <p>
                  Atvel's website offers a seamless shopping experience with
                  easy navigation, ensuring that you can find and purchase your
                  desired home goods hassle-free. Our user-friendly interface is
                  designed to make your shopping journey enjoyable and
                  efficient.
                </p>
              </div>
              <div class="product-content__media">
                <img
                  src="@img/content/product_content_image.jpg"
                  class="img-cover"
                  alt=""
                />
              </div>
            </div>
            <div class="product-content__download">
              <a href="#" class="btn-download">
                <i class="btn-download__icon">
                  <i>
                    <svg
                      class="ico-svg"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use
                        xlink:href="@img/sprites/sprite.svg#doc"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      ></use>
                    </svg>
                  </i>
                </i>
                <span class="btn-download__text">Download a manual</span>
              </a>
            </div>
          </div>
          <!-- .product-content -->
        </div>
        <div class="tabs__content" data-tabs-target="tab2">
          <div class="product-specifications">
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>

            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
            <div class="product-specifications__item">
              <div class="product-specifications__tile">Характеристика</div>
              <div class="product-specifications__line"></div>
              <div class="product-specifications__value">Text</div>
            </div>
          </div>
        </div>
        <!-- .tabs__content -->
        <div class="tabs__content" data-tabs-target="tab3">
          <div class="product-name">Product name</div>
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
                      <div
                        class="rating"
                        data-rating="3.5"
                        data-readonly="true"
                      >
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
                            <div
                              class="rating__item"
                              data-rating-item="5"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="4"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="3"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="2"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="1"
                            ></div>
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
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free. Our user-friendly
                      interface is designed to make your shopping journey
                      enjoyable and efficient.
                    </div>
                  </div>
                  <div class="comment__item align-center">
                    <div class="comment__label color-light">
                      Полезен ли этот отзыв?
                    </div>
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
                      <div
                        class="rating"
                        data-rating="3.5"
                        data-readonly="true"
                      >
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
                            <div
                              class="rating__item"
                              data-rating-item="5"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="4"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="3"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="2"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="1"
                            ></div>
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
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free. Our user-friendly
                      interface is designed to make your shopping journey
                      enjoyable and efficient.
                    </div>
                  </div>
                  <div class="comment__item align-center">
                    <div class="comment__label color-light">
                      Полезен ли этот отзыв?
                    </div>
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
                      <div
                        class="rating"
                        data-rating="3.5"
                        data-readonly="true"
                      >
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
                            <div
                              class="rating__item"
                              data-rating-item="5"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="4"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="3"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="2"
                            ></div>
                            <div
                              class="rating__item"
                              data-rating-item="1"
                            ></div>
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
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free. Our user-friendly
                      interface is designed to make your shopping journey
                      enjoyable and efficient.
                    </div>
                  </div>
                  <div class="comment__item align-center">
                    <div class="comment__label color-light">
                      Полезен ли этот отзыв?
                    </div>
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
          <!-- .product-comments -->
        </div>
        <!-- .tabs__content -->
        <div class="tabs__content" data-tabs-target="tab4">
          <div class="product-docs">
            <a
              href="@img/content/product_doc.jpg"
              class="product-docs__item"
              data-fancybox="docs"
            >
              <i class="product-docs__media">
                <img
                  src="@img/content/product_doc.jpg"
                  class="img-fluid"
                  alt=""
                />
              </i>
              <span class="product-docs__title">Название</span>
            </a>
            <a
              href="@img/content/product_doc.jpg"
              class="product-docs__item"
              data-fancybox="docs"
            >
              <i class="product-docs__media">
                <img
                  src="@img/content/product_doc.jpg"
                  class="img-fluid"
                  alt=""
                />
              </i>
              <span class="product-docs__title">Название</span>
            </a>
            <a
              href="@img/content/product_doc.jpg"
              class="product-docs__item"
              data-fancybox="docs"
            >
              <i class="product-docs__media">
                <img
                  src="@img/content/product_doc.jpg"
                  class="img-fluid"
                  alt=""
                />
              </i>
              <span class="product-docs__title">Название</span>
            </a>
            <a
              href="@img/content/product_doc.jpg"
              class="product-docs__item"
              data-fancybox="docs"
            >
              <i class="product-docs__media">
                <img
                  src="@img/content/product_doc.jpg"
                  class="img-fluid"
                  alt=""
                />
              </i>
              <span class="product-docs__title">Название</span>
            </a>
            <a
              href="@img/content/product_doc.jpg"
              class="product-docs__item"
              data-fancybox="docs"
            >
              <i class="product-docs__media">
                <img
                  src="@img/content/product_doc.jpg"
                  class="img-fluid"
                  alt=""
                />
              </i>
              <span class="product-docs__title">Название</span>
            </a>
            <a
              href="@img/content/product_doc.jpg"
              class="product-docs__item"
              data-fancybox="docs"
            >
              <i class="product-docs__media">
                <img
                  src="@img/content/product_doc.jpg"
                  class="img-fluid"
                  alt=""
                />
              </i>
              <span class="product-docs__title">Название</span>
            </a>
          </div>
          <!-- .product-docs -->
        </div>
        <!-- .tabs__content -->
      </div>
      <!-- .tabs -->
    </div>
  </div>
  <!-- .section -->

  <div class="section section--white">
    <div class="container container--md">
      <div class="section__top">
        <div class="section__rating">
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
      <div class="section__header">
        <h2 class="section__title">recent reviews</h2>
        <a href="#" class="section__link">Browse all</a>
      </div>
      <!-- .section__header -->
      <div class="section__body">
        <div class="swiper" data-comments>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="comment-item">
                <div class="comment-item__tag">Самый полезный отзыв</div>
                <div class="comment-item__header">
                  <div class="comment-item__author">Ильнур</div>
                  <div class="comment-item__date">25 march 2024</div>
                </div>
                <div class="comment-item__rating">
                  <div class="rating" data-rating="4.5" data-readonly="true">
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

                    <div class="rating__value" data-rating-value>4.5</div>

                    <input
                      type="hidden"
                      name="rating"
                      value="4.5"
                      disabled
                      data-rating-input
                    />
                  </div>
                </div>
                <div class="comment-item__content">
                  <div class="comment-item__group">
                    <div class="comment-item__title">Advantage</div>
                    <div class="comment-item__text">
                      Atvel's website offers a seamless shopping experience with
                      easy navigation, ensuring that you can find and purchase
                      your desired home goods hassle-free. Our user-friendly
                      interface is designed to make your shopping journey
                      enjoyable and efficient.
                    </div>
                  </div>
                </div>
              </div>
              <!-- .comment-item -->
            </div>
            <!-- .swiper-slide -->
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
                        Atvel's website offers a seamless shopping experience
                        with easy navigation.
                      </p>
                    </div>
                  </div>
                  <div class="comment-item__group">
                    <div class="comment-item__title">Disadvantage</div>
                    <div class="comment-item__text">
                      <p>
                        Atvel's website offers a seamless shopping experience
                        with easy navigation, ensuring that you can find and
                        purchase your desired home goods hassle-free.
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
              <!-- .comment-item -->
            </div>
            <!-- .swiper-slide -->
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
                        Atvel's website offers a seamless shopping experience
                        with easy navigation.
                      </p>
                    </div>
                  </div>
                  <div class="comment-item__group">
                    <div class="comment-item__title">Disadvantage</div>
                    <div class="comment-item__text">
                      <p>
                        Atvel's website offers a seamless shopping experience
                        with easy navigation, ensuring that you can find and
                        purchase your desired home goods hassle-free.
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
              <!-- .comment-item -->
            </div>
            <!-- .swiper-slide -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- .section -->

  <div class="section section--white">
    <div class="container container--md">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">Explore</h2>
      </div>
      <!-- .section__header -->
      <div class="section__body">
        <div class="swiper" data-compilation>
          <div class="swiper-wrapper">
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
                    <a href="#"
                      >Atvel робот - пылесос SmartGyro R80 Base Black</a
                    >
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
                    <a href="#"
                      >Atvel робот - пылесос SmartGyro R80 Base Black</a
                    >
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
                    <a href="#"
                      >Atvel робот - пылесос SmartGyro R80 Base Black</a
                    >
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
                    <a href="#"
                      >Atvel робот - пылесос SmartGyro R80 Base Black</a
                    >
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
                    <a href="#"
                      >Atvel робот - пылесос SmartGyro R80 Base Black</a
                    >
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
                    <a href="#"
                      >Atvel робот - пылесос SmartGyro R80 Base Black</a
                    >
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
  </div>
  <!-- .section -->
</template>

<script setup lang="ts">
import "@style/main.css";
import "@style/main.min.css";
import Sliders from "../../static/js/components/sliders.js";

onMounted(async () => {
  if (import.meta.client) {
    Sliders();
  }
});
</script>

<style scoped></style>
