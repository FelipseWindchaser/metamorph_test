<template>
  <section class="fulfillment-advantages" id="fulfillment-advantages">
    <h3 class="fulfillment-advantages_title">
      Преимущества фулфилмента от Metamorph
    </h3>
    <div class="fulfillment-advantages_cards">
      <div class="fulfillment-advantages_card">
        <p class="fulfillment-advantages_card-title">
          Сокращение расходов и издержек
        </p>
        <p class="fulfillment-advantages_card-description">
          Снижение денежных и временных издержек за счёт автоматизированного
          операционного процесса поставки товаров на маркетплейсы
        </p>
        <p class="fulfillment-advantages_card-number">1</p>
      </div>
      <div class="fulfillment-advantages_card">
        <p class="fulfillment-advantages_card-title">
          Индивидуальная поддержка клиентов
        </p>
        <p class="fulfillment-advantages_card-description">
          Индивидуальная помощь каждому клиенту на всех этапах взаимодействия:
          от регистрации на маркетплейсах до выбора склада для поставки товара
        </p>
        <p class="fulfillment-advantages_card-number">2</p>
      </div>
      <div class="fulfillment-advantages_card">
        <p class="fulfillment-advantages_card-title">
          Гарантия сохранности товаров
        </p>
        <p class="fulfillment-advantages_card-description">
          Собственные склады Metamorph оснащены всем необходимым оборудованием
          для обеспечения сохранности и качества товара. Надёжная защита
          интересов клиента договором ответственного хранения
        </p>
        <p class="fulfillment-advantages_card-number">3</p>
      </div>
      <div class="fulfillment-advantages_card">
        <p class="fulfillment-advantages_card-title">Аналитика и мониторинг</p>
        <p class="fulfillment-advantages_card-description">
          Metamorph проводит анализ продаж, позиций карточки товара и
          эффективности продвижения
        </p>
        <p class="fulfillment-advantages_card-number">4</p>
      </div>
      <div class="fulfillment-advantages_card">
        <p class="fulfillment-advantages_card-title">Автоматизация процесса</p>
        <p class="fulfillment-advantages_card-description">
          Metamorph полностью осуществляет контроль всех этапов поставки товара
          на маркетплейсы, регулярно проводит мониторинг изменений требований
          маркетплейсов и законодательных нововведений
        </p>
        <p class="fulfillment-advantages_card-number">5</p>
      </div>
      <div class="fulfillment-advantages_card">
        <p class="fulfillment-advantages_card-title">Фиксированные цены</p>
        <p class="fulfillment-advantages_card-description">
          Прайсы с фиксированными ценами на все услуги, прозрачная тарификация
          по всем видам работ и бесплатный предварительный расчёт стоимости
        </p>
        <p class="fulfillment-advantages_card-number">6</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.fulfillment-advantages {
  padding: 110px 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  gap: 40px;
}
.fulfillment-advantages_title {
  /* padding-left: 120px; */
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
}
.fulfillment-advantages_cards {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 20px;
  /* margin: 0 auto; */
}
.fulfillment-advantages_card {
  background-color: #eaf2fa;
  /* width: 387px; */
  width: 100%;
  height: 298px;
  padding: 25px;
  font-size: 18px;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  z-index: 10;
}
.fulfillment-advantages_card-title {
  margin: 0;
  max-width: 300px;
  width: 100%;
  padding-bottom: 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.fulfillment-advantages_card-description {
  margin: 0;
  width: 300px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
}
.fulfillment-advantages_card-number {
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: Audiowide;
  font-size: 200px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%; /* 160px */
  position: absolute;
  bottom: 10px;
  right: 10px;
  pointer-events: none;
  z-index: -1;
}
@media (min-width: 731px) and (max-width: 1280px) {
  .fulfillment-advantages {
    padding: 70px 16px;
    max-width: 1000px;
    display: flex;
    gap: 24px;
  }
  .fulfillment-advantages_cards {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 20px;
  }
  .fulfillment-advantages_title {
    padding-left: 0;
    font-size: 24px;
  }
  .fulfillment-advantages_card {
    width: 100%;
    height: 208px;
    padding: 18px 18px 0 18px;
    font-size: 15px;
  }
  .fulfillment-advantages_card-title {
    width: 100%;
    padding-bottom: 10px;
    font-size: 17px;
  }
  .fulfillment-advantages_card-description {
    width: 100%;
    font-size: 15px;
  }
  .fulfillment-advantages_card-number {
    font-size: 100px;
    bottom: 20px;
    right: 11px;
  }
}
@media (min-width: 320px) and (max-width: 730px) {
  .fulfillment-advantages {
    padding: 70px 16px;
    max-width: 500px;
    width: 100%;
    display: flex;
    gap: 24px;
  }
  .fulfillment-advantages_cards {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 0 auto;
  }
  .fulfillment-advantages_title {
    padding-left: 0;
    font-size: 24px;
  }
  .fulfillment-advantages_card {
    width: 100%;
    height: 208px;
    padding: 18px 18px 0 18px;
    font-size: 15px;
  }
  .fulfillment-advantages_card-title {
    width: 100%;
    padding-bottom: 10px;
    font-size: 17px;
  }
  .fulfillment-advantages_card-description {
    width: 100%;
    font-size: 15px;
  }
  .fulfillment-advantages_card-number {
    font-size: 100px;
    bottom: 46px;
    right: 11px;
  }
}
</style>
