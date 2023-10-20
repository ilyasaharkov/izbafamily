<template>
  <div class="container-wrapper">
    <section class="reviews">
      <Slider>
        <template #content>
          <SwiperSlide
              v-for="item in reviewsModelViewObject.cards"
              :key="item.id"
              class="swiper-slide-custom"
          >
            <Card :item="item" />
          </SwiperSlide>
        </template>
      </Slider>
    </section>
  </div>
</template>

<script>
import { reviewsModelViewObject } from "@/viewModels/Reviews";
import Card from './card'
import Slider from "@/components/Universal/Slider.vue"
import { SwiperSlide } from 'swiper/vue';
export default {
  name: "index",
  components: {
    Card,
    Slider,
    SwiperSlide
  },
  setup() {
    return {
      reviewsModelViewObject

    }
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
    margin: 0 0 40px 0;
  }
}
@media screen and (min-width: 1200px) {
  .reviews {
    padding: 40px 30px 60px 30px;
    margin: 0 auto 60px auto;
  }
}

</style>
