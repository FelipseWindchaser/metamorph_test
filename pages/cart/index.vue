<template>
  <!-- <div class="breadcrumb-block">
    <div class="container">
      <ol class="breadcrumb">
        <li class="breadcrumb__item">
          <a href="#" class="breadcrumb__link">
            {{ breadcrumbContent.link }}
          </a>
        </li>
        <li class="breadcrumb__item">
          <span class="breadcrumb__active">
            {{ breadcrumbContent.span }}
          </span>
        </li>
      </ol>
    </div>
  </div> -->
  <Breadcrumb :content="breadcrumbContent" />

  <section class="main">
    <div class="container">
      <h1>
        {{ cartHeading }}
      </h1>

      <div class="cart">
        <div class="cart__header">
          <div class="cart__heading cart__heading--content">
            {{ cartHeadingContent.products }}
          </div>
          <div class="cart__heading cart__heading--price">
            {{ cartHeadingContent.price }}
          </div>
          <div class="cart__heading cart__heading--quantity">
            {{ cartHeadingContent.quantity }}
          </div>
          <div class="cart__heading cart__heading--amount">
            {{ cartHeadingContent.amount }}
          </div>
          <div class="cart__heading cart__heading--remove"></div>
        </div>
        <!-- <div class="cart-item">
          <div class="cart-item__content">
            <a href="#" class="cart-item__media">
              <img src="@img/content/cart_image.png" class="img-cover" alt="" />
            </a>
            <div class="cart-item__title">
              <NuxtLink to="/product">
                {{ cartItemContent.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="cart-item__quantity">
            <div class="quantity" data-quantity>
              <button
                type="button"
                class="quantity__button quantity__button--minus"
                data-quantity-button="minus"
              ></button>
              <div class="quantity__field">
                <input
                  type="number"
                  class="quantity__input"
                  min="0"
                  max="99"
                  value="1"
                  data-quantity-input
                />
              </div>
              <button
                type="button"
                class="quantity__button quantity__button--plus"
                data-quantity-button="plus"
              ></button>
            </div>
          </div>
          <div class="cart-item__price">
            <span class="color-red">
              {{ cartItemContent.currency }}
            </span>
            {{ cartItemContent.price }}
          </div>
          <div class="cart-item__amount">
            <span class="color-red">
              {{ cartItemContent.currency }}
            </span>
            {{ cartItemContent.amount }}
          </div>
          <div class="cart-item__remove">
            <button type="button" class="btn-remove">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#delete"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i>
            </button>
          </div>
        </div> -->
        <CartItem :content="cartItemContent" />
        <!-- .cart-item -->
        <div class="cart-item">
          <div class="cart-item__content">
            <a href="#" class="cart-item__media">
              <img src="@img/content/cart_image.png" class="img-cover" alt="" />
            </a>
            <div class="cart-item__title">
              <NuxtLink to="/product">
                {{ cartItemContent.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="cart-item__quantity">
            <div class="quantity" data-quantity>
              <button
                type="button"
                class="quantity__button quantity__button--minus"
                data-quantity-button="minus"
              ></button>
              <div class="quantity__field">
                <input
                  type="number"
                  class="quantity__input"
                  min="0"
                  max="99"
                  value="1"
                  data-quantity-input
                />
              </div>
              <button
                type="button"
                class="quantity__button quantity__button--plus"
                data-quantity-button="plus"
              ></button>
            </div>
          </div>
          <div class="cart-item__price">
            <span class="color-red">
              {{ cartItemContent.currency }}
            </span>
            {{ cartItemContent.price }}
          </div>
          <div class="cart-item__amount">
            <span class="color-red">
              {{ cartItemContent.currency }}
            </span>
            {{ cartItemContent.amount }}
          </div>
          <div class="cart-item__remove">
            <button type="button" class="btn-remove">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#delete"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i>
            </button>
          </div>
        </div>
        <!-- .cart-item -->
        <div class="cart-item">
          <div class="cart-item__content">
            <a href="#" class="cart-item__media">
              <img src="@img/content/cart_image.png" class="img-cover" alt="" />
            </a>
            <div class="cart-item__title">
              <NuxtLink to="/product">
                {{ cartItemContent.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="cart-item__quantity">
            <div class="quantity" data-quantity>
              <button
                type="button"
                class="quantity__button quantity__button--minus"
                data-quantity-button="minus"
              ></button>
              <div class="quantity__field">
                <input
                  type="number"
                  class="quantity__input"
                  min="0"
                  max="99"
                  value="1"
                  data-quantity-input
                />
              </div>
              <button
                type="button"
                class="quantity__button quantity__button--plus"
                data-quantity-button="plus"
              ></button>
            </div>
          </div>
          <div class="cart-item__price">
            <span class="color-red">
              {{ cartItemContent.currency }}
            </span>
            {{ cartItemContent.price }}
          </div>
          <div class="cart-item__amount">
            <span class="color-red">
              {{ cartItemContent.currency }}
            </span>
            {{ cartItemContent.amount }}
          </div>
          <div class="cart-item__remove">
            <button type="button" class="btn-remove">
              <i>
                <svg
                  class="ico-svg"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#delete"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </i>
            </button>
          </div>
        </div>
        <!-- .cart-item -->

        <div class="cart__footer">
          <div class="cart__summary">
            <div class="cart__label">
              {{ cartTotalContent.title }}
            </div>
            <div class="cart__total">
              <span class="color-red">
                {{ cartTotalContent.currency }}
              </span>
              {{ cartTotalContent.amount }}
            </div>
          </div>
          <div class="cart__buttons">
            <div class="cart__button cart__button--md">
              <button type="button" class="btn btn-md btn-border">
                <span>
                  {{ cartButtonsContent.instant }}
                </span>
              </button>
            </div>
            <div class="cart__button">
              <NuxtLink to="/order" class="btn btn-md btn-red">
                <span>
                  {{ cartButtonsContent.redirect }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- .cart -->
    </div>
  </section>
</template>

<script setup lang="ts">
import CartItem from "./CartItem.vue";
const breadcrumbContent = {
  link: "/",
  linkText: "Main",
  span: "Корзина",
};
const cartHeading = "Корзина";
const cartHeadingContent = {
  products: "Товары",
  price: "Стоимость товара",
  quantity: "Количество",
  amount: "Сумма",
};
const cartItemContent = {
  name: "Product name",
  currency: "$",
  price: "590",
  amount: "590",
};
const cartTotalContent = {
  title: "Итого:",
  currency: "$",
  amount: "1770",
};
const cartButtonsContent = {
  instant: "Buy instantly",
  redirect: "Buy",
};
</script>

<style scoped></style>
