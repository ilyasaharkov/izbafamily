<template>
  <div class="checking-couples" style="padding: 0 0 100px 0">
    <div class="container">
      <h2 class="checking-couples__title">
        {{ checkingCouplesModelViewObject.title }}
      </h2>
      <p class="checking-couples__subtitle">{{ checkingCouplesModelViewObject.subtitle }}</p>
      <p class="checking-couples__offer">{{ checkingCouplesModelViewObject.offer }}</p>
      <div class="checking-couples__wrapper">
        <div
            v-for="contact in checkingCouplesModelViewObject.contacts"
            :key="contact.id"
            class="checking-couples__block"
        >
          <img :src="contact.icon">
          {{ contact }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { checkingCouplesModelViewObject } from "@/viewModels/CheckingCouples";
export default {
  name: "index",
  setup() {
    return {
      checkingCouplesModelViewObject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@media screen and (min-width: 340px) {
  .checking-couples {
    margin: 40px 0;
  }
  .checking-couples__title {
    font-size: 26px;
    font-weight: 600;
    margin: 0 0 10px 0;
    color: $black;
  }
  .checking-couples__subtitle, .checking-couples__offer {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 10px 0;
    line-height: 140%;
    color: $black;
  }
  .checking-couples__offer {
    opacity: 0.5;
  }
}
@media screen and (min-width: 1200px) {
  .checking-couples__title {
    font-size: 36px;
    margin: 0 0 20px 0;
  }
  .checking-couples__subtitle {
    font-size: 18px;
    margin: 0 0 20px 0;
  }
  .checking-couples__offer {
    font-size: 18px;
  }
}
</style>
