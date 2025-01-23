<template>
  <section class="documentation">
    <h3 class="documentation__title">
      Поможем с расшифровкой<br />
      документации маркетплейсов
    </h3>
    <div class="documentation__cards">
      <div class="documentation__card">
        <img
          class="documentation__card-img"
          src="../../../static/img/page2-images/unoptimized/doc-1-img.jpg"
        />
        <div class="documentation__card-content">
          <div class="documentation__card-text-content">
            <p class="documentation__card-title">
              Расшифровка финансовых отчетов маркетплейсов
            </p>
            <p class="documentation__card-text">
              Услуга включает детализацию платежей и взаиморасчетов между
              продавцом (селером), маркетплейсом и покупателями. Компания
              помогает расшифровать все финансовые отчеты, чтобы обеспечить
              прозрачность и точность в финансовых расчетах.
            </p>
          </div>
          <button
            @click="() => openPopup('Оставить заявку')"
            class="documentation__button"
          >
            оставить заявку
          </button>
        </div>
      </div>
      <div class="documentation__card">
        <img
          class="documentation__card-img"
          src="../../../static/img/page2-images/unoptimized/doc-2-img.jpg"
        />
        <div class="documentation__card-content">
          <div class="documentation__card-text-content">
            <p class="documentation__card-title">
              Расшифровка закрывающих документов
            </p>
            <p class="documentation__card-text">
              Услуга направлена на отражение доходов и расходов на маркетплейсах
              в бухгалтерском и налоговом учете. Осуществляется для различных
              налоговых режимов, таких как ОСНО, УСН и НПД.
            </p>
          </div>

          <button
            @click="() => openPopup('Оставить заявку')"
            class="documentation__button"
          >
            оставить заявку
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
.documentation {
  padding: 0 120px 110px;
}
.documentation__title {
  color: #181818;
  text-align: center;
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.documentation__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.documentation__card {
  display: flex;
  background: #e5f5ff;
  border-radius: 24px;
  padding: 20px 11px;
}
.documentation__card-text-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.documentation__card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}
.documentation__card-title {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 20.8px */
  margin: 0;
}
.documentation__card-text {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
}
.documentation__card-img {
  width: 199px;
  height: 215px;
}
.documentation__button {
  width: 260px;
  height: 46px;

  border-radius: 16px;
  background: #00caf5;
  border: none;
  color: #fff;
  font-family: "Noto Sans";
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;

  cursor: pointer;
}

.documentation__button:hover {
  opacity: 0.85;
  transition: 0.2s;
}
@media (min-width: 681px) and (max-width: 1280px) {
  .documentation {
    max-width: 800px;
    padding: 0 16px 70px;
  }
  .documentation__title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .documentation__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .documentation__card {
    display: flex;
    flex-direction: column;
    background: #e5f5ff;
    border-radius: 24px;
    padding: 13px 21px 24px;
    gap: 20px;

    height: 100%;
  }
  .documentation__card-text-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .documentation__card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
  .documentation__card-title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */
    margin: 0;
  }
  .documentation__card-text {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0;
  }
  .documentation__card-img {
    width: 140px;
    height: 151.507px;
  }
  .documentation__button {
    max-width: 260px;
    width: 100%;
    height: 46px;

    border-radius: 16px;
    background: #00caf5;
    border: none;
    color: #fff;
    font-family: "Noto Sans";
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;

    cursor: pointer;
  }

  .documentation__button:hover {
    opacity: 0.85;
    transition: 0.2s;
  }
}
@media (min-width: 375px) and (max-width: 680px) {
  .documentation {
    max-width: 800px;
    padding: 0 16px 70px;
  }
  .documentation__title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .documentation__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .documentation__card {
    display: flex;
    flex-direction: column;
    background: #e5f5ff;
    border-radius: 24px;
    padding: 13px 21px 24px;
    gap: 20px;

    height: 100%;
  }
  .documentation__card-text-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .documentation__card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
  .documentation__card-title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */
    margin: 0;
  }
  .documentation__card-text {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0;
  }
  .documentation__card-img {
    width: 140px;
    height: 151.507px;
  }
  .documentation__button {
    max-width: 260px;
    width: 100%;
    height: 46px;

    border-radius: 16px;
    background: #00caf5;
    border: none;
    color: #fff;
    font-family: "Noto Sans";
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  .documentation__button:hover {
    opacity: 0.85;
    transition: 0.2s;
  }
}
@media (min-width: 320px) and (max-width: 374px) {
  .documentation {
    max-width: 800px;
    padding: 0 16px 70px;
  }
  .documentation__title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .documentation__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .documentation__card {
    display: flex;
    flex-direction: column;
    background: #e5f5ff;
    border-radius: 24px;
    padding: 13px 21px 24px;
    gap: 20px;
    max-width: 300px;
    height: 100%;
  }
  .documentation__card-text-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .documentation__card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
  .documentation__card-title {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */
    margin: 0;
  }
  .documentation__card-text {
    color: #181818;
    font-family: "Noto Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0;
  }
  .documentation__card-img {
    width: 140px;
    height: 151.507px;
  }
  .documentation__button {
    max-width: 260px;
    width: 100%;
    height: 46px;

    border-radius: 16px;
    background: #00caf5;
    border: none;
    color: #fff;
    font-family: "Noto Sans";
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  .documentation__button:hover {
    opacity: 0.85;
    transition: 0.2s;
  }
}
</style>
