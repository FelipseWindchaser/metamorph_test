<template>
  <section class="header">
    <div class="header_container_pc">
      <div class="header_logo">
        <picture>
          <source
            srcset="../../static/img/met-images/logo_mob.svg"
            media="(max-width: 680px)"
          />
          <img src="../../static/img/met-images/logo.svg" alt="logo" />
        </picture>
      </div>
      <nav class="header_nav">
        <div class="header_menu">
          <a href="#" class="header_menu-link">Главная</a>
          <a
            class="header_menu-link"
            :href="` ${homepage ? ' #about-us' : ' #presentation'} `"
            >О нас</a
          >
          <a href="#reviews" class="header_menu-link">Отзывы и кейсы</a>
          <a href="#faq" class="header_menu-link">Вопросы и ответы</a>
          <button
            @click="() => openPopup()"
            type="button"
            :class="`header_menu-button ${
              homepage ? ' orange-button' : ' blue-button'
            } `"
          >
            КОНСУЛЬТАЦИЯ
          </button>
        </div>
      </nav>
    </div>
    <div class="header_container_mob">
      <div class="header_container_mob-wrapper">
        <div class="header_logo">
          <picture>
            <source
              srcset="../../static/img/met-images/logo_mob.svg"
              media="(max-width: 680px)"
            />
            <img src="../../static/img/met-images/logo.svg" alt="logo" />
          </picture>
        </div>

        <div class="header_menu-button_mob">
          <svg
            class="header_menu-button_mob_closed"
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
          <svg
            class="header_menu-button_mob_opened"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M6.25 6.25L23.75 23.75"
              stroke="#B8B8B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M23.75 6.25L6.25 23.75"
              stroke="#B8B8B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div class="header_menu_mob">
        <!-- add active to header_menu_mob -->
        <a href="#" class="header_menu-link">Главная</a>
        <a
          class="header_menu-link"
          :href="` ${homepage ? ' #about-us' : ' #presentation'} `"
          >О нас</a
        >
        <a href="#reviews" class="header_menu-link">Отзывы и кейсы</a>
        <a href="#faq" class="header_menu-link">Вопросы и ответы</a>
        <button
          type="button"
          :class="`header_menu-button ${
            homepage ? ' orange-button' : ' blue-button'
          } `"
        >
          КОНСУЛЬТАЦИЯ
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  homepage: boolean;
  openPopup: (title?: string) => void;
}>();
</script>
<style scoped>
.header_container_pc {
  font-family: "Noto Sans";
  display: flex;
  justify-content: space-between;
  padding: 30px 120px;
  box-shadow: 0 6px 16px #00000014;
  position: relative;
}
.header_menu {
  display: flex;
  gap: 45px;
  align-items: center;
}
.header_menu-button {
  display: flex;
  width: 218px;
  height: 46px;
  padding: 11px 61px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.header_menu-button:hover {
  cursor: pointer;
  opacity: 0.7;
}
.header_menu-button_mob {
  display: none;
}
.header_menu-link {
  text-decoration: none;
  color: #181818;
  font-size: 15px;
  line-height: 130%;
  font-weight: 400;
}
.header_container_mob {
  display: none;
}
.header_menu-link:hover {
  opacity: 0.7;
}
@media (min-width: 320px) and (max-width: 680px) {
  .header_menu_mob {
    display: none;
    flex-direction: column;
    padding: 36px 0 0 16px;
    gap: 30px;
  }
  .active {
    display: flex;
  }
  .header_menu-button {
    margin-bottom: 60px;
  }
  .header_menu-button_mob {
    display: flex;
  }
  /* .header_menu-link {
    color: var(--main, #181818);
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; 
  } */
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
  .header_container_pc {
    display: none;
  }
  .header_container_mob {
    display: flex;
    flex-direction: column;
  }
  .header_container_mob-wrapper {
    display: flex;
    flex-direction: row;
    box-shadow: 0 6px 16px #00000014;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 17px 16px;
  }
  .header_menu-button_mob_opened {
    display: none;
  }
  .hidden {
    display: none;
  }
}
</style>
