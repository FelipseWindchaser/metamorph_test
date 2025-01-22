<template>
  <section class="advantages">
    <h3 class="advantages__title">наши преимущества</h3>
    <div class="advantages__card-list">
      <div class="advantages__card">
        <img
          class="advantages__icon"
          src="../../../static/img/page2-images/advantage/check.svg"
        />
        <div class="advantages__textbox">
          <p class="advantages__card-title">Прозрачность и отчетность</p>
          <p class="advantages__card-text">
            Компания ценит честные и взаимовыгодные отношения с клиентами. При
            сотрудничестве заключается договор с четко прописанными
            обязательствами и ответственностью. Также предоставляется регулярная
            отчетность о проделанной работе и достигнутых результатах.
          </p>
        </div>
      </div>

      <div class="advantages__card">
        <img
          class="advantages__icon"
          src="../../../static/img/page2-images/advantage/check.svg"
        />
        <div class="advantages__textbox">
          <p class="advantages__card-title">Комплексный подход</p>
          <p class="advantages__card-text">
            Команда профессионалов (SEO-специалисты, дизайнеры, арт-директора,
            контент-менеджеры и аккаунт-менеджеры) объединяет свои знания и опыт
            для предоставления полного комплекса услуг по продвижению и
            сопровождению на маркетплейсах.
          </p>
        </div>
      </div>

      <div class="advantages__card">
        <img
          class="advantages__icon"
          src="../../../static/img/page2-images/advantage/check.svg"
        />
        <div class="advantages__textbox">
          <p class="advantages__card-title">Опыт и профессионализм</p>
          <p class="advantages__card-text">
            Компания обладает богатым опытом работы на маркетплейсах. Открыто
            более 500 магазинов и признание ведущих платформ. В 2021 году была
            награждена престижной премией от OZON Seller, что подтверждает
            экспертизу и профессионализм.
          </p>
        </div>
      </div>

      <div class="advantages__card">
        <img
          class="advantages__icon"
          src="../../../static/img/page2-images/advantage/check.svg"
        />
        <div class="advantages__textbox">
          <p class="advantages__card-title">Быстрый результат</p>
          <p class="advantages__card-text">
            Компания стремится к достижению конкретных результатов в кратчайшие
            сроки. Клиенты могут ожидать роста продаж уже через 7 дней с момента
            начала сотрудничества благодаря эффективным стратегиям и опыту
            работы команды.
          </p>
        </div>
      </div>
    </div>
    <div class="advantages__quote">
      <img
        class="advantages__quote-image"
        src="../../../static/img/page2-images/advantage/advantage-quote.jpg"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.advantages {
  padding: 110px 120px;
}

.advantages__title {
  color: #181818;
  text-align: center;
  font-family: Jost;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 53.2px */
  text-transform: uppercase;
}

.advantages__card-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 62px;
}

.advantages__card {
  min-width: 343px;
  border-radius: 24px;
  background: linear-gradient(
    to right,
    #529cd0,
    #6b59cb,
    #b736c8,
    #c93dc5,
    #d187c1
  );
  display: inline-flex;
}

.advantages__icon {
  margin: 19px 10px 0px 16px;
  width: 44px;
  height: 44px;
}

.advantages__textbox {
  color: #fff;
  font-family: "Noto Sans";
  font-style: normal;
  line-height: 130%;
  padding: 29px 0 31px;
}

.advantages__card-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
}

.advantages__card-text {
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  width: 90%;
}

.advantages__quote {
  padding: 30px 0 0;
  display: flex;
  justify-content: center;
}

.advantages__quote-image {
  width: 60%;
}
@media (min-width: 320px) and (max-width: 680px) {
  .advantages {
    padding: 70px 16px;
  }

  .advantages__title {
    font-size: 24px;
  }

  .advantages__card-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding-top: 24px;
  }

  .advantages__card {
    min-width: 343px;
    width: 100%;
    border-radius: 24px;
    background: linear-gradient(
      to right,
      #529cd0,
      #6b59cb,
      #b736c8,
      #c93dc5,
      #d187c1
    );
    display: inline-flex;
    flex-direction: column;
    padding: 17px 16px 25px;
  }

  .advantages__icon {
    margin: 0;
    width: 50px;
    height: 50px;
  }

  .advantages__textbox {
    padding: 12px 0 0;
  }

  .advantages__card-title {
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 10px;
  }

  .advantages__card-text {
    font-size: 15px;
    font-weight: 400;
    margin: 0;
    width: 90%;
  }

  .advantages__quote {
    padding: 24px 0 0;
    display: flex;
    justify-content: center;
  }

  .advantages__quote-image {
    width: 100%;
  }
}
</style>
