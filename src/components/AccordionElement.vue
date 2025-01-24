<template>
  <div class="accordion_card" :id="id" @click="() => handleClick(id)">
    <div
      :class="[
        'accordion_card-wrapper',
        secondPage && 'accordion_card_border-none',
      ]"
    >
      <div class="accordion_card_text-container">
        <p class="accordion_card-question">
          <!-- Какая стоимость за использование фулфилмента на маркетплейсах? -->
          {{ title }}
        </p>
        <p :class="['accordion_card-answer', !isOpen && 'hidden-answer']">
          <!-- Стоимость можете уточнить у наших операторов. -->
          {{ content }}
        </p>
      </div>
      <img
        :class="['accordion_card-icon', isOpen && 'rotated-icon']"
        src="../../static/img/met-images/plus_var-2.svg"
        alt="plus-icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  content: string;
  handleClick: (id: string) => void;
  isOpen: boolean;
  secondPage?: boolean;
}>();
</script>
<style scoped>
.accordion_card {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  width: 100%;
}
.accordion_card-wrapper {
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  padding: 18px 10px;
}
.rotated-icon {
  transform: rotate(45deg);
}

.accordion_card_text-container {
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  gap: 10px;
}
.accordion_card-question {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}
.accordion_card-answer {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.hidden-answer {
  display: none;
}
.accordion_card_border-none {
  border: none;
}
@media (min-width: 320px) and (max-width: 680px) {
  .accordion_card {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: flex-start;

    padding: 0 16px;
  }

  .rotated-icon {
    transform: rotate(45deg);
  }

  .accordion_card_text-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .accordion_card-question {
    font-size: 17px;
  }
  .accordion_card-answer {
    color: var(--main, #181818);
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  .accordion_card_border-none {
    border: none;
  }
  .accordion_card-wrapper {
    padding: 18px 5px;
  }
}
</style>
