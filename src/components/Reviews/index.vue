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
@import "/src/assets/scss/_mixin.scss";

.reviews__button {
  @include button();
  width: 100%;
  margin: 30px 0 0 0;
}

.reviews__title {
  @include title()
}

@media screen and (min-width: 340px) {
  .reviews {
    padding: 20px 10px 20px 10px;
  }
}
@media screen and (min-width: 1200px) {
  .reviews {
    padding: 40px 30px 40px 30px;
  }
}

</style>
