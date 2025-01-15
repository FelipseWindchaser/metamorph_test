<template>
  <div class="popup">
    <div class="popup_overlay"></div>
    <div class="popup_wrapper">
      <div class="popup_content">
        <h3 class="popup_title">Получить консультацию</h3>
        <!-- or Попробовать бесплатно  -->
        <form class="popup_form" name="popup-form">
          <input
            class="popup_form-input"
            name="name"
            type="text"
            placeholder="Имя"
          />
          <input
            class="popup_form-input"
            name="phone"
            type="tel"
            placeholder="Телефон"
          />
          <input
            class="popup_form-input"
            name="email"
            type="email"
            placeholder="Email"
          />
          <div class="popup_form-checkbox_wrapper">
            <input class="popup_form-checkbox" type="checkbox" />
            <p class="popup_form-checkbox_text">
              Я соглашаюсь с правилами обработки персональных данных.
            </p>
          </div>

          <button
            :class="`popup_form-button ${
              homepage ? ' orange-button' : ' blue-button'
            } `"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.popup {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-color: #000; */
}
.popup_overlay {
  background-color: #000c;
  opacity: 0.1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
}
.popup_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 618px;
  height: 471px;
  border-radius: 24px;
  background: var(--white, #fff);
}
.popup_title {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  padding-bottom: 14px;
}
.popup_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 426px;
}
.popup_form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.popup_form-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.popup_form-input {
  border-radius: 16px;
  border: none;
  outline: none;
  padding: 15px 18px;
  color: black;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 16px;
  border: 1px solid var(--grey-stroke, #dfdfdf);
  background: var(--white, #fff);
}
.popup_form-input::placeholder {
  color: var(--grey-secondary, #b0b0b0);
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.popup_form-checkbox {
  align-self: flex-start;
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.popup_form-checkbox:hover {
  cursor: pointer;
}
.popup_form-checkbox_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.popup_form-checkbox_text {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 16.9px */
  margin: 0;
}
.active {
  display: flex;
}
</style>
<script setup lang="ts">
defineProps<{
  homepage: boolean;
}>();
</script>
