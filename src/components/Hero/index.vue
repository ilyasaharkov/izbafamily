<template>
  <header
    class="hero"
    :style="{ backgroundImage: `url(${heroViewObject.background_image})` }"
  >
    <div class="hero-layout" />
    <div class="container">
      <div class="hero-wrapper">
        <h1 class="hero__title" v-html="heroViewObject.title" />
        <p class="hero__description">{{ heroViewObject.description }}</p>
        <button class="hero__button" @click="scrollToElementToID('request')">{{ heroViewObject.button }}</button>
        <div class="hero-offers__wrapper">
          <div
            v-for="item in heroViewObject.offers"
            :key="item.id"
            class="hero-offers__block"
          >
            <div class="hero-offers__block--top">
              <svg
                class="t997__checkmark"
                style="width: 20px; height: 20px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.70711 13.2071L15.2071 7.70711L13.7929 6.29289L9 11.0858L6.20711 8.29289L4.79289 9.70711L8.29289 13.2071L9 13.9142L9.70711 13.2071Z"
                  fill="#ffffff"
                ></path>
              </svg>
              <p class="hero-offers__block--top_title">{{ item.title }}</p>
            </div>
            <p class="hero-offers__block--top_description">
              {{ item.subtitle }}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { heroViewObject } from "@/viewModels/Hero/";
import { scrollToElementToID } from '@/utils/ScrollToElement/index'
export default {
  setup() {
    return {
      heroViewObject,
      scrollToElementToID
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";

.hero__button {
  @include button()
}

@media screen and (min-width: 340px) {
  .hero {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px 0 20px 0;
    transition: all 3ms ease;
    margin: 20px 0
  }
  .hero-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .hero-wrapper {
    position: relative;
    z-index: 2;
  }
  .hero__title {
    font-size: 30px;
    color: white;
    margin: 0 0 20px 0;
    line-height: 140%;
  }
  .hero__description {
    font-size: 14px;
    color: $white;
    width: 90%;
    margin: 0 0 30px 0;
    line-height: 130%;
  }
  .hero-offers__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;
    row-gap: 25px;
    margin: 40px 0 0 0;
  }
  .hero-offers__block--top {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 0 0 10px 0;
  }
  .hero-offers__block--top_title {
    font-size: 16px;
    font-weight: 600;
    color: $white;
    margin: 0;
  }
  .hero-offers__block--top_description {
    font-size: 14px;
    font-weight: 500;
    color: $white;
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .hero {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px 0 20px 0;
    transition: all 0.03s ease;
    margin: 30px 0;
  }
  .hero-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .hero-wrapper {
    position: relative;
    z-index: 2;
  }
  .hero__title {
    font-size: 36px;
    color: $white;
    margin: 0 0 20px 0;
    line-height: 110%;
  }
  .hero__description {
    font-size: 18px;
    color: $white;
    width: 90%;
    margin: 0 0 30px 0;
    line-height: 130%;
  }
  .hero-offers__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 25px;
    margin: 40px 0 0 0;
  }
  .hero-offers__block--top {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 0 0 10px 0;
  }
  .hero-offers__block--top_title {
    font-size: 16px;
    font-weight: 600;
    color: $white;
    margin: 0;
  }
  .hero-offers__block--top_description {
    font-size: 14px;
    font-weight: 500;
    color: $white;
    margin: 0;
  }
}

@media screen and (min-width: 1200px) {
  .hero {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    padding: 60px 0 40px 0;
    margin: 40px 0;
  }
  .hero-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .hero-wrapper {
    position: relative;
    z-index: 2;
  }
  .hero__title {
    font-size: 48px;
    color: $white;
    margin: 0 0 20px 0;
    line-height: 110%;
  }
  .hero__description {
    font-size: 22px;
    color: $white;
    width: 760px;
    margin: 0 0 50px 0;
  }
  .hero-offers__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 25px;
    margin: 60px 0 0 0;
  }
  .hero-offers__block--top {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 0 0 10px 0;
  }
  .hero-offers__block--top_title {
    font-size: 20px;
    font-weight: 600;
    color: $white;
    margin: 0;
  }
  .hero-offers__block--top_description {
    font-size: 18px;
    font-weight: 500;
    color: $white;
    margin: 0;
  }
}
</style>
