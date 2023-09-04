<template>
  <section class="our-couples">
    <div class="container">
      <h2 class="our-couples__title">{{ ourCouplesModelViewObject.title }}</h2>
      <h3 class="our-couples__subtitle">{{ ourCouplesModelViewObject.subtitle }}</h3>
      <p class="our-couples__offer">{{ ourCouplesModelViewObject.offer }}</p>
      <div class="our-couples__card--block">
        <div class="our-couples__card--wrapper">
          <OurCouplesCard
              v-for="card in ourCouplesModelViewObject.cards"
              :key="card.id"
              :item="card"
              :button="ourCouplesModelViewObject.button"
          />
        </div>
        <button class="our-couples__card--more"> {{ ourCouplesModelViewObject.more }}</button>
      </div>
    </div>
  </section>
</template>

<script>
import { ourCouplesModelViewObject } from "@/viewModels/OurСouples";
import OurCouplesCard from './card'
export default {
  name: "index",
  components: { OurCouplesCard },
  setup() {
    return {
      ourCouplesModelViewObject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";
.our-couples__title {
  @include title()
}
.our-couples__card--more {
  @include buttonWidth();
  background-color: $white!important;
  color: $black!important;
  border: 1px solid $f15c63!important;
  &:hover {
    background-color: $f15c63!important;
    color: $white!important;
  }
}
  @media screen and (min-width: 340px) {
    .our-couples {
      margin: 40px 0;
    }
    .our-couples__subtitle, .our-couples__offer {
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 10px 0;
      line-height: 140%;
      color: $black;
    }
    .our-couples__offer {
      font-size: 14px;
      font-weight: 600;
      margin: 0 0 30px 0;
      line-height: 140%;
      color: $black;
      opacity: 0.5;
    }
    .our-couples__card--block {
      padding: 20px 10px 20px 10px;
      background-color: $white-smoke;
      border-radius: 20px;
    }
    .our-couples__card--wrapper {
      display: grid;
      grid-template-columns: repeat(
                auto-fill, minmax(260px, 1fr));
      gap: 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    .our-couples__subtitle {
      font-size: 18px;
      margin: 0 0 20px 0;
    }
    .our-couples__offer {
      font-size: 18px;
    }
    .our-couples__card--block {
      padding: 30px 40px 30px 40px;
      background-color: $white-smoke;
      border-radius: 20px;
    }
    .our-couples__card--wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }
  }
</style>
