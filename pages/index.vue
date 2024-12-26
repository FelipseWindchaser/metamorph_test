<template>
  <Main :content="content" :products="products" />
</template>

<script setup lang="ts">
import { useApi } from "../src/composables/useApi";
import { useLocale } from "../src/composables/useLocale";

const { find } = useStrapi();

const locale = useLocale();

const content = ref(null);

const products = ref<any[]>([]);

const query = `?populate=*`;

const getContent = async () => {
  const { data: data, error } = await useApi<any>(`/main-page${query}`);

  if (data.value) {
    content.value = data.value.data.attributes;

    console.log(data.value.data.attributes);
  }

  if (error.value) {
    console.log(error);
  }
};

const getProduct = async () => {
  const data = await find("products", {
    populate: "*",
    locale: locale.value,
  })
    // @ts-ignore
    .then((x) => x.data)
    .catch((error) => console.log(error));

  if (data) {
    console.log(data);

    products.value = data;
  }
};

await getContent();
getProduct();

watch(locale, async () => {
  await getContent();
  getProduct();
});
</script>

<style scoped></style>
