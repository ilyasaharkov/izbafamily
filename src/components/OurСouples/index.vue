<template>
  <section class="our-couples">
    <div class="container">
      <h2 class="our-couples__title">{{ ourCouplesModelViewObject.title }}</h2>
      <h3 class="our-couples__subtitle">{{ ourCouplesModelViewObject.subtitle }}</h3>
      <p class="our-couples__offer">{{ ourCouplesModelViewObject.offer }}</p>
      <div class="our-couples__card--wrapper">
        <OurCouplesCard
            v-for="card in ourCouplesModelViewObject.cards"
            :key="card.id"
            :item="card"
            :button="ourCouplesModelViewObject.button"
        />
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
  @media screen and (min-width: 340px) {
    .our-couples {
      margin: 40px 0;
    }
    .our-couples__title {
      font-size: 26px;
      font-weight: 600;
      margin: 0 0 10px 0;
      color: $black;
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
    .our-couples__card--wrapper {
      display: grid;
      //grid-template-columns: repeat(1, 1fr);
      grid-template-columns: repeat(
                auto-fill, minmax(260px, 1fr));
      gap: 15px;
      padding: 20px 10px 20px 10px;
      background-color: #e1e1e1;
      border-radius: 20px;
    }
  }
  @media screen and (min-width: 1200px) {
    .our-couples__card--wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding: 20px;
    }
  }
</style>
