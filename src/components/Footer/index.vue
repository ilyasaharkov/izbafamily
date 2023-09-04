<template>
  <section class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div>
          <h4 class="footer-logo">{{ footerModelViewObject.title }}</h4>
          <p class="footer-copyright">{{ footerModelViewObject.copyright }}</p>
        </div>
        <div class="footer-block__wrapper" :style="`
    grid-template-columns: repeat(${footerModelViewObject.block.length}, 1fr)`">
          <div
              v-for="item in footerModelViewObject.block"
              :key="item.id"
              class="footer-block">
            <p class="footer-block__title">{{ item.title }}</p>
            <div class="footer-block__link--wrapper">
              <button
                  v-for="link in item.links"
                  :key="link.id"
                  class="footer-block__link">
                {{ link.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { footerModelViewObject } from "../../viewModels/Footer/";
export default {
  name: "index",
  setup() {
    return {
      footerModelViewObject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";

@media screen and (min-width: 340px) {
  .footer {
    background-color: $black;
    margin: 60px 0 0 0;
    padding: 50px 0;
  }
  .footer-wrapper {
    display: grid;
    flex-wrap: wrap;
    gap: 40px;
  }
  .footer-logo {
    color: $white;
    font-size: 18px;
  }
  .footer-copyright {
    color: $white-smoke;
    font-size: 12px;
  }
  .footer-block__wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .footer-block__title {
    color: $white;
    font-size: 16px;
    font-weight: 500;
  }
  .footer-block__link--wrapper {
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: self-start;
    row-gap: 15px;
    min-height: 164px;
  }
  .footer-block__link {
    text-align: left;
    color: $white-smoke;
    line-height: 130%;
    font-size: 13px;
    transition: all .3s ease;
    &:hover {
      color: $f15c63;
    }
  }
}

@media screen and (min-width: 768px) {
  .footer {
    background-color: $black;
    margin: 60px 0 0 0;
    padding: 50px 0;
  }
  .footer-wrapper {
    display: grid;
    flex-wrap: wrap;
    gap: 40px;
  }
  .footer-logo {
    color: $white;
    font-size: 18px;
  }
  .footer-copyright {
    color: $white-smoke;
    font-size: 12px;
  }
  .footer-block__wrapper {
    display: grid;
    column-gap: 40px;
  }
  .footer-block__title {
    color: $white;
    font-size: 16px;
    font-weight: 500;
  }
  .footer-block__link--wrapper {
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: self-start;
    row-gap: 15px;
    min-height: 164px;
  }
  .footer-block__link {
    text-align: left;
    color: $white-smoke;
    line-height: 130%;
    font-size: 13px;
    transition: all .3s ease;
    &:hover {
      color: $f15c63;
    }
  }
}

@media screen and (min-width: 992px) {
  .footer {
    background-color: $black;
    margin: 60px 0 0 0;
    padding: 50px 0;
  }
  .footer-wrapper {
    display: grid;
    grid-template-columns: 400px auto;
  }
  .footer-logo {
    color: $white;
    font-size: 18px;
  }
  .footer-copyright {
    color: $white-smoke;
    font-size: 12px;
  }
  .footer-block__wrapper {
    display: grid;
    column-gap: 40px;
  }
  .footer-block__title {
    color: $white;
    font-size: 16px;
    font-weight: 500;
  }
  .footer-block__link--wrapper {
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: self-start;
    row-gap: 15px;
    min-height: 164px;
  }
  .footer-block__link {
    text-align: left;
    color: $white-smoke;
    line-height: 130%;
    font-size: 13px;
    transition: all .3s ease;
    &:hover {
      color: $f15c63;
    }
  }
}

@media screen and (min-width: 1200px) {
  .footer {
    background-color: $black;
    margin: 60px 0 0 0;
    padding: 50px 0;
  }
  .footer-wrapper {
    display: grid;
    grid-template-columns: 400px auto;
  }
  .footer-logo {
    color: $white;
    font-size: 18px;
  }
  .footer-copyright {
    color: $white-smoke;
    font-size: 12px;
  }
  .footer-block__wrapper {
    display: grid;
    column-gap: 40px;
  }
  .footer-block__title {
    color: $white;
    font-size: 16px;
    font-weight: 500;
  }
  .footer-block__link--wrapper {
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: self-start;
    row-gap: 15px;
    min-height: 164px;
  }
  .footer-block__link {
    text-align: left;
    color: $white-smoke;
    line-height: 130%;
    font-size: 13px;
    transition: all .3s ease;
    &:hover {
      color: $f15c63;
    }
  }
}
</style>
