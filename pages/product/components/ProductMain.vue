<template>
  <div class="product__main">
    <div class="product__section">
      <div class="product__info">
        <div class="product__tags" v-if="product.isNew">
          <div class="product__tag product__tag--new">
            <span>{{ content.new }}</span>
          </div>
        </div>
        <div class="product__availability valid" v-if="product.isActive">
          {{ content.inStock }}
        </div>
        <div class="product__availability" v-else>{{ content.outStock }}</div>
      </div>
      <div class="product-price">
        <div class="product-price__base">
          <div class="product-price__old">${{ product.price }}</div>
        </div>
        <div class="product-price__row">
          <div class="product-price__current">
            {{
              `$${Math.ceil(
                product.price - (product.discount / 100) * product.price
              )}`
            }}
          </div>
          <div class="product-price__discount">
            {{ `${product.discount}%` }}
          </div>
        </div>
      </div>
      <!-- .product-price -->
      <div class="product__order">
        <button type="button" class="btn btn-red btn-md w-100">
          <span>{{ content.addToCart }}</span>
        </button>
      </div>
      <!-- .product__order -->
      <div class="product__lead" v-if="product.specialty">
        {{ product.specialty }}
      </div>
      <!-- .product__lead -->
    </div>
    <!-- .product__section -->

    <div class="product__section">
      <div class="product__title">{{ content.specification }}:</div>
      <div class="product__text">
        <ul>
          <li v-for="item of product.specifications">
            {{ item.specification }}
          </li>
        </ul>
      </div>
    </div>
    <!-- .product__section -->
    <div
      class="product__section product__section--markets"
      v-if="product.marketplaceLinks.length"
    >
      <div class="product__title">{{ content.marketplaceLinks }}</div>
      <div class="product__markets">
        <a
          v-for="item of product.marketplaceLinks"
          :href="item.link"
          :class="`btn-market btn-market--${item.marketplace.toLowerCase()}`"
        >
          <i>
            <img
              v-if="item.marketplace === 'Ozon'"
              src="@img/ozon.svg"
              class="ico-svg"
              alt=""
            />
            <img
              v-if="item.marketplace === 'Wildberries'"
              src="@img/wildberries.svg"
              class="ico-svg"
              alt=""
            />
          </i>
        </a>
      </div>
    </div>
    <!-- .product__section -->
  </div>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    isNew: boolean;
    isActive: boolean;
    price: number;
    discount: number;
    specialty: string;
    specifications: {
      specification: string;
    }[];
    marketplaceLinks: {
      link: string;
      marketplace: string;
    }[];
  };
  content: {
    new: string;
    inStock: string;
    outStock: string;
    addToCart: string;
    marketplaceLinks: string;
    specification: string;
  };
}>();
</script>

<style scoped></style>
