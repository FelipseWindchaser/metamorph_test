<template>
  <section class="capabilities">
    <h3 class="capabilities_title">что вы получите с внедрением «МойСклад»</h3>
    <div class="capabilities_cards">
      <div class="capabilities_cards-container capabilities_cards-container_pc">
        <div class="capabilities_card capabilities_card-1">
          <p class="capabilities_card-title">Товароучетная система</p>
          <p class="capabilities_card-text">
            Управление товарами и ценами, планирование закупок, контроль
            остатков, резервов, инвентаризация
          </p>
        </div>
        <div class="capabilities_card capabilities_card-2">
          <p class="capabilities_card-title">Печать документов</p>
          <p
            class="capabilities_card-text capabilities_card-text-with-image capabilities_card-text-with-image_g2"
          >
            Этикетки, счета, товарные чеки, накладные, счета-фактуры и
            собственные шаблоны документов
          </p>
          <img
            class="capabilities_card-image_g2"
            src="../../../static/img/met-images/document-icon_g2.svg"
            alt="document_icon"
          />
        </div>
      </div>

      <div class="capabilities_cards-container capabilities_cards-container_pc">
        <div class="capabilities_card capabilities_card-3">
          <p class="capabilities_card-title">Выгрузка товаров на сайт</p>
          <p class="capabilities_card-text">
            Создание магазинов в Instagram, VK и на Opencart с выгрузкой товаров
            и изображений
          </p>
        </div>
        <div class="capabilities_card capabilities_card-4">
          <p class="capabilities_card-title">Оцифровка бизнеса</p>
          <p class="capabilities_card-text capabilities_card-text-with-image">
            Видите реальную прибыль, популярность товаров, прибыль по каждому
            сотруднику и многое другое
          </p>
          <img
            class="capabilities_card-image_g4"
            src="../../../static/img/met-images/circle-icon_g4.svg"
            alt="circle_icon"
          />
        </div>
        <div class="capabilities_card capabilities_card-5">
          <p class="capabilities_card-title">Интеграция с сервисами</p>
          <p class="capabilities_card-text">
            Более 100 готовых интеграций: CMS, CRM, рассылки, аналитика, банки,
            службы доставки
          </p>
        </div>
      </div>
      <div class="capabilities_cards-container capabilities_cards-container_pc">
        <div class="capabilities_card capabilities_card-6">
          <p class="capabilities_card-title">Порядок в бизнесе</p>
          <p class="capabilities_card-text capabilities_card-text-with-image">
            История покупок, сегментация клиентов, бонусные программы,
            статистика продаж, телефония и рассылки
          </p>
          <img
            class="capabilities_card-image_g6"
            src="../../../static/img/met-images/goal-icon_g6.svg"
            alt="goal_icon"
          />
        </div>
        <div class="capabilities_card capabilities_card-7">
          <p class="capabilities_card-title">
            Запросить демонстрацию возможностей
          </p>
          <button class="capabilities_card-button">Запросить</button>
        </div>
      </div>
      <div
        class="capabilities_cards-container capabilities_cards-container_mob"
      >
        <div class="capabilities_card capabilities_card-1">
          <p class="capabilities_card-title">Товароучетная система</p>
          <p class="capabilities_card-text">
            Управление товарами и ценами, планирование закупок, контроль
            остатков, резервов, инвентаризация
          </p>
        </div>
        <div class="capabilities_card capabilities_card-4">
          <p class="capabilities_card-title">Оцифровка бизнеса</p>
          <p class="capabilities_card-text capabilities_card-text-with-image">
            Видите реальную прибыль, популярность товаров, прибыль по каждому
            сотруднику и многое другое
          </p>
          <img
            class="capabilities_card-image_g4"
            src="../../../static/img/met-images/circle-icon_g4.svg"
            alt="circle_icon"
          />
        </div>
        <div class="capabilities_card capabilities_card-5">
          <p class="capabilities_card-title">Интеграция с сервисами</p>
          <p class="capabilities_card-text">
            Более 100 готовых интеграций: CMS, CRM, рассылки, аналитика, банки,
            службы доставки
          </p>
        </div>
      </div>
      <div
        class="capabilities_cards-container capabilities_cards-container_mob"
      >
        <div class="capabilities_card capabilities_card-2">
          <p class="capabilities_card-title">Печать документов</p>
          <p
            class="capabilities_card-text capabilities_card-text-with-image capabilities_card-text-with-image_g2"
          >
            Этикетки, счета, товарные чеки, накладные, счета-фактуры и
            собственные шаблоны документов
          </p>
          <img
            class="capabilities_card-image_g2"
            src="../../../static/img/met-images/document-icon_g2.svg"
            alt="document_icon"
          />
        </div>
        <div class="capabilities_card capabilities_card-3">
          <p class="capabilities_card-title">Выгрузка товаров на сайт</p>
          <p class="capabilities_card-text">
            Создание магазинов в Instagram, VK и на Opencart с выгрузкой товаров
            и изображений
          </p>
        </div>
        <div class="capabilities_card capabilities_card-6">
          <p class="capabilities_card-title">Порядок в бизнесе</p>
          <p class="capabilities_card-text capabilities_card-text-with-image">
            История покупок, сегментация клиентов, бонусные программы,
            статистика продаж, телефония и рассылки
          </p>
          <img
            class="capabilities_card-image_g6"
            src="../../../static/img/met-images/goal-icon_g6.svg"
            alt="goal_icon"
          />
        </div>
      </div>
    </div>
    <div class="capabilities_card capabilities_card-7 capabilities_card-7_mob">
      <p class="capabilities_card-title capabilities_card-title_mob">
        Запросить демонстрацию возможностей
      </p>
      <button class="capabilities_card-button">Запросить</button>
    </div>
  </section>
</template>
<style scoped>
/* 1200px */
.capabilities {
  width: 1200px;
  padding-bottom: 110px;
}
.capabilities_title {
  color: #000;
  font-family: "Noto Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 47.6px */
  text-transform: uppercase;
  margin-bottom: 40px;
  width: 704px;
}
.capabilities_cards {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.capabilities_card {
  border-radius: 20px;
  background: #eaf2fa;
  padding: 22px 25px 0 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}
.capabilities_cards-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.capabilities_cards-container_mob {
  display: none;
}
.capabilities_card-1 {
  width: 387px;
  height: 221px;
  flex-shrink: 0;
}
.capabilities_card-2 {
  width: 387px;
  height: 450px;
  flex-shrink: 0;
}
.capabilities_card-3 {
  width: 387px;
  height: 188px;
  flex-shrink: 0;
}
.capabilities_card-4 {
  width: 387px;
  height: 275px;
  flex-shrink: 0;
}
.capabilities_card-5 {
  width: 387px;
  height: 188px;
  flex-shrink: 0;
}
.capabilities_card-6 {
  width: 387px;
  height: 416px;
  flex-shrink: 0;
}
.capabilities_card-7 {
  width: 387px;
  height: 255px;
  flex-shrink: 0;
}
.capabilities_card-title {
  color: #181818;
  font-family: "Noto Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
  margin: 0;
  width: 250px;
}
.capabilities_card-text {
  color: #000;
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
  z-index: 10;
}
.capabilities_card-text-with-image {
  width: 200px;
}
.capabilities_card-text-with-image_g2 {
  width: 240px;
}
.capabilities_card-button {
  display: flex;
  width: 218px;
  height: 46px;
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
  margin-top: 30px;
}
.capabilities_card-image_g2 {
  width: 170px;
  height: 170px;
  position: absolute;
  bottom: 28px;
  right: 25px;
  z-index: 0;
}
.capabilities_card-image_g4 {
  width: 132px;
  height: 132px;
  position: absolute;
  bottom: 25px;
  right: 12px;
}
.capabilities_card-image_g6 {
  width: 171.412px;
  height: 171.412px;
  position: absolute;
  bottom: 8px;
  right: 12px;
}
.capabilities_card-7_mob {
  display: none;
}
@media (min-width: 375px) and (max-width: 680px) {
  .capabilities_cards {
    gap: 10px;
  }

  .capabilities_cards-container {
    gap: 12px;
  }
  .capabilities_card {
    padding: 18px 13px 0 18px;
  }
  .capabilities_card-title {
    font-size: 17px;
    width: 100%;
  }
  .capabilities_card-title_mob {
    font-size: 20px;
    width: 100%;
  }
  .capabilities_card-text {
    font-size: 15px;
    width: 100%;
  }
  .capabilities_cards-container_pc {
    display: none;
  }
  .capabilities_cards-container_mob {
    display: flex;
  }
  .capabilities_card-7_mob {
    display: flex;
    margin-top: 12px;
    padding: 22px 19px 25px 15px;
    justify-content: space-between;
  }
  .capabilities {
    width: 375px;
    padding: 0 16px 60px;
  }
  .capabilities_title {
    font-size: 20px;
    width: 100%;
    margin-bottom: 24px;
  }
  .capabilities_card-1 {
    width: 167px;
    height: 246px;
    flex-shrink: 0;
  }
  .capabilities_card-2 {
    width: 166px;
    height: 291px;
    flex-shrink: 0;
  }
  .capabilities_card-3 {
    width: 166px;
    height: 246px;
    flex-shrink: 0;
  }
  .capabilities_card-4 {
    width: 167px;
    height: 407px;
    flex-shrink: 0;
  }
  .capabilities_card-5 {
    width: 167px;
    height: 208px;
    flex-shrink: 0;
  }
  .capabilities_card-6 {
    width: 166px;
    height: 324px;
    flex-shrink: 0;
  }
  .capabilities_card-7 {
    width: 343px;
    height: 170px;
    flex-shrink: 0;
  }
  .capabilities_card-image_g2 {
    width: 67px;
    height: 67px;
    position: absolute;
    bottom: 5px;
    right: 17px;
    z-index: 0;
  }
  .capabilities_card-image_g4 {
    width: 110px;
    height: 110px;
    position: absolute;
    bottom: 26px;
    right: 19px;
  }
  .capabilities_card-image_g6 {
    width: 61px;
    height: 61px;
    position: absolute;
    bottom: 8px;
    right: 22px;
  }
  .capabilities_card-button {
    width: 314px;
    height: 50px;
    margin: 0;
  }
}
</style>
