<template>
  <div class="container-wrapper" style="margin: 0 auto 100px auto">
    <section class="reviews">
      <h3 class="reviews__title">
        {{ reviewsModelViewObject.title }}
      </h3>
      <div class="reviews-card__wrapper">
        <Card
            v-for="item in reviewsModelViewObject.cards"
            :key="item.id"
            :item="item"
        />
      </div>
      <button class="reviews__button">{{ reviewsModelViewObject.button }}</button>
    </section>
  </div>
</template>

<script>
import { reviewsModelViewObject } from "@/viewModels/Reviews";
import Card from './card'
export default {
  name: "index",
  components: { Card },
  setup() {
    return { reviewsModelViewObject }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";

@media screen and (min-width: 340px) {}
@media screen and (min-width: 1200px) {
  .reviews {
    padding: 40px 30px 40px 30px;
  }
  .reviews__button {
    padding: 15.5px 0;
    text-align: center;
    width: 100%;
    background-color: $f15c63;
    border-radius: 15px;
    font-weight: 500;
    color: $white;
  }
}

</style>
