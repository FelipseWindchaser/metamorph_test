<template>
  <div :class="`section section--md${white ? ' section--white' : ''}`">
    <div class="container">
      <div :class="`item-category${reverse ? ' item-category--reverse' : ''}`">
        <div class="item-category__media">
          <Image :image="image" :altName="altName" :className="className" />
          <!-- <img
            src="@img/content/item_section_image.jpg"
            class="img-cover"
            alt=""
          /> -->
        </div>
        <div v-if="full" class="item-category__content">
          <div class="item-category__tag">
            {{ content.tag }}
          </div>
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">
                {{ content.title }}
              </a>
            </div>
            <div class="item-category__text">
              <p>
                {{ content.text }}
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li v-for="item in list">
              {{ item.text }}
            </li>
          </ul>
          <div class="item-category__button">
            <a href="#" class="btn btn-red">
              <span>
                {{ content.button }}
              </span>
            </a>
          </div>
        </div>
        <div v-else class="item-category__content">
          <div class="item-category__wrap">
            <div class="item-category__title">
              <a href="#">
                {{ content.title }}
              </a>
            </div>
            <div class="item-category__text">
              <p>
                {{ content.text }}
              </p>
            </div>
          </div>
          <ul class="item-category__list">
            <li v-for="item in list">
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
      <!-- .item-category -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    tag?: string;
    title: string;
    text: string;
    button?: string;
  };
  list: {
    text: string;
  }[];

  reverse?: boolean;
  white?: boolean;
  full?: boolean;
  image: {
    data: {
      attributes: {
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
          source: {
            url: string;
          };
        };
      };
    };
  };
  altName: string;
  className: string;
}>();
</script>

<style scoped>
.item-category {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  row-gap: 1.25rem;
}

.item-category__media {
  display: block;
  overflow: hidden;
  border-radius: 0.625rem;
}

.item-category__tag {
  color: var(--black);
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
  margin-bottom: 0.625rem;
  padding-bottom: 0.625rem;
}

.item-category__tag:before {
  left: 0;
  bottom: 0;
  content: "";
  width: 60px;
  height: 1px;
  position: absolute;
  background-color: var(--red);
}

.item-category__title {
  font-weight: 800;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: var(--black);
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  font-family: var(--font-secondary);
}

.item-category__title a {
  color: var(--black);
  text-decoration: none;
}

.item-category__title a:hover {
  color: var(--black);
  text-decoration: none;
}

.item-category__content {
  color: var(--gray);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.item-category__text {
  margin-bottom: 1.875rem;
}

.item-category__text p {
  margin-bottom: 1.25rem;
}

.item-category__text p:last-child {
  margin-bottom: 0;
}

.item-category__list {
  margin: 0 0 1.875rem 0;
  padding: 0;
  list-style: none;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 1.25rem;
}

.item-category__list:last-child {
  margin-bottom: 0;
}

.item-category__list li {
  position: relative;
  padding-left: 1.875rem;
}

.item-category__list li:before {
  left: 0;
  top: calc(50% - 8px);
  content: "";
  width: 1rem;
  height: 1rem;
  position: absolute;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjAnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyMCAyMCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTguOTQ1NCAwLjA0NDgzODJDOC4xNzg3NiAwLjEyNDM2OSA3LjE0MzIxIDAuMzczMjc2IDYuNDM0MjcgMC42NDg0MzJDNS41MDUwNSAxLjAwOTA2IDQuNDk4MjUgMS41OTA2MiAzLjcyMTUzIDIuMjE1MzFMMy4zNTI4MiAyLjUxMTg3TDMuODczMTcgMy4wMzMzMUM0LjE1OTM4IDMuMzIwMDcgNC40MDM4NCAzLjU1NDcyIDQuNDE2NDIgMy41NTQ3MkM0LjQyODk5IDMuNTU0NzIgNC41NjEwNiAzLjQ1NzQ2IDQuNzA5OTMgMy4zMzg1NUM1Ljg1OTM1IDIuNDIwNDYgNy4yNzYxIDEuODA5NiA4Ljc5NzM1IDEuNTc2MTNDOS4zMjY3MyAxLjQ5NDkyIDEwLjU4OTYgMS40ODQ4NCAxMS4wOTM4IDEuNTU3ODFDMTEuNjAxNiAxLjYzMTMyIDEyLjI3OTkgMS43ODk5MiAxMi43MzQ1IDEuOTQxNDhDMTMuNTY1NCAyLjIxODQzIDE0LjYxNTIgMi43OTM5NCAxNS4zMDkyIDMuMzUyOTJDMTUuNDQ3IDMuNDYzOSAxNS41NzAzIDMuNTU0NzIgMTUuNTgzMiAzLjU1NDcyQzE1LjU5NjEgMy41NTQ3MiAxNS44NDA4IDMuMzIwMDcgMTYuMTI3IDMuMDMzMzFMMTYuNjQ3NCAyLjUxMTg3TDE2LjI4MjcgMi4yMTkxN0MxNC43MzUyIDAuOTc2OTg3IDEyLjkxOTMgMC4yMzAzNDYgMTAuOTgyMyAwLjAzOTgzODJDMTAuNTA3MiAtMC4wMDY5MTk2MiA5LjQxODUyIC0wLjAwNDIyNDMyIDguOTQ1NCAwLjA0NDgzODJaTTkuMzk0NjIgMi42ODAwN0M5LjExMDA5IDIuNzA5NzIgOC40NTk1IDIuODE0MzMgOC4zMTA2MyAyLjg1NDMzTDguMTY0MTUgMi44OTM2N0w4LjE2NDgxIDYuNTE1MjNDOC4xNjU1NiAxMC40OTQ1IDguMTYyODIgMTAuNDQzMyA4LjQwMjI3IDEwLjkzMDlDOC44NzQwMyAxMS44OTE2IDEwLjE0MiAxMi4xOTgzIDExLjA1MjMgMTEuNTcxOUMxMS40NjUxIDExLjI4NzkgMTEuNzA4MSAxMC44MzM1IDExLjc5NTEgMTAuMTgyOEMxMS44MjEgOS45ODkyOSAxMS44MzYgOC41OTY0NCAxMS44MzYgNi4zODU0MlYyLjg5MzY3TDExLjY4OTUgMi44NTQ1M0MxMS4xOTcgMi43MjI5NiA5LjkxNjU3IDIuNjI1NjIgOS4zOTQ2MiAyLjY4MDA3Wk02LjYxMzI1IDMuNDkzNzFDNS4xNzA4MyA0LjI2ODIgNC4wOTI0MyA1LjM4MjM0IDMuMzk3MiA2LjgxNjQ0QzIuMTI4MDIgOS40MzQ0NSAyLjUyNjUzIDEyLjUxODIgNC40MjMyOSAxNC43NTYzQzYuNTcyMTYgMTcuMjkxOSAxMC4xODk1IDE4LjA1NDQgMTMuMTgzNyAxNi42MDI5QzE1LjI4MTggMTUuNTg1NyAxNi43NTY2IDEzLjY3MTQgMTcuMjAyMSAxMS4zODY4QzE3Ljc2MzQgOC41MDgyNCAxNi41MzQ3IDUuNTYxMjggMTQuMDgzOCAzLjkwNzQyQzEzLjgxMzYgMy43MjUxMSAxMy4wODk4IDMuMzIwMzUgMTMuMDM0IDMuMzIwMzVDMTMuMDE5NiAzLjMyMDM1IDEzLjAwNzkgNC44NTQ0OSAxMy4wMDc5IDYuNzI5NTdDMTMuMDA3OSA4Ljg2MDI3IDEyLjk5MjYgMTAuMjYwNSAxMi45NjcyIDEwLjQ2MzRDMTIuODQwOCAxMS40NzE0IDEyLjE1NzUgMTIuMzg0MyAxMS4yMTc5IDEyLjgwMDRDMTAuNTg4MSAxMy4wNzkzIDkuODAwMTcgMTMuMTM2NCA5LjE2MDI0IDEyLjk0OTVDOC4zMzQ0NiAxMi43MDgzIDcuNzA0NSAxMi4xNzE3IDcuMzI1NTIgMTEuMzg2OEM2Ljk5NTQ4IDEwLjcwMzIgNy4wMTU3NSAxMC45ODMgNy4wMDE4OCA2LjkyMzg2QzYuOTk1MTMgNC45NDE5MSA2Ljk3NyAzLjMyMDY2IDYuOTYxNjEgMy4zMjEwMUM2Ljk0NjI2IDMuMzIxMzYgNi43ODk1IDMuMzk5MDYgNi42MTMyNSAzLjQ5MzcxWk0yLjI5NzQzIDMuNjIwNDJDMS4zNTc5NCA0Ljc3OTY4IDAuNzM3MzU0IDUuOTY0OCAwLjM1Nzk3OSA3LjMyNDI1Qy0wLjE2NDAxNCA5LjE5NDY4IC0wLjExNzg4MSAxMS4yNjkzIDAuNDg2NTMzIDEzLjEwNTVDMS40MDI4MiAxNS44ODkxIDMuNTMxMDMgMTguMTcwMiA2LjI0MzEzIDE5LjI3NTRDOC4zMjI0MyAyMC4xMjI4IDEwLjczMDUgMjAuMjM1NyAxMi44NzgxIDE5LjU4NjZDMTYuMTQ2NiAxOC41OTg2IDE4Ljc0NjUgMTUuOTQyNiAxOS42NDM5IDEyLjY3NDVDMTkuNzkxNSAxMi4xMzcgMTkuOTExNCAxMS41MTA5IDE5Ljk0NTkgMTEuMDk3NEMxOS45NjA1IDEwLjkyMjIgMTkuOTg3NSAxMC43Njk2IDIwLjAwNTggMTAuNzU4MkMyMC4wMjQxIDEwLjc0NjkgMjAuMDM5MSAxMC4zOTQ4IDIwLjAzOTEgOS45NzU4OUMyMC4wMzkxIDkuNTU2OTUgMjAuMDI0MSA5LjIyMzQ3IDIwLjAwNTggOS4yMzQ4QzE5Ljk4NzQgOS4yNDYxNyAxOS45NjEgOS4xMDcxOCAxOS45NDcgOC45MjU5M0MxOS44MTU4IDcuMjE4NTkgMTguOTgwNiA1LjIwODIgMTcuNzg0OCAzLjcyMTQ4TDE3LjQ4ODMgMy4zNTI3N0wxNi45NjY4IDMuODczMTJDMTYuNjggNC4xNTkzMyAxNi40NDU0IDQuNDAzNzggMTYuNDQ1NCA0LjQxNjM2QzE2LjQ0NTQgNC40Mjg5NCAxNi41NDI3IDQuNTYxMDEgMTYuNjYxNiA0LjcwOTg4QzE3LjQ5ODIgNS43NTcyNiAxOC4wNjYyIDYuOTg2MTMgMTguMzM5NSA4LjMzOTg4QzE4LjgzMjggMTAuNzgyNiAxOC4xOTg1IDEzLjM3MjkgMTYuNjI3NSAxNS4zMzIxQzE0LjkwMTEgMTcuNDg0OSAxMi4xMzIgMTguNjkyNSA5LjQwNDM4IDE4LjQ4MjFDNi43MzQzNCAxOC4yNzYyIDQuMzg1MTcgMTYuOTA1NyAyLjg5OTc0IDE0LjY4NzVDMi4zNDk1IDEzLjg2NTkgMS44NjY0NiAxMi42OTA0IDEuNjYzNjggMTEuNjc5N0MxLjE3MDUyIDkuMjIxNjMgMS43ODgzMyA2LjY1MDgxIDMuMzM4NiA0LjcwOTg4QzMuNDU3NTEgNC41NjEwMSAzLjU1NDc4IDQuNDI4OTQgMy41NTQ3OCA0LjQxNjM2QzMuNTU0NzggNC40MDM3OCAzLjMyMDQ0IDQuMTU5NjQgMy4wMzQwMyAzLjg3Mzc4TDIuNTEzMjkgMy4zNTQxNEwyLjI5NzQzIDMuNjIwNDJaTTAuMDE2NDk0MyAxMC4wMTk2QzAuMDE2NDU1MiAxMC40NDkzIDAuMDIyMTU4NCAxMC42MzAzIDAuMDI5MTg5NiAxMC40MjJDMC4wMzYxODE4IDEwLjIxMzcgMC4wMzYyMjA5IDkuODYyMTQgMC4wMjkyMjg3IDkuNjQwNzhDMC4wMjIyNzU2IDkuNDE5NDEgMC4wMTY1MzM0IDkuNTg5ODggMC4wMTY0OTQzIDEwLjAxOTZaTTkuNzQ2MTggOS40OTMxNkM5LjQ0MDI0IDkuNjQ3ODkgOS4zMzk4OSA5LjkzOTE3IDkuNDg3NTEgMTAuMjQ0MUM5LjU3OTMxIDEwLjQzMzcgOS44MDAwNSAxMC41ODYgOS45ODMyOSAxMC41ODZDMTAuMTMxOCAxMC41ODYgMTAuMzk0MyAxMC40NTA2IDEwLjQ4MjcgMTAuMzI4NEMxMC42NjgyIDEwLjA3MjIgMTAuNTY2OCA5LjY2MTc1IDEwLjI3OCA5LjQ5OTQxQzEwLjA4OTEgOS4zOTMyOCA5Ljk0NzA0IDkuMzkxNiA5Ljc0NjE4IDkuNDkzMTZaJyBmaWxsPScjQTYxOTJFJy8+PC9zdmc+Cg==");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.item-category__button {
  margin-top: 1.875rem;
}

@media (min-width: 768px) {
  .item-category {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-column-gap: 1.25rem;
    -moz-column-gap: 1.25rem;
    column-gap: 1.25rem;
  }
  .item-category__media {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 20.625rem;
    height: 15.625rem;
  }
  .item-category__content {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  .item-category__tag {
    margin-bottom: 0.3125rem;
    padding-bottom: 0.3125rem;
  }
  .item-category__title {
    margin-bottom: 0.625rem;
  }
  .item-category__text {
    margin-bottom: 1.25rem;
  }
  .item-category__list {
    margin-bottom: 1.25rem;
  }
  .item-category__list:last-child {
    margin-bottom: 0;
  }
  .item-category__button {
    margin-top: 1.25rem;
  }
  .item-category__wrap {
    max-width: 33.75rem;
  }
  .item-category--reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
}

@media (min-width: 1250px) {
  .item-category {
    -webkit-column-gap: 3.75rem;
    -moz-column-gap: 3.75rem;
    column-gap: 3.75rem;
  }
  .item-category__media {
    width: 34.125rem;
    height: 34.125rem;
  }
  .item-category__tag {
    font-size: 1rem;
    line-height: 1.1875rem;
    margin-bottom: 0.9375rem;
    padding-bottom: 0.625rem;
  }
  .item-category__tag:before {
    width: 6.875rem;
  }
  .item-category__title {
    font-size: 1.5rem;
    line-height: 1.8125rem;
    margin-bottom: 1.25rem;
  }
  .item-category__content {
    font-size: 1rem;
    line-height: 1.5rem;
  }
  .item-category__text {
    margin-bottom: 2.5rem;
  }
  .item-category__list {
    margin-bottom: 2.5rem;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.875rem;
  }
  .item-category__list:last-child {
    margin-bottom: 0;
  }
  .item-category__list li {
    padding-left: 0;
    padding-top: 1.875rem;
  }
  .item-category__list li:before {
    top: 0;
    left: 0;
  }
  .item-category__button {
    margin-top: 2.5rem;
  }
}

@media (min-width: 1400px) {
  .item-category {
    -webkit-column-gap: 9.6875rem;
    -moz-column-gap: 9.6875rem;
    column-gap: 9.6875rem;
  }
  .item-category--sm {
    display: none;
  }
  .item-category__list {
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2.5rem;
  }
}
</style>
