<template>
  <section class="pricing">
    <h3 class="pricing_title">тарифные планы «МойСклад» для вашего бизнеса</h3>
    <table class="pricing_table">
      <thead>
        <tr>
          <th class="pricing_table-header"></th>
          <th class="pricing_table-header">СТАРТ</th>
          <th class="pricing_table-header">БАЗОВЫЙ</th>
          <th class="pricing_table-header">ПРОФЕССИОНАЛЬНЫЙ</th>
          <th class="pricing_table-header">КОРПОРАТИВНЫЙ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Количество сотрудников:
          </td>
          <td class="pricing_table-data">1</td>
          <td class="pricing_table-data">2</td>
          <td class="pricing_table-data">5</td>
          <td class="pricing_table-data">10</td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Точки продаж (включено):
          </td>
          <td class="pricing_table-data">1</td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/cross-icon.svg"
              alt="cross_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/cross-icon.svg"
              alt="cross_icon"
            />
          </td>
          <td class="pricing_table-data">5</td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Подключение интернет-магазина:
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Юридические лица:
          </td>
          <td class="pricing_table-data">1</td>
          <td class="pricing_table-data">2</td>
          <td class="pricing_table-data">10</td>
          <td class="pricing_table-data">∞</td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Объем хранилища:
          </td>
          <td class="pricing_table-data">100 мб</td>
          <td class="pricing_table-data">500 мб</td>
          <td class="pricing_table-data">2 000 мб</td>
          <td class="pricing_table-data">10 000 мб</td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Количество товаров:
          </td>
          <td class="pricing_table-data">∞</td>
          <td class="pricing_table-data">∞</td>
          <td class="pricing_table-data">∞</td>
          <td class="pricing_table-data">∞</td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Поддержка маркировки:
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            CRM система (включены):
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
          <td class="pricing_table-data">
            <img
              src="../../../static/img/met-images/check-icon.svg"
              alt="check_icon"
            />
          </td>
        </tr>
        <tr>
          <td class="pricing_table-data pricing_table-data_title">
            Стоимость (в месяц)*:
          </td>
          <td class="pricing_table-data">550 ₽</td>
          <td class="pricing_table-data">1 300 ₽</td>
          <td class="pricing_table-data">3 800 ₽</td>
          <td class="pricing_table-data">8 900 ₽</td>
        </tr>
        <tr>
          <td
            colspan="2"
            class="pricing_table-data pricing_table-data_title pricing_table-data_grey"
          >
            *14 дней бесплатного пробного периода для любого из тарифов
          </td>
          <td class="pricing_table-data"></td>
          <td colspan="2" class="pricing_table-data">
            <button
              @click="() => openPopup('Попробовать бесплатно')"
              class="table-button"
              type="button"
            >
              Начать бесплатный пробный период
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pricing_slider">
      <div class="pricing_slider_arrows">
        <div class="pricing_slider_arrow pricing_slider_arrow_disabled">
          <img
            src="../../../static/img/met-images/pricing_left-arrow.svg"
            alt="check_icon"
          />
        </div>
        <div class="pricing_slider_arrow">
          <img
            src="../../../static/img/met-images/pricing_right-arrow.svg"
            alt="check_icon"
          />
        </div>
      </div>
      <div class="pricing_slider_slides">
        <div class="pricing_slider_slide">
          <p class="pricing_slider_slide-name">Старт</p>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество сотрудников</p>
            <p class="pricing_slider_slide-text">1</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Точки продаж (включено)</p>
            <p class="pricing_slider_slide-text">1</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">
              Подключение интернет-магазина
            </p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Юридические лица</p>
            <p class="pricing_slider_slide-text">1</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Объем хранилища</p>
            <p class="pricing_slider_slide-text">100 мб</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество товаров</p>
            <p class="pricing_slider_slide-text">∞</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Поддержка маркировки</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">CRM система (включена)</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div
            class="pricing_slider_slide-block pricing_slider_slide-block_last"
          >
            <p class="pricing_slider_slide-title">Стоимость в месяц</p>
            <p class="pricing_slider_slide-text">550 ₽</p>
            <p class="pricing_slider_slide-text pricing_slider_slide-text_grey">
              *14 дней бесплатного пробного периода для любого из тарифов
            </p>
            <button
              @click="() => openPopup('Попробовать бесплатно')"
              class="table-button slider-button"
              type="button"
            >
              Начать бесплатный пробный период
            </button>
          </div>
        </div>
        <div class="pricing_slider_slide hidden">
          <p class="pricing_slider_slide-name">Базовый</p>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество сотрудников</p>
            <p class="pricing_slider_slide-text">2</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Точки продаж (включено)</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/cross-icon.svg"
                alt="cross_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">
              Подключение интернет-магазина
            </p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Юридические лица</p>
            <p class="pricing_slider_slide-text">2</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Объем хранилища</p>
            <p class="pricing_slider_slide-text">500 мб</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество товаров</p>
            <p class="pricing_slider_slide-text">∞</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Поддержка маркировки</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">CRM система (включена)</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div
            class="pricing_slider_slide-block pricing_slider_slide-block_last"
          >
            <p class="pricing_slider_slide-title">Стоимость в месяц</p>
            <p class="pricing_slider_slide-text">1 300 ₽</p>
            <p class="pricing_slider_slide-text pricing_slider_slide-text_grey">
              *14 дней бесплатного пробного периода для любого из тарифов
            </p>
            <button
              @click="() => openPopup('Попробовать бесплатно')"
              class="table-button slider-button"
              type="button"
            >
              Начать бесплатный пробный период
            </button>
          </div>
        </div>
        <div class="pricing_slider_slide hidden">
          <p class="pricing_slider_slide-name">Профессиональный</p>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество сотрудников</p>
            <p class="pricing_slider_slide-text">5</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Точки продаж (включено)</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/cross-icon.svg"
                alt="cross_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">
              Подключение интернет-магазина
            </p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Юридические лица</p>
            <p class="pricing_slider_slide-text">10</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Объем хранилища</p>
            <p class="pricing_slider_slide-text">2 000 мб</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество товаров</p>
            <p class="pricing_slider_slide-text">∞</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Поддержка маркировки</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">CRM система (включена)</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div
            class="pricing_slider_slide-block pricing_slider_slide-block_last"
          >
            <p class="pricing_slider_slide-title">Стоимость в месяц</p>
            <p class="pricing_slider_slide-text">3 800 ₽</p>
            <p class="pricing_slider_slide-text pricing_slider_slide-text_grey">
              *14 дней бесплатного пробного периода для любого из тарифов
            </p>
            <button
              @click="() => openPopup('Попробовать бесплатно')"
              class="table-button slider-button"
              type="button"
            >
              Начать бесплатный пробный период
            </button>
          </div>
        </div>
        <div class="pricing_slider_slide hidden">
          <p class="pricing_slider_slide-name">Корпоративный</p>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество сотрудников</p>
            <p class="pricing_slider_slide-text">10</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Точки продаж (включено)</p>
            <p class="pricing_slider_slide-text">5</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">
              Подключение интернет-магазина
            </p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Юридические лица</p>
            <p class="pricing_slider_slide-text">∞</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Объем хранилища</p>
            <p class="pricing_slider_slide-text">10 000 мб</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Количество товаров</p>
            <p class="pricing_slider_slide-text">∞</p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">Поддержка маркировки</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div class="pricing_slider_slide-block">
            <p class="pricing_slider_slide-title">CRM система (включена)</p>
            <p class="pricing_slider_slide-text">
              <img
                src="../../../static/img/met-images/check-icon.svg"
                alt="check_icon"
              />
            </p>
          </div>
          <div
            class="pricing_slider_slide-block pricing_slider_slide-block_last"
          >
            <p class="pricing_slider_slide-title">Стоимость в месяц</p>
            <p class="pricing_slider_slide-text">8 900 ₽</p>
            <p class="pricing_slider_slide-text pricing_slider_slide-text_grey">
              *14 дней бесплатного пробного периода для любого из тарифов
            </p>
            <button
              @click="() => openPopup('Попробовать бесплатно')"
              class="table-button slider-button"
              type="button"
            >
              Начать бесплатный пробный период
            </button>
          </div>
        </div>
      </div>
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
.pricing {
  width: 1200px;
  margin-bottom: 110px;
}
.pricing_title {
  color: #000;
  font-family: "Noto Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 47.6px */
  text-transform: uppercase;
  width: 600px;
  padding-bottom: 40px;
}
.pricing_table {
  border-radius: 20px;
  background: #eaf2fa;
  padding: 39px 15px 12px 41px;
}
.pricing_table-data {
  padding-bottom: 40px;
  text-align: center;
  color: #181818;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  width: 207px;
}
.pricing_table-header {
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  text-transform: uppercase;
  padding-bottom: 37px;
}
.pricing_table-data_title {
  text-align: left;
  color: #000;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
}
.pricing_table-data_grey {
  color: #878787;
  font-family: "Noto Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */
}
.table-button {
  display: flex;
  width: 336px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #64cdff;
  color: var(--white, #fff);
  text-align: center;
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
}
.table-button:hover {
  cursor: pointer;
  opacity: 0.7;
}
.pricing_slider {
  display: none;
}
@media (min-width: 681px) and (max-width: 1280px) {
  .pricing {
    width: 375px;
    margin-bottom: 60px;
    padding: 0 16px;
  }
  .pricing_table {
    display: none;
  }
  .pricing_title {
    font-size: 20px;
    width: 100%;
    padding-bottom: 24px;
  }
  .pricing_slider_slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #eaf2fa;
    padding: 27px 15px 0;
  }
  .pricing_slider_slide-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    gap: 12px;
    padding: 26px 0;
  }

  .pricing_slider_slide-name {
    color: #181818;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 22.1px */
    text-transform: uppercase;
    padding: 10px 0 8px;
    margin: 0;
  }
  .pricing_slider_slide-title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 19.5px */
    margin: 0;
  }
  .pricing_slider_slide-text {
    color: #181818;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 22.1px */
    margin: 0;
  }
  .pricing_slider_slide-text_grey {
    color: #878787;
    font-family: "Noto Sans";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 16.9px */
    padding: 26px 19px 10px 15px;
    text-align: left;
  }
  .pricing_slider_slide-block_last {
    border: none;
  }
  .slider-button {
    display: flex;
    width: 314px;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: var(--white, #fff);
    text-align: center;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .pricing_slider {
    display: flex;
    position: relative;
  }
  .pricing_slider_arrows {
    padding: 0 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 27px;
  }
  .pricing_slider_arrow {
    background: #64cdff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pricing_slider_arrow_disabled {
    background: #c1ebff;
  }
  .hidden {
    display: none;
  }
}
@media (min-width: 320px) and (max-width: 680px) {
  .pricing {
    max-width: 375px;
    width: 100%;
    margin-bottom: 60px;
    padding: 0 16px;
  }
  .pricing_table {
    display: none;
  }
  .pricing_title {
    font-size: 20px;
    width: 100%;
    padding-bottom: 24px;
  }
  .pricing_slider_slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: #eaf2fa;
    padding: 27px 15px 0;
  }
  .pricing_slider_slide-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    width: 100%;
    gap: 12px;
    padding: 26px 0;
  }

  .pricing_slider_slide-name {
    color: #181818;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 22.1px */
    text-transform: uppercase;
    padding: 10px 0 8px;
    margin: 0;
  }
  .pricing_slider_slide-title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 19.5px */
    margin: 0;
    text-align: center;
  }
  .pricing_slider_slide-text {
    color: #181818;
    text-align: center;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 22.1px */
    margin: 0;
  }
  .pricing_slider_slide-text_grey {
    color: #878787;
    font-family: "Noto Sans";
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 16.9px */
    padding: 26px 19px 10px 15px;
    text-align: left;
  }
  .pricing_slider_slide-block_last {
    border: none;
  }
  .slider-button {
    display: flex;
    max-width: 314px;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    color: var(--white, #fff);
    text-align: center;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .pricing_slider {
    display: flex;
    position: relative;
  }
  .pricing_slider_arrows {
    padding: 0 14px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 27px;
  }
  .pricing_slider_arrow {
    background: #64cdff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pricing_slider_arrow_disabled {
    background: #c1ebff;
  }
  .hidden {
    display: none;
  }
}
</style>
