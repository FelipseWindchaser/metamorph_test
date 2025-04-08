<template>
  <footer :class="['footer', secondPage && 'footer_pink']">
    <div class="footer-wrapper">
      <div class="footer_text-container">
        <div class="footer_text-content_wrapper">
          <h4 class="footer_title">Остались вопросы? — Свяжитесь с нами</h4>
          <div class="footer_contacts-container">
            <a
              href="tel:+37498454178"
              class="footer_contacts_phone footer_contacts footer_link"
            >
              <img
                class="footer_contacts_phone-icon"
                src="../../static/img/met-images/phone-call_icon.svg"
                alt="phone-icon"
              />
              <p class="footer_contacts_text">+374 98 45 41 78</p>
            </a>
            <div class="footer_contacts_work-time footer_contacts">
              <img
                class="footer_contacts_phone-icon"
                src="../../static/img/met-images/clocks_icon.svg"
                alt="clocks-icon"
              />
              <p class="footer_contacts_text">9:00 — 18:00</p>
            </div>
            <a
              href="mailto:info@metamorph.group"
              class="footer_contacts_email footer_contacts footer_link"
            >
              <img
                class="footer_contacts_phone-icon"
                src="../../static/img/met-images/email_icon.svg"
                alt="email_icon"
              />
              <p class="footer_contacts_text">info@metamorph.group</p>
            </a>
            <div class="footer_contacts_address footer_contacts">
              <p class="footer_contacts_text">
                г. Ереван, 3-й квартал Давташен, 19/2
              </p>
              <div class="footer_contacts_details-container">
                <p class="footer_contacts_text footer_contacts_details-text">
                  ИП «Аветисян Тигран Владимирович»
                </p>
                <p class="footer_contacts_text footer_contacts_details-text">
                  Адрес регистрации: Армения, Ереван, Центр, ул. Налбандян, дом
                  110, кв. 42.
                </p>
                <p class="footer_contacts_text footer_contacts_details-text">
                  ИНН: 40124249 Наименование банка: ОАО "АКБА БАНК" р/с
                  220551083284000
                </p>
                <p class="footer_contacts_text footer_contacts_details-text">
                  Наименование банка: ОАО "АКБА БАНК"
                </p>
                <p class="footer_contacts_text footer_contacts_details-text">
                  р/с 220551083284000
                </p>
              </div>
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
        <!-- <picture class="footer_image-container">
          <source
            srcset="../../static/img/met-images/map_mob.jpg"
            media="(max-width: 680px)"
          />

          <img
            class="footer_image"
            src="../../static/img/met-images/map.jpg"
            alt="logo"
          />
        </picture> -->

        <div class="footer_map" style="position: relative; overflow: hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?pt=44.493421%2C40.215826&z=16"
            width="710"
            height="953"
            frameborder="0"
            allowfullscreen="true"
            loading="lazy"
            style="position: relative"
          ></iframe>
        </div>
        <!-- <iframe
          class="footer_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2154.35732892524!2d44.49315324229267!3d40.2152608863619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd5645bdf13d%3A0x413b61368f13cc2d!2zWWVnaHZhcmQgSGlnaHdheSwgWWVyZXZhbiAwMDU0LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2sru!4v1738567667620!5m2!1sru!2sru"
          width="710"
          height="100%"
          style="border: 0"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
      </iframe> -->
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
.footer_map {
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
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
.footer_contacts_address {
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
}
.footer_contacts_text {
  color: #fff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  align-self: flex-start;
}
.footer_contacts_details-container {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 7px;
  font-size: 16px;
  opacity: 0.9;
}
.footer_contacts_details-text {
  font-size: 16px;
}
.footer_link {
  text-decoration: none;
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
  /* width: max-content; */
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
  width: 100%;
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
  .footer_map {
    width: 600px;
    height: 750px;
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
  /* .footer_contacts-container {
    align-items: center;
  } */
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
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 35px 16px 44px;
    gap: 63px;
  }
  .footer_text-container {
    align-items: center;
    gap: 0;
  }
  .footer_text-content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer_map {
    width: 323px;
    height: 370px;
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
    width: 100%;
    gap: 0;
  }
  .footer_text-content_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .footer_contacts-container {
    max-width: 100%;
  }
  .footer_map {
    max-width: 300px;
    width: 100%;
    height: 370px;
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
