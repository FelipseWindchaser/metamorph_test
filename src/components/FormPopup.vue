<template>
  <div :class="['popup', isOpen && 'active']">
    <div class="popup_overlay" @click="closePopup"></div>
    <div class="popup_wrapper">
      <svg
        @click="closePopup"
        class="popup_cross-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
      >
        <path
          d="M8.75 8.75L33.25 33.25"
          stroke="#B8B8B8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M33.25 8.75L8.75 33.25"
          stroke="#B8B8B8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div class="popup_content">
        <h3 class="popup_title">{{ popupTitle }}</h3>
        <!-- or Попробовать бесплатно  -->
        <form class="popup_form" name="popup-form" @submit.prevent="submitForm">
          <input
            class="popup_form-input"
            type="text"
            placeholder="Имя"
            v-model="formData.name"
            required
          />
          <input
            class="popup_form-input"
            type="tel"
            placeholder="Телефон"
            v-model="formData.phone"
            required
          />
          <input
            class="popup_form-input"
            type="email"
            placeholder="Email"
            v-model="formData.email"
            required
          />
          <textarea
            class="popup_form-input popup_form-textarea"
            type="text"
            placeholder="Хочу получить услугу"
            v-model="formData.message"
            maxlength="300"
            required
          >
          </textarea>
          <div class="popup_form-checkbox_wrapper">
            <input class="popup_form-checkbox" type="checkbox" checked />
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

<script setup lang="ts">
defineProps<{
  homepage: boolean;
  isOpen: boolean;
  closePopup: () => void;
  popupTitle: string;
}>();

const isSubmitting = ref(false);

const formData = ref<{
  name: string;
  email: string;
  phone: string;
  message: string;
}>({
  name: "",
  email: "",
  phone: "",
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
.popup {
  display: none;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  /* position: absolute; */
  position: fixed;
  z-index: 9999;
  /* background-color: #000; */
}
.popup_overlay {
  background-color: #000c;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 999;
}
.popup_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 618px;
  min-height: 530px;
  border-radius: 24px;
  background: var(--white, #fff);
  z-index: 9999;
  position: relative;
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
  cursor: pointer;
}
.popup_form-button:hover {
  opacity: 0.7;
}
.popup_form-input {
  height: 50px;
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
.popup_form-textarea {
  height: 100px;
  resize: none;
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
.popup_cross-icon {
  position: absolute;
  top: 17px;
  right: 17px;
}
.popup_cross-icon:hover {
  cursor: pointer;
  opacity: 0.7;
}
@media (min-width: 375px) and (max-width: 680px) {
  .popup {
    display: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0 16px;
  }
  .active {
    display: flex;
  }
  .popup_overlay {
    background-color: #000c;
    opacity: 0.5;
    width: 100vw;
    height: calc(100vh + 200px);
    position: absolute;
    z-index: 999;
  }
  .popup_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 49px 20px 24px;
    height: 434px;
    border-radius: 24px;
    background: var(--white, #fff);
    z-index: 9999;
  }
  .popup_title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 41.6px */
    padding-bottom: 30px;
  }
  .popup_form-checkbox {
    align-self: center;
  }
  .popup_form-button {
    font-size: 18px;
  }
  .popup_cross-icon {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 30px;
    height: 30px;
  }
}
@media (min-width: 320px) and (max-width: 374px) {
  .popup {
    display: none;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    padding: 0 16px;
  }
  .active {
    display: flex;
  }
  .popup_overlay {
    background-color: #000c;
    opacity: 0.5;
    width: 100vw;
    height: calc(100vh + 200px);
    position: absolute;
    z-index: 999;
  }
  .popup_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 49px 20px 24px;
    height: 434px;
    border-radius: 24px;
    background: var(--white, #fff);
    z-index: 9999;
  }
  .popup_title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 41.6px */
    padding-bottom: 30px;
  }
  .popup_form-checkbox {
    align-self: center;
  }
  .popup_form-input {
    width: 100%;
  }
  .popup_form-button {
    font-size: 18px;
  }
  .popup_cross-icon {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 30px;
    height: 30px;
  }
}
</style>
