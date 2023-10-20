<template>
  <div class="container-wrapper">
    <div class="swiper-top__info">
      <h3 class="swiper-top__info--title">{{ title }}</h3>
      <div class="swiper-navigation">
        <button
            class="swiper-navigation__button swiper-navigation__prev"
            @click.stop="slidePrev"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 22L5 12L15 2" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
        <button
            class="swiper-navigation__button swiper-navigation__next"
            @click.stop="slideNext"
        >
          <svg class="swiper-navigation__button--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.5 22L5 12L15 2" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    <swiper
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :breakpoints="breakpoints"
        @swiper="onSwiper"
    >
      <slot name="content"/>
    </swiper>
  </div>
</template>

<script>
import { Swiper } from 'swiper/vue';
import 'swiper/css';
import { ref } from 'vue'

export default {
  components: {
    Swiper
  },
  props: {
    slidesPerView: {
      type: Number,
      default: 3
    },
    spaceBetween: {
      type: Number,
      default: 20
    },
    title: {
      type: String,
      default: 'Отзывы о нас'
    }
  },
  setup() {
    const swiper = ref()
    const breakpoints = {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      720: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 3,
            spaceBetween: 20
      }
    }

    const onSwiper = (newSwiper) => {
      swiper.value = newSwiper
    };

    const slideNext = () => {
      swiper.value.slideNext()
    };

    const slidePrev = () => {
      swiper.value.slidePrev()
    };

    return {
      onSwiper,
      slideNext,
      slidePrev,
      breakpoints
    };
  },
};
</script>

<style lang="scss">
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";
.swiper {
  cursor: grab;
}
.swiper-slide-custom {
  height: auto;
}
@media screen and (min-width: 340px) {
  .swiper-top__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0;
  }
  .swiper-navigation {
    display: none;
  }
  .swiper-top__info--title {
    @include title();
    margin: 0 0 10px 0!important;
  }
}
@media screen and (min-width: 800px) {
  .swiper-top__info {
    margin: 0 0 30px 0;
  }
  .swiper-top__info--title {
    @include title();
    margin: 0!important;
  }
  .swiper-navigation {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .swiper-navigation__button {
    height: 65px;
    width: 65px;
    background-color: white;
    border-radius: 50%;
  }
  .swiper-navigation__button--svg {
    transform: rotate(180deg);
  }
}
</style>
