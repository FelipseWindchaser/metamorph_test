<template>
  <section class="presentation" id="presentation">
    <div class="presentation_head-content">
      <h3 class="presentation_title section-title">
        Почему «МойСклад» — идеальное решение для вашего бизнеса?
      </h3>
      <div class="presentation_tag-container">
        <p class="presentation_tag-text">Подходит для любого типа торговли</p>
      </div>
    </div>

    <div class="presentation_container">
      <div class="presentation_row bg_blue">
        <div class="cards-wrapper">
          <div class="presentation_card">
            <div class="presentation_card-wrapper">
              <img
                class="presentation_icon"
                src="../../../static/img/met-images/retail_g1.svg"
                alt="retail_icon"
              />
              <p class="presentation_card-title">Розничная торговля</p>
              <!-- <p class="presentation_card-title_mob">Розничная торговля</p> -->
            </div>
            <div class="presentation_card_text-content">
              <p class="presentation_text">
                Управляйте любым количеством торговых точек в режиме онлайн
              </p>
            </div>
          </div>
          <div class="presentation_card">
            <div class="presentation_card-wrapper">
              <img
                class="presentation_icon"
                src="../../../static/img/met-images/wholesale_g2.svg"
                alt="wholesale-trade_icon"
              />
              <p class="presentation_card-title">Оптовая торговля</p>
              <!-- <p class="presentation_card-title_mob">Оптовая торговля</p> -->
            </div>
            <div class="presentation_card_text-content">
              <p class="presentation_text">
                Контролируйте работу оптовой компании и сети дистрибьюторов
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="presentation_row">
        <div class="cards-wrapper">
          <div class="presentation_card">
            <div class="presentation_card-wrapper">
              <img
                class="presentation_icon"
                src="../../../static/img/met-images/online_g3.svg"
                alt="online-trade_icon"
              />
              <p class="presentation_card-title">Онлайн-торговля</p>
              <!-- <p class="presentation_card-title_mob">Онлайн-торговля</p> -->
            </div>
            <div class="presentation_card_text-content">
              <p class="presentation_text">
                Управляйте заказами, закупками и доставкой курьерами
              </p>
            </div>
          </div>
          <div class="presentation_card">
            <div class="presentation_card-wrapper">
              <img
                class="presentation_icon"
                src="../../../static/img/met-images/production_g4.svg"
                alt="production_icon"
              />
              <p class="presentation_card-title">Производство</p>
              <!-- <p class="presentation_card-title_mob">Производство</p> -->
            </div>
            <div class="presentation_card_text-content">
              <p class="presentation_text">
                Ведите учет производства для малого и среднего бизнеса
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="presentation_row bg_blue">
        <div class="cards-wrapper">
          <div class="presentation_card presentation_card_lm">
            <div class="presentation_card-wrapper">
              <img
                class="presentation_icon"
                src="../../../static/img/met-images/shopping_oog5.svg"
                alt="shopping_icon"
              />
              <p class="presentation_card-title">
                Узнать больше о возможностях «МойСклад»
              </p>
            </div>

            <button
              @click="() => openPopup('Узнать больше')"
              class="learn-more_button"
              type="button"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="presentation_container_mob">
      <div class="presentation_row bg_blue">
        <div class="cards-wrapper">
          <div class="presentation_card">
            <div class="presentation_card-wrapper">
              <img
                class="presentation_icon"
                src="../../../static/img/met-images/retail_g1.svg"
                alt="retail_icon"
              />
              <p class="presentation_card-title">Розничная торговля</p>
              <!-- <p class="presentation_card-title_mob">Розничная торговля</p> -->
            </div>
            <div class="presentation_card_text-content">
              <p class="presentation_text">
                Управляйте любым количеством торговых точек в режиме онлайн
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="presentation_row">
        <div class="presentation_card">
          <div class="presentation_card-wrapper">
            <img
              class="presentation_icon"
              src="../../../static/img/met-images/online_g3.svg"
              alt="online-trade_icon"
            />
            <p class="presentation_card-title">Онлайн-торговля</p>
            <!-- <p class="presentation_card-title_mob">Онлайн-торговля</p> -->
          </div>
          <div class="presentation_card_text-content">
            <p class="presentation_text">
              Управляйте заказами, закупками и доставкой курьерами
            </p>
          </div>
        </div>
      </div>
      <div class="presentation_row bg_blue">
        <div class="presentation_card">
          <div class="presentation_card-wrapper">
            <img
              class="presentation_icon"
              src="../../../static/img/met-images/wholesale_g2.svg"
              alt="wholesale-trade_icon"
            />
            <p class="presentation_card-title">Оптовая торговля</p>
            <!-- <p class="presentation_card-title_mob">Оптовая торговля</p> -->
          </div>
          <div class="presentation_card_text-content">
            <p class="presentation_text">
              Контролируйте работу оптовой компании и сети дистрибьюторов
            </p>
          </div>
        </div>
      </div>
      <div class="presentation_row">
        <div class="presentation_card">
          <div class="presentation_card-wrapper">
            <img
              class="presentation_icon"
              src="../../../static/img/met-images/production_g4.svg"
              alt="production_icon"
            />
            <p class="presentation_card-title">Производство</p>
            <!-- <p class="presentation_card-title_mob">Производство</p> -->
          </div>
          <div class="presentation_card_text-content">
            <p class="presentation_text">
              Ведите учет производства для малого и среднего бизнеса
            </p>
          </div>
        </div>
      </div>
      <div class="presentation_row bg_blue">
        <div class="presentation_card presentation_card_lm">
          <div class="presentation_card-wrapper">
            <img
              class="presentation_icon"
              src="../../../static/img/met-images/shopping_oog5.svg"
              alt="shopping_icon"
            />
            <p class="presentation_card-title">
              Узнать больше о возможностях «МойСклад»
            </p>
          </div>

          <button
            @click="() => openPopup('Узнать больше')"
            class="learn-more_button"
            type="button"
          >
            Узнать больше
          </button>
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
.presentation {
  display: flex;
  width: 100%;
  align-items: center;
  padding: 110px 0;
  /* padding: 100px 120px 110px; */
}
.presentation_title {
  font-size: 34px;
  line-height: 140%; /* 47.6px */
  text-transform: uppercase;
  padding-bottom: 22px;
}
.presentation_head-content {
  max-width: 1200px;
}
.presentation_tag-container {
  border-radius: 50px;
  border: 1.5px solid #64cdff;
  max-width: 404px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 43px;
}
.presentation_tag-text {
  margin: 0;
  color: #64cdff;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.presentation_container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.presentation_row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  /* max-width: 1440px; */
}
.cards-wrapper {
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  width: 100%;
}
.presentation_card-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}
.presentation_card {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  /* max-width: 500px; */
  width: 100%;
  font-size: 18px;
  color: #333;
  gap: 18px;
  padding: 40px 0 25px;
}
.presentation_card-title {
  margin: 0;
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 33.6px */
}
.presentation_text {
  margin: 0;
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 23.4px */
  max-width: 413px;
  width: 100%;
  padding-left: 76px;
}
.presentation_card-title_mob {
  display: none;
}
.presentation_icon {
  width: 60px;
  height: 60px;
}
.presentation_card_lm {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0 30px;
}
.learn-more_button {
  max-width: 336px;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 16px;
  background: #64cdff;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
@media (min-width: 375px) and (max-width: 1280px) {
  .presentation_container {
    display: none;
  }
  .presentation_card {
    padding: 20px 16px 18px;
  }
  .presentation_card_lm {
    flex-direction: column;
  }
  .learn-more_button {
    max-width: 342px;
    height: 50px;
  }
  .presentation_card-wrapper {
    gap: 12px;
  }

  .presentation_card-title {
    margin: 0;
    font-size: 17px;
  }
  .presentation_text {
    margin: 0;
    font-size: 15px;
  }
  .presentation_head-content {
    max-width: 375px;
  }
  .presentation_tag-text {
    font-size: 15px;
  }
  .presentation_tag-container {
    margin: 0 16px 24px;
  }
  .presentation_title {
    font-size: 20px;
    padding-left: 16px;
  }
}
@media (min-width: 320px) and (max-width: 374px) {
  .presentation_container {
    display: none;
  }
  .presentation_card {
    padding: 20px 16px 18px;
  }
  .presentation_card_lm {
    flex-direction: column;
  }
  .learn-more_button {
    max-width: 342px;
    height: 50px;
  }
  .presentation_card-wrapper {
    gap: 12px;
  }

  .presentation_card-title {
    margin: 0;
    font-size: 17px;
  }
  .presentation_text {
    margin: 0;
    font-size: 15px;
  }
  .presentation_head-content {
    max-width: 375px;
  }
  .presentation_tag-text {
    font-size: 13px;
  }
  .presentation_tag-container {
    margin: 0 16px 24px;
  }
  .presentation_title {
    font-size: 20px;
    padding-left: 16px;
  }
}
</style>
