<template>
  <Breadcrumb :content="breadcrumbContent" />

  <section class="main">
    <div class="container">
      <div class="container-md">
        <h1>Оформление заказа</h1>

        <div class="order">
          <div class="order__column">
            <div class="order__block">
              <div class="order__header">
                <div class="order__num">1</div>
                <div class="order__title">Ваши данные</div>
              </div>
              <!-- .order__header -->
              <div class="order__user">
                <div class="order__field">
                  <label class="field">
                    <input
                      type="text"
                      name="name"
                      placeholder="First name"
                      autocomplete="off"
                    />
                  </label>
                </div>
                <div class="order__field">
                  <label class="field">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      autocomplete="off"
                    />
                  </label>
                </div>
                <div class="order__field">
                  <label class="field">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      autocomplete="off"
                    />
                  </label>
                </div>
              </div>
              <!-- .order__data -->
            </div>
            <!-- .order__block -->

            <div class="order__block">
              <div class="order__header">
                <div class="order__num">2</div>
                <div class="order__title">Способ получения</div>
              </div>
              <!-- .order__header -->
              <div class="order__list">
                <div class="order__control">
                  <label class="radio">
                    <input
                      type="radio"
                      name="delivery"
                      class="radio__input"
                      checked
                    />
                    <span class="radio__label">Text</span>
                  </label>
                </div>
                <div class="order__control">
                  <label class="radio">
                    <input type="radio" name="delivery" class="radio__input" />
                    <span class="radio__label">Text</span>
                  </label>
                </div>
                <div class="order__control">
                  <label class="radio">
                    <input type="radio" name="delivery" class="radio__input" />
                    <span class="radio__label">Text</span>
                  </label>
                </div>
              </div>
            </div>
            <!-- .order__block -->

            <div class="order__block">
              <div class="order__header">
                <div class="order__num">3</div>
                <div class="order__title">Оплата</div>
              </div>
              <!-- .order__header -->
              <div class="order__list">
                <div class="order__control">
                  <label class="radio">
                    <input
                      type="radio"
                      name="payment"
                      class="radio__input"
                      checked
                    />
                    <span class="radio__label">Text</span>
                  </label>
                </div>
                <div class="order__control">
                  <label class="radio">
                    <input type="radio" name="payment" class="radio__input" />
                    <span class="radio__label">Text</span>
                  </label>
                </div>
                <div class="order__control">
                  <label class="radio">
                    <input type="radio" name="payment" class="radio__input" />
                    <span class="radio__label">Text</span>
                  </label>
                </div>
              </div>
            </div>
            <!-- .order__block -->
          </div>
          <!-- .order__column -->
          <div class="order__column">
            <div class="order__checkout">
              <div class="order__summary">
                <div class="order-item">
                  <div class="order-item__label">Товары 3 шт.</div>
                  <div class="order-item__value">
                    <span class="color-red">$</span> 590
                  </div>
                </div>
                <div class="order-item">
                  <div class="order-item__label">Доставка</div>
                  <div class="order-item__value">
                    <span class="color-red">$</span> 10
                  </div>
                </div>
                <div class="order-item">
                  <div class="order-item__label">Итого:</div>
                  <div class="order-item__value">
                    <span class="color-red">$</span> 600
                  </div>
                </div>
              </div>
              <div class="order__send">
                <button type="button" class="btn btn-md btn-red">
                  <span>Buy</span>
                </button>
              </div>
            </div>
          </div>
          <!-- .order__column -->
        </div>
        <!-- .order -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const breadcrumbContent = {
  link: "Main",
  span: "Оформление заказа",
};
</script>
<style scoped></style>
