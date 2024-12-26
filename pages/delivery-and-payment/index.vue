<template>
  <Heading :content="headingContent" />
  <!-- .heading -->
  <Intro :content="introContent" list />
  <!-- <div class="intro">
    <div class="intro__main">
      <div class="container">
        <div class="intro__header">
          <div class="intro__title">
            {{ introContent.title }}
          </div>
          <div class="intro__lead">
            {{ introContent.lead }}
          </div>
        </div>
        <div class="intro__content intro__content--two">
          <div class="intro__item">
            <div class="intro__text">
              {{ introContent.text }}
            </div>
          </div>
          <div class="intro__item">
            <div class="intro__text">
              {{ introContent.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="intro__media">
      <img src="@img/intro_image2.jpg" class="img-cover" alt="" />
    </div>
  </div> -->

  <div class="section section--top">
    <Faq :section="faqSectionContent" :faqContents="faqContent" />
    <!-- <div class="container">
      <div class="section__tag">Luxurious</div>
      <div class="section__header">
        <h2 class="section__title">FAQ</h2>
      </div>
      <div class="section__body">
        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>


        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>

        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>

        <div class="faq" data-spoiler>
          <div class="faq__header" data-spoiler-control>
            <div class="faq__title">
              Personalize Your Home with Customization Options
            </div>
            <div class="faq__control"></div>
          </div>
          <div class="faq__content" data-spoiler-content>
            <div class="faq__wrap">
              <p>
                Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <div class="section section--sm pb-0">
    <div class="container">
      <div class="section__tag">{{ introSectionContent.tag }}</div>
      <div class="section__header section__header--sm">
        <h2 class="section__title">{{ introSectionContent.title }}</h2>
      </div>
      <div class="section-intro">
        <div class="section-intro__text">
          {{ introSectionContent.text }}
        </div>
        <div class="section-intro__content">
          <div class="contacts">
            <div class="contacts__item">
              <div class="contacts__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#phone"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
              <div class="contacts__content">
                <div class="contacts__label">{{ phoneContent.label }}</div>
                <div class="contacts__value">
                  <a href="tel:+79112343434">{{ phoneContent.value }}</a>
                </div>
              </div>
            </div>
            <!-- .contacts__item -->
            <div class="contacts__item">
              <div class="contacts__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#email"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
              <div class="contacts__content">
                <div class="contacts__label">{{ mailContent.label }}</div>
                <div class="contacts__value">
                  <a href="mailto:mail@mail.ru">{{ mailContent.value }}</a>
                </div>
              </div>
            </div>
            <!-- .contacts__item -->
            <div class="contacts__item">
              <div class="contacts__icon">
                <svg
                  class="ico-svg"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use
                    xlink:href="@img/sprites/sprite.svg#globe"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  ></use>
                </svg>
              </div>
              <div class="contacts__content">
                <div class="contacts__label">{{ officeContent.label }}</div>
                <div class="contacts__value">
                  {{ officeContent.value }}
                </div>
              </div>
            </div>
            <!-- .contacts__item -->
          </div>
          <!-- .contacts -->
        </div>
      </div>
    </div>
  </div>

  <div class="section-map">
    <div class="section-map__image">
      <img src="@img/content/map.jpg" class="img-cover" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const headingContent = {
  title: `Shipping \nand payments`,
  text: `Atvel's website offers a seamless shopping experience with easy
          navigation, ensuring that you can find and purchase your desired home
          goods hassle-free. Our user-friendly interface is designed to make
          your shopping journey enjoyable and efficient.`,
};
const introContent = {
  title: "Experience a Friendly Interface for Effortless",
  lead: `Atvel's website offers a seamless shopping experience with easy
            navigation, ensuring that you can find and purchase your desired
            home goods hassle-free. Our user-friendly interface is designed to
            make your shopping journey enjoyable and efficient.`,
  text: `Atvel's website offers a seamless shopping experience with easy
              navigation, ensuring that you can find and purchase your desired
              home goods hassle-free.`,
};
const faqSectionContent = {
  tag: "Luxurious",
  title: "FAQ",
};
const faqContent = [
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
  {
    title: "Personalize Your Home with Customization Options",
    text: `Join our community of home enthusiasts and stay connected
                through our blog posts, how-to guides, and lifestyle articles.
                Get inspired and share your own experiences with Atvel home
                goods.`,
  },
];

const introSectionContent = {
  tag: "Convenient",
  title: "Get in touch",
  text: `Travel offers a wide range of home goods that can be personalized to
          match your unique taste. Choose from personalized designs.`,
};
const phoneContent = {
  label: "Phone",
  value: "+7 (911) 234-34-34",
};
const mailContent = {
  label: "Mail",
  value: "mail@mail.ru",
};
const officeContent = {
  label: "Office",
  value: "123, Main St. Sydney NSW 2000, Australia",
};
</script>

<style scoped></style>
