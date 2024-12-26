<template>
  <div class="cart-item">
    <div class="cart-item__content">
      <a href="#" class="cart-item__media">
        <img src="@img/content/cart_image.png" class="img-cover" alt="" />
      </a>
      <div class="cart-item__title">
        <NuxtLink to="/product">
          {{ content.name }}
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
        {{ content.currency }}
      </span>
      {{ content.price }}
    </div>
    <div class="cart-item__amount">
      <span class="color-red">
        {{ content.currency }}
      </span>
      {{ content.amount }}
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
</template>

<script setup lang="ts">
defineProps<{
  content: {
    name: string;
    currency: string;
    price: string;
    amount: string;
  };
}>();
</script>

<style scoped></style>
