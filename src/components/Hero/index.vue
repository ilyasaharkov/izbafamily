<template>
  <header
    class="hero"
    :style="{ backgroundImage: `url(${heroViewObject.background_image})` }"
  >
    <div class="hero-layout" />
    <div class="container">
      <div class="hero-wrapper">
        <h1 v-if="heroViewObject.title" class="hero__title" v-html="heroViewObject.title" />
        <p v-if="heroViewObject.description " class="hero__description">{{ heroViewObject.description }}</p>
        <div class="hero-offers__wrapper">
          <div
            v-for="item in heroViewObject.offers"
            :key="item.id"
            class="hero-offers__block"
          >
            <div class="hero-offers__block--top">
              <img class="hero-offers__block--top__image" src="@/assets/images/Hero/success.webp" alt="Проверено">
              <div class="hero-offers__block--top__wrapper">
                <p class="hero-offers__block--top_title">{{ item.title }}</p>
                <p class="hero-offers__block--top_description">
                  {{ item.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="hero__button" @click="scrollToElementToID('request')">{{ heroViewObject.button }}</button>
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
    margin: 0 0 30px 0;
    transition: all 3ms ease;
  }
  .hero__button {
    width: 100%;
  }
  .hero-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
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
    line-height: 110%;
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
    gap: 20px;
    margin: 40px 0 30px 0;
  }
  .hero-offers__block--top {
    display: flex;
    align-items: flex-start;
    column-gap: 10px;
  }
  .hero-offers__block--top__image {
    width: 32px;
    height: 32px;
  }
  .hero-offers__block--top_title {
    font-size: 16px;
    font-weight: 600;
    color: white;
    margin: 0;
  }
  .hero-offers__block--top_description {
    font-size: 13px;
    font-weight: 400;
    line-height: 140%;
    color: #fafafa;
    margin: 0;
    opacity: 0.7;
  }
  .hero-offers__block--top__wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

@media screen and (min-width: 768px) {
  .hero {
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px 0 20px 0;
    transition: all 0.03s ease;
    margin:0 0 30px 0;
  }
  .hero__button {
    width: auto;
  }
  .hero-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
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
    margin: 40px 0;
  }
  .hero-offers__block--top {
    display: flex;
    column-gap: 10px;
    margin: 0 0 10px 0;
  }
  .hero-offers__block--top_title {
    font-size: 16px;
    font-weight: 600;
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
  }
  .hero-layout {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
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
    margin: 60px 0 40px 0;
  }
  .hero-offers__block--top {
    display: flex;
    column-gap: 10px;
    margin: 0 0 10px 0;
  }
  .hero-offers__block--top_title {
    font-size: 20px;
    font-weight: 600;
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
