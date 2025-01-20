<template>
  <div class="faq_card" :id="id" @click="() => handleClick(id)">
    <div class="faq_card_text-container">
      <p class="faq_card-question">
        <!-- Какая стоимость за использование фулфилмента на маркетплейсах? -->
        {{ title }}
      </p>
      <p :class="['faq_card-answer', !isOpen && 'hidden-answer']">
        <!-- Стоимость можете уточнить у наших операторов. -->
        {{ content }}
      </p>
    </div>
    <img
      :class="['faq_card-icon', isOpen && 'rotated-icon']"
      src="../../static/img/met-images/faq-plus.svg"
      alt="plus-icon"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  content: string;
  handleClick: (id: string) => void;
  isOpen: boolean;
}>();
</script>
<style scoped>
.faq_card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #d9d9d9;
  padding: 18px 0;
}
.rotated-icon {
  transform: rotate(45deg);
}

.faq_card_text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.faq_card-question {
  color: var(--main, #181818);
  font-family: "Noto Sans";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}
.faq_card-answer {
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
@media (min-width: 320px) and (max-width: 680px) {
  .faq_card {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: flex-start;
    border-bottom: 1px solid #d9d9d9;
    padding: 18px 0;
  }

  .rotated-icon {
    transform: rotate(45deg);
  }

  .faq_card_text-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .faq_card-question {
    font-size: 17px;
  }
  .faq_card-answer {
    color: var(--main, #181818);
    font-family: "Noto Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
}
</style>
