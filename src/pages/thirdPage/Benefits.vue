<template>
  <section class="benefits">
    <h3 class="benefits_title">Что вы получите с «Мой Склад»?</h3>
    <div class="benefits_lists">
      <ul class="benefits_list">
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">Учет остатков и себестоимости</p>
        </li>
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">Планирование закупок</p>
        </li>
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">Уведомления о заказах и задачах</p>
        </li>
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">
            Приемка товаров и проверка комплектации
          </p>
        </li>
      </ul>
      <ul class="benefits_list">
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">Управление номенклатурой</p>
        </li>
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">
            Встроенный редактор ценников и этикеток
          </p>
        </li>
        <li class="benefits_list-item">
          <img
            class="benefits_icon"
            src="../../../static/img/met-images/check-mark.svg"
            alt="check-mark_icon"
          />
          <p class="benefits_list-item_text">
            Складской учет и работа с маркировкой
          </p>
        </li>
        <li class="benefits_list-item">
          <button
            @click="() => openPopup('Получить консультацию')"
            class="benefits_button"
            type="button"
          >
            Получить консультацию
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps<{
  openPopup: (title?: string) => void;
}>();
</script>
<style scoped>
/* 1200px */
.benefits {
  display: flex;
  /* max-width: 1200px; */
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 269px 110px 120px;
}
.benefits_lists {
  display: flex;
  flex-direction: row;
  gap: 154px;
}
.benefits_title {
  color: #000;
  font-family: "Noto Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 47.6px */
  text-transform: uppercase;
  padding-bottom: 35px;
  padding-right: 414px;
}
.benefits_list {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 18px;
}
.benefits_list-item_text {
  margin: 0;
  color: #000;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.benefits_list-item {
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}
.benefits_button {
  display: flex;
  max-width: 336px;
  width: 100%;
  height: 60px;
  padding: 22px 65px 20px 65px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #64cdff;
  border: none;
  color: var(--white, #fff);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.benefits_button:hover {
  cursor: pointer;
  opacity: 0.7;
}
@media (min-width: 320px) and (max-width: 1280px) {
  .benefits {
    display: flex;
    max-width: 375px;
    padding: 0 16px 60px;
    margin: 0 auto;
  }
  .benefits_lists {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .benefits_title {
    font-size: 20px;
    padding: 0 0 24px 0;
  }
  .benefits_icon {
    width: 40px;

    height: 40px;
  }
  .benefits_list-item_text {
    font-size: 15px;
  }
}
</style>
