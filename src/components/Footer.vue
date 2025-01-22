<template>
  <footer :class="['footer', secondPage && 'footer_pink']">
    <div class="footer-wrapper">
      <div class="footer_text-container">
        <div class="footer_text-content_wrapper">
          <h4 class="footer_title">Остались вопросы? — Свяжитесь с нами</h4>
          <div class="footer_contacts-container">
            <div class="footer_contacts_phone footer_contacts">
              <img
                class="footer_contacts_phone-icon"
                src="../../static/img/met-images/phone-call_icon.svg"
                alt="phone-icon"
              />
              <p class="footer_contacts_text">+374 91 59 8338</p>
            </div>
            <div class="footer_contacts_work-time footer_contacts">
              <img
                class="footer_contacts_phone-icon"
                src="../../static/img/met-images/clocks_icon.svg"
                alt="clocks-icon"
              />
              <p class="footer_contacts_text">9:00 — 18:00</p>
            </div>
            <div class="footer_contacts_email footer_contacts">
              <img
                class="footer_contacts_phone-icon"
                src="../../static/img/met-images/email_icon.svg"
                alt="email_icon"
              />
              <p class="footer_contacts_text">vvx@metamorph.group</p>
            </div>
            <div class="footer_contacts_address footer_contacts">
              <p class="footer_contacts_text">
                г. Ереван, 3-й квартал Давташен, 19/2
              </p>
            </div>
          </div>
        </div>
        <form class="footer_form" name="footer-form">
          <input
            class="footer_form-input"
            name="name"
            type="text"
            placeholder="Имя"
          />
          <input
            class="footer_form-input"
            name="email"
            type="email"
            placeholder="Email"
          />
          <textarea
            class="footer_form-input textarea"
            name="text"
            placeholder="Ваш вопрос"
          ></textarea>
          <div class="footer_form-checkbox_wrapper">
            <input class="footer_form-checkbox" type="checkbox" />
            <p class="footer_form-checkbox_text">
              Я соглашаюсь с правилами обработки персональных данных.
            </p>
          </div>

          <button
            :class="`footer_form-button ${
              homepage ? ' orange-button' : ' blue-button'
            } `"
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
      <div class="footer_image-container">
        <picture>
          <source
            srcset="../../static/img/met-images/map_mob.jpg"
            media="(max-width: 680px)"
          />
          <img
            class="footer_image"
            src="../../static/img/met-images/map.jpg"
            alt="logo"
          />
        </picture>
      </div>
    </div>
  </footer>
</template>
<style scoped>
/* 1200px */
.footer {
  display: flex;
  background: linear-gradient(112deg, #2381e3 29.32%, #1862ae 75.85%);
}
.footer_pink {
  background: linear-gradient(to right, #2381e3, #7b73e9, #f87ec9);
}

.footer-wrapper {
  display: flex;
  flex-direction: row;
  width: 1200px;
  align-self: center;
  padding: 66px 0 77px;
  gap: 63px;
}
.footer_contacts_text {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.footer_title {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  margin-bottom: 33px;
}
.footer_contacts {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer_contacts-container {
  display: flex;
  flex-direction: column;
  gap: 29px;
}
.footer_form {
  display: flex;
  flex-direction: column;
  width: 426px;
  gap: 14px;
}
.footer_text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer_form-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
.footer_form-button:hover {
  cursor: pointer;
  opacity: 0.7;
}
.footer_form-input {
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
}
.footer_form-input::placeholder {
  color: var(--grey-secondary, #b0b0b0);
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.textarea {
  height: 118px;
  resize: none;
  padding: 10px 18px;
}
.footer_form-checkbox {
  align-self: flex-start;
  width: 24px;
  height: 24px;
  border-radius: 4px;
}
.footer_form-checkbox:hover {
  cursor: pointer;
}
.footer_image {
  border-radius: 16px;
  height: 100%;
}
.footer_form-checkbox_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.footer_form-checkbox_text {
  color: var(--white, #fff);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 16.9px */
  margin: 0;
}
@media (min-width: 320px) and (max-width: 680px) {
  .footer {
    display: flex;
    width: 375px;
    background: linear-gradient(152deg, #3792ff 5.77%, #0041c8 90.55%);
  }
  .footer-wrapper {
    flex-direction: column;
  }
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    padding: 35px 16px 44px;
    gap: 63px;
  }
  .footer_form {
    width: 100%;
    margin-top: 40px;
  }
  .footer_title {
    font-size: 24px;
  }
  .footer_contacts_text {
    font-size: 17px;
  }
}
</style>
<script setup lang="ts">
defineProps<{
  homepage: boolean;
  secondPage: boolean;
}>();
</script>
