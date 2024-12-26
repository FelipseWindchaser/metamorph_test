<template>
  <div class="nav-mobile">
    <div class="container">
      <ul class="nav-mobile__menu">
        <li>
          <a href="#">
            <span>Home appliances</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>About us</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Contact</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Product</span>
            <i>
              <svg
                class="ico-svg"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use
                  xlink:href="@img/sprites/sprite.svg#arrow_down"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                ></use>
              </svg>
            </i>
          </a>
          <ul>
            <li>
              <a href="#">Product One</a>
            </li>
            <li>
              <a href="#">Product Two</a>
            </li>
            <li>
              <a href="#">Product Three</a>
            </li>
            <li>
              <a href="#">Product Four</a>
            </li>
            <li>
              <a href="#">Product Five</a>
            </li>
          </ul>
        </li>
      </ul>
      <!-- .nav-mobile__menu -->
      <div class="nav-mobile__contacts">
        <div class="nav-mobile__item">
          <a href="mailto:mail@mail.ru" class="contact-item">
            <i>
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
            </i>
            <span>mail@mail.ru</span>
          </a>
        </div>
        <div class="nav-mobile__item">
          <a href="tel:+79112343434" class="contact-item">
            <i>
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
            </i>
            <span>+7 (911) 234-34-34</span>
          </a>
        </div>
      </div>
      <div class="nav-mobile__callback">
        <form>
          <div class="header-callback__form">
            <div class="header-callback__item">
              <label class="field">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  autocomplete="off"
                />
              </label>
            </div>
            <div class="header-callback__item">
              <label class="field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  autocomplete="off"
                />
              </label>
            </div>
            <div class="header-callback__message">
              <label class="field">
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  data-dynamic
                ></textarea>
              </label>
            </div>
          </div>
          <div class="header-callback__footer">
            <label class="checkbox">
              <input
                type="checkbox"
                name="check"
                class="checkbox__input"
                checked
              />
              <span class="checkbox__label">I agree to the Terms</span>
            </label>
            <div class="header-callback__send">
              <button type="submit" class="btn btn-md btn-red">
                <span>Send</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
