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
              <p class="footer_contacts_text">+374 99 788 409</p>
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
              <p class="footer_contacts_text">info@metamorph.group</p>
            </div>
            <div class="footer_contacts_address footer_contacts">
              <p class="footer_contacts_text">
                г. Ереван, 3-й квартал Давташен, 19/2
              </p>
            </div>
          </div>
        </div>
        <form
          class="footer_form"
          name="footer-form"
          @submit.prevent="submitForm"
        >
          <input
            class="footer_form-input"
            type="text"
            placeholder="Имя"
            v-model="formData.name"
            required
          />
          <input
            class="footer_form-input"
            type="email"
            placeholder="Email"
            v-model="formData.email"
            required
          />
          <textarea
            class="footer_form-input textarea"
            placeholder="Ваш вопрос"
            v-model="formData.message"
            required
          ></textarea>
          <div class="footer_form-checkbox_wrapper">
            <input class="footer_form-checkbox" type="checkbox" checked />
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
      <div>
        <picture class="footer_image-container">
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
<script setup lang="ts">
defineProps<{
  homepage: boolean;
  secondPage?: boolean;
}>();

const isSubmitting = ref(false);

const formData = ref<{
  name: string;
  email: string;
  message: string;
}>({
  name: "",
  email: "",
  message: "",
});

const submitForm = async () => {
  isSubmitting.value = true;
  try {
    const response = await fetch("./sendmail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData.value),
    });

    // if (!response.ok) {
    //   throw new Error("Ошибка отправки формы");
    // }

    const result = await response.text(); // или `response.json()` если PHP возвращает JSON

    alert(result);
    // alert("Письмо успешно отправлено!");
  } catch (error) {
    if (error instanceof Error) alert("Произошла ошибка: " + error.message);
  } finally {
    isSubmitting.value = false;
  }
};
</script>
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
  max-width: 1200px;
  width: 100%;
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
  max-width: 371px;
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
  gap: 63px;
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
.footer_image-container {
  width: 100%;
}
.footer_image {
  border-radius: 16px;
  height: 100%;
  max-width: 710px;
  width: 100%;
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
@media (min-width: 681px) and (max-width: 1280px) {
  .footer {
    display: flex;

    width: 100%;
    background: linear-gradient(152deg, #3792ff 5.77%, #0041c8 90.55%);
  }
  .footer-wrapper {
    justify-content: center;
    align-items: center;
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
    max-width: 375px;
    width: 100%;
    margin-top: 40px;
  }
  .footer_title {
    font-size: 24px;
  }
  .footer_contacts_text {
    font-size: 17px;
  }
  .footer_contacts-container {
    align-items: center;
  }
  .footer_text-container {
    align-items: center;
  }
  .footer_image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer_image {
    width: 80%;
  }
}
@media (min-width: 375px) and (max-width: 680px) {
  .footer {
    display: flex;
    width: 100%;
    background: linear-gradient(152deg, #3792ff 5.77%, #0041c8 90.55%);
  }
  .footer-wrapper {
    flex-direction: column;
  }
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 35px 16px 44px;
    gap: 63px;
  }
  .footer_text-container {
    align-items: center;
  }
  .footer_text-content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer_form {
    width: 100%;
    max-width: 375px;
    margin-top: 40px;
  }
  .footer_title {
    font-size: 24px;
  }
  .footer_contacts_text {
    font-size: 17px;
  }
}
@media (min-width: 320px) and (max-width: 374px) {
  .footer {
    display: flex;
    width: 100%;
    background: linear-gradient(152deg, #3792ff 5.77%, #0041c8 90.55%);
  }
  .footer-wrapper {
    flex-direction: column;
  }
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 35px 16px 44px;
    gap: 63px;
  }
  .footer_text-container {
    align-items: center;
  }
  .footer_text-content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer_form {
    width: 100%;
    max-width: 375px;
    margin-top: 40px;
  }
  .footer_title {
    font-size: 24px;
  }
  .footer_contacts_text {
    font-size: 17px;
  }
  .footer_image {
    max-width: 343px;
    width: 100%;
  }
}
</style>
