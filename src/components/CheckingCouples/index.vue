<template>
  <div class="checking-couples">
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
          <img class="checking-couples__block--image" :src="contact.icon">
          <template v-if="contact.type === 'phone'">
            <a class="checking-couples__block--phone" :href="`tel: ${contact.info}`">{{ contact.info }}</a>
          </template>
          <template v-else>
            <p class="checking-couples__block--text"> {{ contact.info }} </p>
          </template>
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
    margin: 0 0 20px 0;
  }
  .checking-couples__title {
    font-size: 26px;
    margin: 0 0 20px 0;
  }
  .checking-couples__subtitle {
    font-size: 16px;
    margin: 0 0 20px 0;
    line-height: 130%;
    font-weight: 500;
  }
  .checking-couples__offer {
    font-size: 16px;
    margin: 0 0 20px 0;
    line-height: 130%;
    font-weight: 500;
  }
  .checking-couples__wrapper {
    padding: 20px 30px 20px 30px;
    border-radius: 20px;
    background: $white-smoke;
    display: flex;
    column-gap: 10px;
    row-gap: 20px;
    margin: 20px 0 0 0;
    flex-wrap: wrap;
  }
  .checking-couples__block {
    display: flex;
    align-items: center;
    column-gap: 20px;
    flex: 1 1 100%;
  }
  .checking-couples__block--phone {
    font-size: 16px;
    color: $white-blue;
    font-weight: 500;
  }
  .checking-couples__block--image {
    width: 40px;
    height: 40px;
  }
  .checking-couples__block--text {
    font-size: 16px;
    font-weight: 500;
    line-height: 125%;
  }
}

@media screen and (min-width: 992px) {
  .checking-couples {
    margin: 0 0 60px 0;
  }
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
  .checking-couples__wrapper {
    padding: 20px 30px 20px 30px;
    border-radius: 20px;
    background: $white-smoke;
    display: flex;
    column-gap: 10px;
    row-gap: 20px;
    margin: 20px 0 0 0;
    flex-wrap: wrap;
  }
  .checking-couples__block {
    display: flex;
    align-items: center;
    gap: 15px;
    &:first-child {
      flex: 0 100%;
    }
    &:nth-child(2) {
      flex: 0 25%;
    }
    &:last-child {
      flex: 0 45%;
    }
  }
  .checking-couples__block--phone {
    font-size: 16px;
    color: $white-blue;
    font-weight: 500;
  }
  .checking-couples__block--image {
    width: 40px;
    height: 40px;
  }
  .checking-couples__block--text {
    font-size: 16px;
    font-weight: 500;
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
    margin: 0 0 30px 0;
  }
  .checking-couples__wrapper {
    padding: 20px 30px 20px 30px;
    border-radius: 20px;
    background: $white-smoke;
    display: flex;
    gap: 10px;
    margin: 20px 0 0 0;
  }
  .checking-couples__block {
    display: flex;
    align-items: center;
    gap: 15px;
    align-self: center;
    justify-content: center;
    &:first-child {
      flex: 1;
    }
    &:nth-child(2) {
      flex: 0 25%;
    }
    &:last-child {
      flex: 0 25%;
    }
  }
  .checking-couples__block--phone {
    font-size: 16px;
    color: $white-blue;
    font-weight: 500;
  }
  .checking-couples__block--image {
    width: 40px;
    height: 40px;
  }
  .checking-couples__block--text {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
