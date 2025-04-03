<template>
  <header class="header">
    <div v-if="page === 'home'" class="header_container_pc">
      <a href="https://metamorph.group/" class="header_logo">
        <picture>
          <source
            srcset="../../static/img/met-images/logo_mob.svg"
            media="(max-width: 680px)"
          />
          <img src="../../static/img/met-images/logo.svg" alt="logo" />
        </picture>
      </a>
      <nav class="header_nav">
        <div class="header_menu">
          <a class="header_menu-link" href="#fulfillment">Возможности</a>
          <a class="header_menu-link" href="#about-us">Схема работы</a>
          <a class="header_menu-link" href="#fulfillment-advantages"
            >Преимущества</a
          >
          <a href="#accordion" class="header_menu-link">FAQ</a>
          <div class="header_menu-container">
            <a
              class="header_menu-link link-bold"
              href="https://metamorph.group/mp-marketing/"
              target="_blank"
              >О маркетинге</a
            >
            <a
              class="header_menu-link link-bold"
              href="https://metamorph.group/msklad-erp/"
              target="_blank"
              >О "МойСклад"</a
            >
          </div>

          <!-- <button
            @click="() => openPopup()"
            type="button"
            :class="`header_menu-button ${
              homepage ? ' orange-button' : ' blue-button'
            } `"
          >
            КОНСУЛЬТАЦИЯ
          </button> -->
        </div>
      </nav>
    </div>
    <div v-else-if="page === 'mp-marketing'" class="header_container_pc">
      <a href="https://metamorph.group/" class="header_logo">
        <picture>
          <source
            srcset="../../static/img/met-images/logo_mob.svg"
            media="(max-width: 680px)"
          />
          <img src="../../static/img/met-images/logo.svg" alt="logo" />
        </picture>
      </a>
      <nav class="header_nav">
        <div class="header_menu">
          <a class="header_menu-link" href="#service">Продвижение</a>
          <a class="header_menu-link" href="#advantages">Преимущества</a>
          <a class="header_menu-link" href="#maintenance">Сопровождение</a
          ><a class="header_menu-link" href="#results">Результаты</a>
          <a href="#accordion" class="header_menu-link">FAQ</a>
          <div class="header_menu-container">
            <a
              class="header_menu-link link-bold"
              href="https://metamorph.group/mp-marketing/"
              target="_blank"
              >О маркетинге</a
            >
            <a
              class="header_menu-link link-bold"
              href="https://metamorph.group/msklad-erp/"
              target="_blank"
              >О "Мойсклад"</a
            >
          </div>

          <!-- <button
            @click="() => openPopup()"
            type="button"
            :class="`header_menu-button ${
              homepage ? ' orange-button' : ' blue-button'
            } `"
          >
            КОНСУЛЬТАЦИЯ
          </button> -->
        </div>
      </nav>
    </div>
    <div v-else-if="page === 'msklad-erp'" class="header_container_pc">
      <a href="https://metamorph.group/" class="header_logo">
        <picture>
          <source
            srcset="../../static/img/met-images/logo_mob.svg"
            media="(max-width: 680px)"
          />
          <img src="../../static/img/met-images/logo.svg" alt="logo" />
        </picture>
      </a>
      <nav class="header_nav">
        <div class="header_menu">
          <a class="header_menu-link" href="#presentation"
            >МойСклад для бизнеса</a
          >
          <a class="header_menu-link" href="#advantages">Преимущества</a>
          <a class="header_menu-link" href="#capabilities">Плюсы сервиса</a
          ><a class="header_menu-link" href="#pricing">Тарифные планы</a>
          <a href="#accordion" class="header_menu-link">FAQ</a>
          <div class="header_menu-container">
            <a
              class="header_menu-link link-bold"
              href="https://metamorph.group/mp-marketing/"
              target="_blank"
              >О маркетинге</a
            >
            <a
              class="header_menu-link link-bold"
              href="https://metamorph.group/msklad-erp/"
              target="_blank"
              >О "Мойсклад"</a
            >
          </div>

          <!-- <button
            @click="() => openPopup()"
            type="button"
            :class="`header_menu-button ${
              homepage ? ' orange-button' : ' blue-button'
            } `"
          >
            КОНСУЛЬТАЦИЯ
          </button> -->
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
            @click="openNav"
            :class="`header_menu-button_mob_nav-${
              isNavOpen ? 'opened' : 'closed'
            } `"
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
            @click="closeNav"
            :class="`header_menu-button_mob_nav-${
              !isNavOpen ? 'opened' : 'closed'
            } `"
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
      <div
        v-if="page === 'home'"
        :class="`header_menu_mob ${isNavOpen ? 'active' : ''}`"
      >
        <a class="header_menu-link" href="#fulfillment">Возможности</a>
        <a class="header_menu-link" href="#about-us">Схема работы</a>
        <a class="header_menu-link" href="#fulfillment-advantages"
          >Преимущества</a
        >
        <a href="#accordion" class="header_menu-link">Вопросы и ответы</a>
        <div class="header_menu-container_mob">
          <a
            class="header_menu-link link-bold"
            href="https://metamorph.group/mp-marketing/"
            target="_blank"
            >Маркетинг на маркетплейсах</a
          >
          <a
            class="header_menu-link link-bold"
            href="https://metamorph.group/msklad-erp/"
            target="_blank"
            >МойСклад в Армении</a
          >
          <!-- <a href="https://metamorph.group/" class="header_menu-link">Главная</a>
        <a class="header_menu-link" :href="pageLink">О нас</a>
        <a href="#accordion" class="header_menu-link">Вопросы и ответы</a> -->
          <!-- <button
          @click="() => openPopup()"
          type="button"
          :class="`header_menu-button ${
            homepage ? ' orange-button' : ' blue-button'
          } `"
        >
          КОНСУЛЬТАЦИЯ
        </button> -->
        </div>
      </div>
      <div
        v-else-if="page === 'mp-marketing'"
        :class="`header_menu_mob ${isNavOpen ? 'active' : ''}`"
      >
        <a class="header_menu-link" href="#service">Услуги по продвижению</a>
        <a class="header_menu-link" href="#advantages">Преимущества</a>
        <a class="header_menu-link" href="#maintenance">Этапы сопровождения</a
        ><a class="header_menu-link" href="#results">Результаты продвижения</a>
        <a href="#accordion" class="header_menu-link">Вопросы и ответы</a>
        <div class="header_menu-container_mob">
          <a
            class="header_menu-link link-bold"
            href="https://metamorph.group/mp-marketing/"
            target="_blank"
            >Маркетинг на маркетплейсах</a
          >
          <a
            class="header_menu-link link-bold"
            href="https://metamorph.group/msklad-erp/"
            target="_blank"
            >МойСклад в Армении</a
          >
        </div>
      </div>
      <div
        v-else-if="page === 'msklad-erp'"
        :class="`header_menu_mob ${isNavOpen ? 'active' : ''}`"
      >
        <a class="header_menu-link" href="#presentation"
          >МойСклад - отличный выбор для бизнеса</a
        >
        <a class="header_menu-link" href="#advantages">Преимущества</a>
        <a class="header_menu-link" href="#capabilities"
          >Подробнее о плюсах внедрения сервиса</a
        ><a class="header_menu-link" href="#pricing">Тарифные планы</a>
        <a href="#accordion" class="header_menu-link">Вопросы и ответы</a>
        <div class="header_menu-container_mob">
          <a
            class="header_menu-link link-bold"
            href="https://metamorph.group/mp-marketing/"
            target="_blank"
            >Маркетинг на маркетплейсах</a
          >
          <a
            class="header_menu-link link-bold"
            href="https://metamorph.group/msklad-erp/"
            target="_blank"
            >МойСклад в Армении</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
const props = defineProps<{
  page: "home" | "mp-marketing" | "msklad-erp";
  openPopup: (title?: string) => void;
}>();
const homepage = props.page === "home";
const pageLink = computed(() => {
  switch (props.page) {
    case "home":
      return "#about-us";
    case "mp-marketing":
      return "#service";
    case "msklad-erp":
      return "#presentation";
    default:
      return "https://metamorph.group/";
  }
});

const isNavOpen = ref(false);
// console.log(isNavOpen);
const openNav = () => {
  // console.log(isNavOpen);
  isNavOpen.value = true;
};
const closeNav = () => {
  isNavOpen.value = false;
};
</script>
<style scoped>
.header_container_pc {
  font-family: "Noto Sans";
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 8.33vw;
  gap: 50px;
  box-shadow: 0 6px 16px #00000014;
  position: relative;
}
.header_menu {
  display: flex;
  gap: 20px;
  align-items: center;
}
.header_menu-container {
  display: flex;
  gap: 45px;
  padding-left: 30px;
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
  /* text-align: center; */
  /* max-width: 140px; */
  text-wrap: nowrap;
}
.link-bold {
  font-weight: bold;
}
.header_container_mob {
  display: none;
}
.header_menu-link:hover {
  opacity: 0.7;
}
@media (min-width: 1359px) and (max-width: 1690px) {
  .header_menu {
    gap: 20px;
  }
  .header_menu-link {
    /* max-width: 140px; */
  }
  .header_menu-container {
    display: flex;
    gap: 20px;
    padding-left: 30px;
    max-width: 300px;
    width: 100%;
  }
  .header_menu-container_mob {
    display: none;
  }
}

@media (min-width: 680px) and (max-width: 1360px) {
  .header_menu_mob {
    display: none;
    flex-direction: column;
    padding: 36px 0 0 16px;
    gap: 30px;
    width: 100%;
    position: absolute;
    top: 69px;
    z-index: 1;
    background: #fff;
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
    z-index: 2;
  }
  .header_menu-button_mob_nav-closed {
    cursor: pointer;
  }
  .header_menu-button_mob_nav-opened {
    display: none;
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
  .header_menu-container_mob {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
  }
}
@media (min-width: 320px) and (max-width: 679px) {
  .header_menu_mob {
    display: none;
    flex-direction: column;
    padding: 36px 0 0 16px;
    gap: 30px;
    width: 100%;
    position: absolute;
    top: 69px;
    z-index: 1;
    background: #fff;
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
    z-index: 2;
  }
  .header_menu-button_mob_nav-closed {
    cursor: pointer;
  }
  .header_menu-button_mob_nav-opened {
    display: none;
    cursor: pointer;
  }
  .hidden {
    display: none;
  }
  .header_menu-container_mob {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
  }
  .header_menu-link {
    max-width: 100%;
    text-align: left;
  }
}
</style>
