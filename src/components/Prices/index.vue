<template>
  <section class="prices">
    <div class="container">
      <h3 class="prices-tittle">{{ pricesModelViewObject.title }}</h3>
      <div class="prices-card__wrapper">
        <Card v-for="price in pricesModelViewObject.info" :key="price.id" :item="price">
          <template #button>
            <button class="prices-button">{{ pricesModelViewObject.button }}</button>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import { pricesModelViewObject } from "@/viewModels/Prices";
import Card from './card'
export default {
  name: "index",
  components: { Card },
  setup() {
    return {
      pricesModelViewObject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@media screen and (min-width: 340px) {
  .prices { margin: 0 0 20px 0 }
  .prices-tittle {
    font-size: 26px;
    margin: 0 0 20px 0;
    font-weight: 600;
  }
  .prices-card__wrapper {
    display: grid;
    grid-template-columns: repeat(
                auto-fill, minmax(260px, 1fr));
    gap: 20px;
  }
  .prices-button {
    padding: 10px 0;
    background: $f15c63;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 0 0;
    border-radius: 10px;
    color: $white;
  }
}
@media screen and (min-width: 1200px) {
  .prices { margin: 0 0 60px 0 }
  .prices-tittle {
    font-size: 36px;
    font-weight: 600;
    margin: 0 0 40px 0;
  }
  .prices-card__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .prices-button {
    padding: 15px 0;
    background: $f15c63;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    margin: 40px 0 0 0;
    border-radius: 10px;
    color: $white;
  }
}
</style>
