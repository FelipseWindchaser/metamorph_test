/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import Swiper from "swiper";
import { Navigation, Pagination, Thumbs, Autoplay } from "swiper/modules";

export default () => {
  initSliders();

  function initSliders() {
    // Перечень слайдеров
    if (document.querySelector("[data-swiper]")) {
      new Swiper("[data-swiper]", {
        // Подключаем модули слайдера
        // для конкретного случая
        //modules: [Navigation, Pagination],
        /*
              effect: 'fade',
              autoplay: {
                  delay: 3000,
                  disableOnInteraction: false,
              },
              */
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        //simulateTouch: false,
        //loop: true,
        //preloadImages: false,
        //lazy: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Arrows
        navigation: {
          nextEl: ".swiper__more .swiper__more--next",
          prevEl: ".swiper__more .swiper__more--prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-primary]")) {
      new Swiper("[data-primary]", {
        modules: [Pagination, Autoplay],
        observer: true,
        loop: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: "[data-primary-pagination]",
          clickable: true,
        },
        on: {},
      });
    }

    if (document.querySelector("[data-showcase-one]")) {
      new Swiper("[data-showcase-one]", {
        modules: [Autoplay],
        observer: true,
        loop: true,
        initialSlide: 3,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 10000,
        autoplay: {
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
        },
        on: {},
      });
    }

    if (document.querySelector("[data-showcase-two]")) {
      new Swiper("[data-showcase-two]", {
        modules: [Autoplay],
        observer: true,
        loop: true,
        initialSlide: 3,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 10000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        on: {},
      });
    }

    if (document.querySelector("[data-hint]")) {
      new Swiper("[data-hint]", {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 500,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-gallery]")) {
      const productThumbs = new Swiper("[data-thumbs]", {
        modules: [Navigation, Pagination],
        spaceBetween: 5,
        slidesPerView: "auto",
        freeMode: true,
        observer: true,
        observeParents: true,
        direction: "horizontal",
        watchSlidesProgress: true,
        navigation: {
          nextEl: "[data-gallery-next]",
          prevEl: "[data-gallery-prev]",
        },
        breakpoints: {
          1250: {
            spaceBetween: 10,
            direction: "horizontal",
          },
          1400: {
            spaceBetween: 16,
            direction: "vertical",
          },
        },
      });

      const productGallery = new Swiper("[data-gallery]", {
        modules: [Navigation, Pagination],
        spaceBetween: 20,
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        on: {
          slideChange: function (event) {
            let num = event.realIndex + 1;
            console.log(num);
            document.querySelectorAll("[data-thumb]").forEach((elem) => {
              elem.classList.remove("active");
            });
            document
              .querySelector(`[data-thumb="${num}"]`)
              .classList.add("active");
          },
        },
      });

      document.addEventListener("click", (event) => {
        if (event.target.closest("[data-thumb]")) {
          let slide =
            parseInt(event.target.closest("[data-thumb]").dataset.thumb) - 1;
          console.log(slide);
          productGallery.slideTo(slide, 600);
          document.querySelectorAll("[data-thumb]").forEach((elem) => {
            elem.classList.remove("active");
            event.target.closest("[data-thumb]").classList.add("active");
          });
        }
      });
    }

    // if (document.querySelector("[data-tabs-navigation]")) {
    //   new Swiper("[data-tabs-navigation]", {
    //     observer: true,
    //     observeParents: true,
    //     slidesPerView: "auto",
    //     spaceBetween: 30,
    //     speed: 500,
    //     breakpoints: {
    //       1024: {
    //         spaceBetween: 10,
    //       },
    //       1250: {
    //         spaceBetween: 30,
    //       },
    //     },
    //     on: {},
    //   });
    // }

    if (document.querySelector("[data-comments]")) {
      new Swiper("[data-comments]", {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 15,
        speed: 500,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-compilation]")) {
      new Swiper("[data-compilation]", {
        modules: [Navigation],
        observer: true,
        loop: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 500,
        navigation: {
          nextEl: "[data-compilation-next]",
          prevEl: "[data-compilation-prev]",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1250: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-trailer-01]")) {
      new Swiper("[data-trailer-01]", {
        modules: [Autoplay],
        init: true,
        loop: true,
        observer: true,
        initialSlide: 2,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 6000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            direction: "vertical",
            spaceBetween: 10,
          },
          1250: {
            direction: "vertical",
            spaceBetween: 20,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-trailer-02]")) {
      new Swiper("[data-trailer-02]", {
        modules: [Autoplay],
        init: true,
        loop: true,
        observer: true,
        initialSlide: 2,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 8000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            direction: "vertical",
            spaceBetween: 10,
          },
          1250: {
            direction: "vertical",
            spaceBetween: 20,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-trailer-03]")) {
      new Swiper("[data-trailer-03]", {
        modules: [Autoplay],
        init: true,
        loop: true,
        observer: true,
        initialSlide: 2,
        observeParents: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 7000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            direction: "vertical",
            spaceBetween: 10,
          },
          1250: {
            direction: "vertical",
            spaceBetween: 20,
          },
        },
        on: {},
      });
    }

    if (document.querySelector("[data-news]")) {
      new Swiper("[data-news]", {
        modules: [Navigation, Pagination],
        observer: true,
        loop: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 10,
        watchSlidesProgress: true,
        speed: 500,
        navigation: {
          nextEl: "[data-news-next]",
          prevEl: "[data-news-prev]",
        },
        pagination: {
          el: "[data-news-pagination]",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
        },
        on: {},
      });
    }
  }
};
// Инициализация слайдеров
