<template>
  <section class="maintenance" id="maintenance">
    <h3 class="maintenance__title">начальные этапы сопровождения</h3>
    <div class="maintenance__content">
      <div class="maintenance__cards">
        <div class="maintenance__card">
          <img
            class="maintenance__icon"
            src="../../../static/img/page2-images/maintenance/business.svg"
          />
          <div class="maintenance__textblock">
            <p class="maintenance__card-title">Консультация и аналитика</p>
            <p class="maintenance__card-text">
              Первоначальный этап включает проведение детальной встречи для
              определения целей и потребностей клиента. На этом этапе происходит
              изучение ассортимента и конкурентов клиента. Если у клиента нет
              магазина, команда помогает определиться с типом и форматом работы.
            </p>
          </div>
        </div>

        <div class="maintenance__card">
          <img
            class="maintenance__icon"
            src="../../../static/img/page2-images/maintenance/chart.svg"
          />
          <div class="maintenance__textblock">
            <p class="maintenance__card-title">Разработка стратегии</p>
            <p class="maintenance__card-text">
              На основе собранного анализа разрабатывается индивидуальный план
              продвижения для существующего или нового магазина на маркетплейсе.
              Определяются приоритетные задачи и разрабатываются оптимальные
              решения для достижения целей.
            </p>
          </div>
        </div>

        <div class="maintenance__card">
          <img
            class="maintenance__icon"
            src="../../../static/img/page2-images/maintenance/document-chart-hand.svg"
          />
          <div class="maintenance__textblock">
            <p class="maintenance__card-title">Реализация и сопровождение</p>
            <p class="maintenance__card-text">
              Включает внедрение разработанной стратегии с необходимыми
              изменениями и оптимизацией. Если требуется, предоставляется
              консультационная поддержка на протяжении всего периода
              сотрудничества.
            </p>
          </div>
        </div>
      </div>

      <img
        class="maintenance__img"
        src="../../../static/img/page2-images/maintenance/phone.png"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.maintenance {
  background-color: #e5f5ff;
  color: #181818;
  font-style: normal;
  font-family: "Noto Sans";
  padding: 59px 120px 40px;
}

.maintenance__title {
  text-align: center;
  font-family: Jost;
  font-size: 38px;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
  margin-bottom: 40px;
}

.maintenance__content {
  display: grid;
  grid-template-columns: 6fr 4fr;
}

.maintenance__img {
  height: auto;
  width: 100%;
}

.maintenance__cards {
  display: flex;
  flex-direction: column;
  gap: 29px;
}

.maintenance__card {
  display: inline-flex;
  gap: 21px;
}

.maintenance__icon {
  width: 80px;
  height: 80px;
}

.maintenance__textblock {
  display: flex;
  gap: 10px;
  flex-direction: column;
  line-height: 130%;
}

.maintenance__card-title {
  font-size: 18px;
  font-weight: 700;
  margin: 25px 0 0;
}

.maintenance__card-text {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
}
@media (min-width: 320px) and (max-width: 680px) {
  .maintenance {
    background-color: #e5f5ff;
    color: #181818;
    font-style: normal;
    font-family: "Noto Sans";
    padding: 36px 16px 40px;
  }

  .maintenance__title {
    text-align: center;
    font-family: Jost;
    font-size: 24px;
    font-weight: 700;
    line-height: 140%; /* 53.2px */
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .maintenance__content {
    display: grid;
    grid-template-columns: 1fr;
  }

  .maintenance__img {
    height: auto;
    width: 100%;
  }

  .maintenance__cards {
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-bottom: 18px;
  }

  .maintenance__card {
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
  }

  .maintenance__icon {
    width: 50px;
    height: 50px;
  }

  .maintenance__textblock {
    display: flex;
    gap: 10px;
    flex-direction: column;
    line-height: 130%;
  }

  .maintenance__card-title {
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 0;
  }

  .maintenance__card-text {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
  }
}
</style>
