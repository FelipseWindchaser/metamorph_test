<template>
  <section class="header">
    <div class="header_container">
      <div class="header_logo">
        <picture>
          <source
            srcset="../../static/img/met-images/logo_mob.svg"
            media="(max-width: 680px)"
          />
          <img src="../../static/img/met-images/logo.svg" alt="logo" />
        </picture>
      </div>
      <nav class="header_menu">
        <a href="#" class="header_menu-link">Фулфилмент</a>
        <a href="#" class="header_menu-link">О нас</a>
        <a href="#" class="header_menu-link">Преимущества</a>
        <a href="#" class="header_menu-link">FAQ</a>
        <button
          type="button"
          :class="`header_menu-button ${
            homepage ? ' orange-button' : ' blue-button'
          } `"
        >
          КОНСУЛЬТАЦИЯ
        </button>
      </nav>
      <div class="header_menu-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 5H21"
            stroke="#151515"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 12H21"
            stroke="#151515"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 19H21"
            stroke="#151515"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
<style scoped>
.header_container {
  font-family: "Noto Sans";
  display: flex;
  justify-content: space-between;
  padding: 30px 120px;
  box-shadow: 0 6px 16px #00000014;
}
.header_menu {
  display: flex;
  gap: 45px;
  align-items: center;
}
.header_menu-button {
  display: none;
}
.header_menu-link {
  text-decoration: none;
  color: #181818;
  font-size: 15px;
  line-height: 130%;
  font-weight: 400;
}
@media (min-width: 375px) and (max-width: 680px) {
  .header_menu {
    display: none;
  }
  .header_menu-button {
    display: flex;
  }
  .header_container {
    padding: 17px 23px 17px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header_logo {
    width: 225px;
    height: 35.156px;
    flex-shrink: 0;
  }
}
</style>
<script setup lang="ts">
defineProps<{
  homepage: boolean;
}>();
</script>
