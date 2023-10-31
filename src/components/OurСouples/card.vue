<template>
  <div class="our-couples__card">
      <div
          class="our-couples__card--image"
          :style="`background-image: url(${item.image})`"
      />
      <div class="our-couples__card--layout">
        <p class="our-couples__card--title">{{ item.title }}</p>
        <p class="our-couples__card--description">{{ item.description }}</p>
      </div>
    <button
        class="our-couples__card--button"
        @click.stop="initFormModal(item)"
    >
      {{ button }}
    </button>
    </div>
</template>

<script>
export default {
  name: "card",
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    button: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {
      initFormModal
    }
  }
}
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/_variables.scss";
@import "/src/assets/scss/_mixin.scss";

.our-couples__card--button {
  @include buttonWidth()
}
 @media screen and (min-width: 340px) {
   .our-couples__card {
     background: $white;
     padding: 0 0 20px 0;
     border-radius: 20px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
   }
   .our-couples__card--layout {
     padding: 15px 15px 0 15px;
   }
   .our-couples__card--button {
     margin: 25px 15px 0 15px;
   }
   .our-couples__card--image {
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
     margin: 0 0 10px 0;
     height: 300px;
     width: 100%;
     background-position: top;
     background-repeat: no-repeat;
     background-size: cover;
   }
   .our-couples__card--title {
     margin: 0 0 5px 0;
     font-weight: 600;
   }
   .our-couples__card--description {
     font-weight: 500;
     opacity: 0.9;
     font-size: 14px;
   }
 }
 @media screen and (min-width: 1200px) {
   .our-couples__card {
     background: $white;
     padding: 0 0 20px 0;
   }
   .our-couples__card--layout {
     padding: 15px 15px 0 15px;
   }
   .our-couples__card--image {
     border-top-left-radius: 20px;
     border-top-right-radius: 20px;
     margin: 0 0 10px 0;
   }
   .our-couples__card--title {
     margin: 0 0 5px 0;
     font-weight: 600;
   }
   .our-couples__card--description {
     font-weight: 500;
     opacity: 0.9;
     font-size: 14px;
   }

 }
</style>
