<template>
  <div class="prices-card">
    <div class="prices-card__top">
      <img class="prices-card__image" :src="item.icon" :alt="item.title">
      <h4 class="prices-card__title">{{ item.title }}</h4>
    </div>
    <div class="prices-card__bottom">
      <div class="prices-card__offer--info" v-for="offer in item.offers" :key="offer">
        <img class="prices-card__icon" src="@/assets/images/check.png" alt="icon">
        <p class="prices-card__offer">{{ offer.title }}</p>
      </div>
    </div>
    <slot name="button"/>
  </div>
</template>

<script>
export default {
  name: "block",
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
  @media screen and (min-width: 340px) {
    .prices-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 300px;
      background-color: $white-smoke;
      border-radius: 20px;
      padding: 30px;
    }
    .prices-card__image {
      width: 50px;
      height: 50px;
      margin: 0 0 15px 0;
    }
    .prices-card__offer--info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 10px;
    }
    .prices-card__icon {
      width: 30px;
      height: 30px;
    }
    .prices-card__top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 0 20px 0;
    }
    .prices-card__bottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 15px;
    }
  }
  @media screen and (min-width: 1200px) {
    .prices-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 300px;
      background-color: $white-smoke;
      border-radius: 20px;
      padding: 30px;
    }
    .prices-card__image {
      width: 50px;
      height: 50px;
      margin: 0 0 15px 0;
    }
    .prices-card__offer--info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 10px;
    }
    .prices-card__icon {
      width: 30px;
      height: 30px;
    }
    .prices-card__top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 0 20px 0;
    }
    .prices-card__bottom {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      row-gap: 15px;
    }
  }
</style>
